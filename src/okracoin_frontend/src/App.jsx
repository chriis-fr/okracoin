import { useState } from 'react';
import { okracoin_backend } from 'declarations/okracoin_backend';
import Page1 from './components/page1';
import "./index.css"
// import SimpleBottomNavigation from './components/bottomnav';

function App() {


  return (
    <main className='border border-white-100'>
      <Page1 />
      {/* <SimpleBottomNavigation /> */}
    </main>
  );
}

export default App;
