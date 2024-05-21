import { useState } from 'react';
import { okracoin_backend } from 'declarations/okracoin_backend';
import Page1 from './components/page1';
import "./index.css"
import Page2 from './components/page2';
// import SimpleBottomNavigation from './components/bottomnav';

function App() {


  return (
    <main className='border border-white-100'>
      <Page2 />
      {/* <SimpleBottomNavigation /> */}
    </main>
  );
}

export default App;
