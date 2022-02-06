import { Divider, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import { colors, HEADER_HEIGHT } from '../../shared/ui/constants';
import Container from '../../shared/ui/container';

const Header: React.FC = () => (
  <header>
    <ContainerStyled>
      <Title>Statistics panel</Title>
    </ContainerStyled>
    <Divider />
  </header>
);

export default observer(Header);

const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT};
  background-color: ${colors.white};
`;

const Title = styled(Typography)`
  && {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${colors.primary};
  }
`;
