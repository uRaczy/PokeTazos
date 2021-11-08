import styled, { css, keyframes } from 'styled-components';

interface Props {
  rotate: boolean;
  isReverse: boolean;
}

const rotateFrame1 = keyframes`
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(90deg);
  }

  100% {
    transform: rotateY(0deg);
  }
`;

export const StyledTazos = styled.div<Props>`
  animation: ${(props) => (props.rotate ? css`${rotateFrame1} 1s linear normal` : '')};
  width: 200px;
  height: 200px;
`;
