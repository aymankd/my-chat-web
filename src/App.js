import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Langing/header";

import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Landing from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
