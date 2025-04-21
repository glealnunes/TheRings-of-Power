import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
