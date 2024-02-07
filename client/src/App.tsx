import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/header';
import { Rules } from './components/english-rules/rules';
import { NotFound } from './components/page-not-found/not-found';
import { Main } from './components/main/main';
import { Login } from './components/auth/login';
import { Registration } from './components/auth/registration';

function App() {
  return (
    <div className="App min-h-screen bg-gray-0"> {/*bg-gradient-to-r from-indigo-700 to-indigo-950 */}
      {/* <Login /> */}
      <Registration />
      {/* <BrowserRouter> */}
        {/* <Header /> */}
        <Routes>
          {/* <Route index element={<Main />} /> */}
          <Route path='/Rules' element={<Rules />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>

      {/* </BrowserRouter> */}
      {/* <Footer /> */}
    </div >
  );
}

export default App;
