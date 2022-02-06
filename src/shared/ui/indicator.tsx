import React from 'react';
import styled, { css } from 'styled-components';
import { colors, shadows } from './constants';

export enum Type {
  active,
  inactive,
}

type Props = ContainerProps;

const Indicator: React.FC<Props> = (props) => {
  const { type } = props;
  return <Container type={type} />;
};

export default Indicator;

interface ContainerProps {
  type: Type;
}

const Container = styled.div<ContainerProps>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  ${(props) => {
    const { type } = props;
    switch (type) {
      case Type.active:
        return css`
          background-color: ${colors.green};
          box-shadow: ${`0px 0px 4px 2px ${shadows.green}`};
        `;
      default:
        return css`
          background-color: ${colors.red};
          box-shadow: ${`0px 0px 4px 2px ${shadows.red}`};
        `;
    }
  }}
`;
