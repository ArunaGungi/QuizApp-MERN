import './App.css';
import Heading from './Components/Heading';
import Form from './Components/Form';
import DisplayScore from './Components/DisplayScore';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}></Route>
        <Route path='/score' element={<DisplayScore/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
