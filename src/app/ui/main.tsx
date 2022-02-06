import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import {
  colors,
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
} from '../../shared/ui/constants';
import Container from '../../shared/ui/container';

const Main: React.FC = () => {
  return (
    <main>
      <ContainerStyled>Main</ContainerStyled>
    </main>
  );
};

export default observer(Main);

const ContainerStyled = styled(Container)`
  height: ${`calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - 2px)`};
  background-color: ${colors.white};
`;
