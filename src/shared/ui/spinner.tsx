import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from './constants';

export enum Size {
  big,
  small,
}

export enum Theme {
  light,
  dark,
}

interface Props extends ContainerProps {
  size?: Size;
  theme?: Theme;
}

const Spinner: React.FC<Props> = (props) => {
  const { height, size: spinnerSize, theme } = props;

  const size = getSpinnerSize(spinnerSize);
  const color = getSpinnerColor(theme);

  return (
    <Container height={height}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 'auto', background: 'transparent', display: 'block' }}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          strokeWidth="8"
          stroke={color}
          strokeDasharray="50.26548245743669 50.26548245743669"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="2s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </Container>
  );
};

export default Spinner;

const getSpinnerSize = (size: Size | undefined): string => {
  switch (size) {
    case Size.big:
      return '100px';
    case Size.small:
      return '16px';
    default:
      return '34px';
  }
};

const getSpinnerColor = (theme: Theme | undefined): string => {
  if (theme === Theme.dark) {
    return colors.gray_light;
  } else {
    return colors.primary;
  }
};

interface ContainerProps {
  height?: number;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props: ContainerProps) => {
    const { height } = props;
    return css`
      height: ${height ? `${height}px` : 'auto'};
    `;
  }}
`;
