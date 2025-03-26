import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";


function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/sign_Up" element={<SignUp />} /> {/* PascalCase */}          
          <Route path="/notfound" element={<NotFound />} /> {/* PascalCase */}          
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
