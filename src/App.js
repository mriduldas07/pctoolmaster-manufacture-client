import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Home from "./Pages/Home/Home";
import MyProfile from "./Pages/MyProfile";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/myProfile" element={<MyProfile></MyProfile>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
