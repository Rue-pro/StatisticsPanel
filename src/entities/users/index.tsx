import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { InfiniteLoader, List } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { userStore } from '../../shared/stores/user.store';
import { SITE_MAX_WIDTH } from '../../shared/ui/constants';
import NoDataMessage from '../../shared/ui/noDataMessage';
import Spinner, { Size as SpinnerSize } from '../../shared/ui/spinner';
import Header from './ui/header';
import Row from './ui/row';

const Users: React.FC = () => {
  const { isLoading, users, amount } = userStore;
  const [page, setPage] = useState(1);

  useEffect(() => {
    userStore.getUsers(page);
  }, []);

  const getMoreRows = () => {
    setPage(page + 1);
    return userStore.getUsers(page);
  };

  const rowHeight = 53;
  const rowCount = 10;
  const height = rowHeight * rowCount;

  if (isLoading && !amount)
    return <Spinner height={height} size={SpinnerSize.big} />;

  return (
    <>
      <Header />
      <InfiniteLoader
        isRowLoaded={({ index }) => Boolean(toJS(users)[index])}
        loadMoreRows={getMoreRows}
        rowCount={amount}
        minimumBatchSize={20}
        threshold={10}
      >
        {({ onRowsRendered, registerChild }) => (
          <List
            height={height}
            ref={registerChild}
            noRowsRenderer={() => <NoDataMessage>No users found</NoDataMessage>}
            onRowsRendered={onRowsRendered}
            rowHeight={rowHeight}
            rowRenderer={({ key, index, ...rest }) => (
              <Row
                key={key}
                index={index + 1}
                data={toJS(users)[index]}
                {...rest}
              />
            )}
            rowCount={toJS(users).length}
            width={SITE_MAX_WIDTH}
            autoWidth={true}
            overscanRowCount={0}
          />
        )}
      </InfiniteLoader>
    </>
  );
};

export default observer(Users);
