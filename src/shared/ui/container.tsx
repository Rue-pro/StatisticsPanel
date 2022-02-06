import React from 'react';
import styled from 'styled-components';
import { COMMON_PADDING, SITE_MAX_WIDTH } from './constants';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = (props) => {
  const { children, className } = props;
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: ${`${SITE_MAX_WIDTH}px`};
  padding: ${COMMON_PADDING};
`;

export default Container;
