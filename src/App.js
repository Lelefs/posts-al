import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import AppProvider from './hooks';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </Router>
  );
}

export default App;
