import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import { ToastContainer } from "react-toastify";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import CardView from "./components/user/CardView";
import Update from "./components/update/Update";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<CardView />} />
        <Route path="/update" element={<Update />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
