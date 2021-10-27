import {
  StyledTazos, StyledLogo, StyledType, StyledName, StyledPokemon,
} from './Tazos.styles';

const Tazos = (): JSX.Element => (
  <StyledTazos>
    <StyledLogo />
    <StyledPokemon />
    <StyledType />
    <StyledName />
  </StyledTazos>
);

export default Tazos;
