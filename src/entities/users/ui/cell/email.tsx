import { Tooltip } from '@mui/material';
import { runInAction } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react';
import React from 'react';
import styled, { css } from 'styled-components';
import { getUserPostsCount } from '../../../../shared/api';
import Spinner, {
  Size as SpinnerSize,
  Theme as SpinnerTheme,
} from '../../../../shared/ui/spinner';

interface EmailProps {
  userId: string;
  text: string;
}

const Email: React.FC<EmailProps> = (props) => {
  const { userId, text } = props;

  const postStore = useLocalObservable(() => ({
    count: 0,
    isLoading: false,
    getUserPostsCount(userId: string) {
      this.isLoading = true;
      getUserPostsCount(userId)
        .then((data) => {
          if (data === null) {
            alert('Server error');
            return;
          }
          runInAction(() => {
            this.count = data;
          });
        })
        .finally(() => {
          runInAction(() => {
            this.isLoading = false;
          });
        });
    },
  }));

  const { isLoading, count } = postStore;

  return (
    <>
      <Tooltip
        title={
          <TooltipContent withSpinner={isLoading}>
            Posts count:
            {isLoading ? (
              <Spinner size={SpinnerSize.small} theme={SpinnerTheme.dark} />
            ) : (
              ` ${count}`
            )}
          </TooltipContent>
        }
        placement="bottom"
      >
        <div onMouseEnter={() => postStore.getUserPostsCount(userId)}>
          {text}
        </div>
      </Tooltip>
    </>
  );
};

interface TooltipContentProps {
  withSpinner: boolean;
}
const TooltipContent = styled.div<TooltipContentProps>`
  display: flex;
  align-items: center;
  ${(props) => {
    const { withSpinner } = props;
    if (!withSpinner) {
      return css`
        padding: 2px 0;
      `;
    }
    return css``;
  }}
`;

export default observer(Email);
