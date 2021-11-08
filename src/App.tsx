import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';
// import Navbar from 'components/Navbar/Navbar.components';
import Tazos from 'components/Tazos/Tazos.component';

const App = () => (
  <ThemeProvider theme={theme}>
    <Tazos />
    <ul>
      <a href="#top"><li>1</li></a>
      <a href="#top"><li>2</li></a>
    </ul>
  </ThemeProvider>
);

export default App;
