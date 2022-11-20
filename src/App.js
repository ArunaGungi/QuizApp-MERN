import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import Form from './Components/Form';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DisplayScore from './Components/DisplayScore';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Form/>
      {/* <BrowserRouter>
            <Routes>
              <Route path='/score' element={<DisplayScore/>}></Route>
            </Routes>  
      </BrowserRouter> */}
    </div>
  );
}

export default App;
