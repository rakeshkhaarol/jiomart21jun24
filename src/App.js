import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Sign_Up from "./pages/Sign_Up"; // Change this to PascalCase


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/Sign_Up" element={<Sign_Up />} /> {/* PascalCase */}          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
