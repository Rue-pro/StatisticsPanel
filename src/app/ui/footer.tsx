import { Divider } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import { colors, FOOTER_HEIGHT } from '../../shared/ui/constants';
import Container from '../../shared/ui/container';

const Footer: React.FC = () => (
  <footer>
    <Divider />
    <ContainerStyled></ContainerStyled>
  </footer>
);

export default observer(Footer);

const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
  height: ${FOOTER_HEIGHT};
  background-color: ${colors.white};
`;
