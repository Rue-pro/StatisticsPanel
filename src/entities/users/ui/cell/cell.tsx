import { TableCell, TableCellProps } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';

export interface Props extends TableCellProps {
  children: React.ReactNode;
  height?: string | number;
}

const Cell: React.FC<Props> = (props) => {
  const { children, height = 'unset', ...rest } = props;
  return (
    <TableCell style={{ height: height }} component={'div'} {...rest}>
      {children}
    </TableCell>
  );
};

export default observer(Cell);
