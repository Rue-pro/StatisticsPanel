import { TableRow as TableRowMui, TableRowProps } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../shared/ui/constants';
import Cell from './cell/cell';

const Header: React.FC = () => {
  return (
    <DataContainer>
      <Cell>№</Cell>
      <Cell>ID</Cell>
      <Cell>Name</Cell>
      <Cell>Email</Cell>
      <Cell>Gender</Cell>
      <StatusCell align="center">Status</StatusCell>
    </DataContainer>
  );
};

const TableRow: React.FC<TableRowProps> = (props) => {
  return <TableRowMui component={'div'} {...props} />;
};

const DataContainer = styled(TableRow)`
  && {
    display: grid;
    grid-template-columns: 50px 50px 1fr 1.5fr 100px 118px;
    box-sizing: border-box;
    background-color: ${colors.gray_light};
    border-radius: 16px 16px 0 0;
  }
`;

const StatusCell = styled(Cell)`
  && {
    padding-right: 30px;
  }
`;

export default observer(Header);
