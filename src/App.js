import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Sign_Up from "./pages/Sign_Up";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/sign_up" element={<Sign_Up />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
