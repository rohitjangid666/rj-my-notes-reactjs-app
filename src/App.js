import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { appUrls } from './appUrls';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { TitleProvider } from './context/TitleContext';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      <div className='content-wrapper'>
        <Sidebar />

        <div className='content-container'>
          <div className='content-box'>
            <TitleProvider>
              <Header />
              <Routes>
                <Route path={appUrls.HOME} element={<Home />} />
              </Routes>
            </TitleProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
