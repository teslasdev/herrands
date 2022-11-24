
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import {
  Home,
  Virtual,
  OnSite,
} from './Screen/'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/virtual" element={<Virtual />} />
          <Route path="/onsite" element={<OnSite />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
