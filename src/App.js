import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
//import UserProvider from './context/user';
import Home from './pages/Home';
import Callback from './pages/Callback';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    //<UserProvider>
      <div className="App">
        <ThemeProvider
          theme={{
            palette: {
              orange: '#FFB200'
            }
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </div>
    //</UserProvider>
  );
}

export default App;
