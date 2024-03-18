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
import { ServiceWords } from './components/serviceWords/serviceWords';
import { Collection } from './components/userCollection/collection';
import { Quiz } from './components/quiz/quiz';
import { UserPage } from './components/userPage/userPage';
import { Words } from './components/words/words';

function App() {
  const getLocation = useLocation();
  const location = getLocation.pathname;

  return (
    <div className="App min-h-screen bg-white"> {/*bg-gradient-to-r from-indigo-700 to-indigo-950 */}

      {location !== '/login' && location !== '/register' ? <Header /> : null}

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route index element={<Main />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/serviceWords' element={<ServiceWords />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/userPage' element={<UserPage />} />
          <Route path='/wordsByCategory' element={<Words />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
    </div >
  );
}

export default App;
