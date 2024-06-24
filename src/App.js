import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Models from "./components/Models";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/" element={<Models />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
