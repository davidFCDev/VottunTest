
import { useState } from 'react';
import './App.css'
import { searchToken } from './services/controller';

function App() {
  const [tokenUri, setTokenUri] = useState('');

  const handleSearchToken = async () => {
    try {
      const tokenData = await searchToken();
      console.log(tokenData);
      if (tokenData && tokenData.uri) {
        setTokenUri(tokenData.uri);
      } else {
        setTokenUri('');
      }
    } catch (error) {
      console.error('Error al buscar token:', error);
    }
  };

  return (
    <>
      <h1>Welcome to Vottun</h1>
      <button onClick={handleSearchToken}>Mostrar token</button>
      <div style={{marginTop: "20px"}}>
        {tokenUri && (
          <div>
            <img src={tokenUri} alt="Token" className='token-img' style={{borderRadius: "5px"}}/>
          </div>
        )}
      </div>

    </>
  )
}

export default App
