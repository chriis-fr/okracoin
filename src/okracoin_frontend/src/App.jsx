import { useState } from 'react';
import { okracoin_backend } from 'declarations/okracoin_backend';
import Page1 from './components/page1';
import "./index.css"
import Page2 from './components/page2';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"

function App() {

  return(
  <Router>
    <div>
      <Routes>
        <Route path='/' element={<Page2 />} />
        <Route path='/other' element={<Page1 />} />
      </Routes>
    </div>
  </Router>
  );

  // return (
  //   <main className='border border-white-100'>
  //     <Page2 />
  //     {/* <SimpleBottomNavigation /> */}
  //   </main>
  // );
}

export default App;
