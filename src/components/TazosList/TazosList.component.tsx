import Tazos from 'components/Tazos/Tazos.component';
import { StyledTazosList } from './TazosList.styles';

const numberOfTazos = 151;

// const [pokemonsList, setPokemonList] = useState();

const TazosList = () => (
  <StyledTazosList>
    {[...Array(numberOfTazos)].map(() => <Tazos />)}
  </StyledTazosList>
);

export default TazosList;
