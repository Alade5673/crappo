import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Crappo</title>
        <meta
          name="description"
          content="Crypto Wallet"
        />
      </Helmet>

        <div>
          <Home />
        </div>
    </BrowserRouter>
    
    
  );
}

export default App;
