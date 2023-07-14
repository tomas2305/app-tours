import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./components/AppBar";
import Tour from "./pages/Tour";


function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Tour/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
