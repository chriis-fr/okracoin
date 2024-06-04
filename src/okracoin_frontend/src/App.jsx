import Page1 from './components/page1';
import "./index.css"
import Page2 from './components/page2';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import { Experiences } from './components';

function App() {

  return(
  <Router>
    <div>
      <Routes>
        <Route path='/' element={<Page2 />} />
        <Route path='/share' element={<Page1 />} />
        <Route path='/experiences' element={<Experiences />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
