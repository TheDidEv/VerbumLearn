import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/header';
import { Rules } from './components/english-rules/rules';
import { NotFound } from './components/page-not-found/not-found';
import { Main } from './components/main/main';


function App() {
  return (
    <div className="App h-lvh bg-indigo-950"> {/*bg-gradient-to-r from-indigo-700 to-indigo-950 */}
      <BrowserRouter>
      <Header />
        <Routes>
            <Route index element={<Main />} />
            <Route path='/Rules' element={<Rules />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
