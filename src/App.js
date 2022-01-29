import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import UserProvider from './context/user';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <ThemeProvider
          theme={{
            palette: {
              orange: '#FFB200'
            }
          }}
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </div>
    </UserProvider>
  );
}

export default App;
