import { TableRow as TableRowMui, TableRowProps } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import { ListRowProps } from 'react-virtualized';
import styled from 'styled-components';
import { Gender, Status, User } from '../../../shared/api/types';
import Indicator, { Type as IndicatorType } from '../../../shared/ui/indicator';
import Cell, { Props as CellProps } from './cell/cell';
import Email from './cell/email';

interface Props extends ListRowProps {
  data: User;
}

const Row: React.FC<Props> = (props) => {
  const { index, style, data } = props;

  const StyledCell: React.FC<Omit<CellProps, 'height'>> = (props) => {
    const { children, ...rest } = props;
    return (
      <Cell height={style.height} {...rest}>
        {children}
      </Cell>
    );
  };

  return (
    <DataContainer style={style}>
      <StyledCell>{index}</StyledCell>
      <StyledCell>{data.id} &nbsp;</StyledCell>
      <StyledCell>{data.name}</StyledCell>

      <StyledCell>
        <Email userId={data.id} text={data.email} />
      </StyledCell>

      <StyledCell>{data.gender === Gender.male ? 'male' : 'female'}</StyledCell>

      <StyledCell align="center">
        {data.status === Status.active ? (
          <Indicator type={IndicatorType.active} />
        ) : (
          <Indicator type={IndicatorType.inactive} />
        )}
      </StyledCell>
    </DataContainer>
  );
};

const TableRow: React.FC<TableRowProps> = (props) => {
  return <TableRowMui component={'div'} {...props} />;
};

const DataContainer = styled(TableRow)`
  && {
    display: grid;
    grid-template-columns: 50px 50px 1fr 1.5fr 100px 100px;
    box-sizing: border-box;
  }
`;

export default observer(Row);
