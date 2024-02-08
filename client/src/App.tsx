import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './components/header/header';
import { Rules } from './components/english-rules/rules';
import { NotFound } from './components/page-not-found/not-found';
import { Main } from './components/main/main';
import { Login } from './components/auth/login';
import { Registration } from './components/auth/registration';
import { ProtectedLayout } from './components/ProtectedLayout';
import { DefaultLayout } from './components/DefaultLayout';

function App() {
  const getLocation = useLocation();
  const loc = getLocation.pathname;

  return (
    <div className="App min-h-screen bg-gray-0"> {/*bg-gradient-to-r from-indigo-700 to-indigo-950 */}

      {loc !== '/login' && loc !== '/register' ? <Header /> : null}
      
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
          </Route>

          <Route element={<ProtectedLayout />}>
            <Route index element={<Main />} />
            <Route path='/rules' element={<Rules />} />
            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>

        {/* <Footer /> */}
      </div >
      );
}

      export default App;
