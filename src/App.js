import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import signUp from "./pages/signUp";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/sign_up" element={<signUp/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
