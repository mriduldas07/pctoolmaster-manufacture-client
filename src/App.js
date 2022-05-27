import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Home from "./Pages/Home/Home";
import MyProfile from "./Pages/MyProfile";
import Purchase from "./Pages/Purchase";
import Navbar from "./Shared/Navbar";
import RequireAuth from "./Shared/RequireAuth";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="/myProfile" element={<MyProfile></MyProfile>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
