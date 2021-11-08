import { useState } from 'react';

import { StyledTazos } from './Tazos.styles';
import TazosFront from './Front/TazosFront.component';
import TazosReverse from './Reverse/TazosReverse.component';

const Tazos = (): JSX.Element => {
  const [isReverse, setIsReverse] = useState(false);
  const [rotate, setRotate] = useState(false);

  const rotateTazo = () => {
    setRotate(true);
    setTimeout(() => setIsReverse(!isReverse), 500);
    setTimeout(() => setRotate(false), 1000);
  };

  return (
    <StyledTazos onClick={() => rotateTazo()} isReverse={isReverse} rotate={rotate}>
      { (isReverse)
        ? <TazosReverse />
        : <TazosFront /> }
    </StyledTazos>
  );
};

export default Tazos;
