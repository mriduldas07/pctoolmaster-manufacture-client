import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddProduct from "./admin/AddProduct";
import ManageOrders from "./admin/ManageOrders";
import ManageProducts from "./admin/ManageProducts";
import ManageUser from "./admin/ManageUser";
import Blogs from "./common/Blogs";
import ContactUs from "./common/ContactUs";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Home from "./Pages/Home/Home";
import MyProfile from "./Pages/MyProfile";
import Purchase from "./Pages/Purchase";
import ErrorPage from "./Shared/ErrorPage";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import Portfolio from "./Shared/Portfolio";
import RequireAdmin from "./Shared/RequireAdmin";
import RequireAuth from "./Shared/RequireAuth";
import AllTools from "./user/AllTools";
import Dashboard from "./user/Dashboard";
import Orders from "./user/Orders";
import Review from "./user/Review";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/allTools" element={<AllTools></AllTools>}></Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrders" element={<Orders></Orders>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="manageUser" element={
            <RequireAdmin>
              <ManageUser></ManageUser>
            </RequireAdmin>
          }></Route>
          <Route path="manageOrders" element={
            <RequireAdmin>
              <ManageOrders></ManageOrders>
            </RequireAdmin>
          }></Route>
          <Route path="addProduct" element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>
          }></Route>
          <Route path="manageProduct" element={
            <RequireAdmin>
              <ManageProducts></ManageProducts>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
