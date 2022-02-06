import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { colors } from './constants';

interface Props {
  children: string;
}

const NoDataMessage: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Container>
      <Message>{children}</Message>
    </Container>
  );
};

export default NoDataMessage;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled(Typography)`
  && {
    font-size: 36px;
    font-weight: 700;
    color: ${colors.gray_light};
  }
`;
