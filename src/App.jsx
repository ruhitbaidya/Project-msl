import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TopNav from "./components/Navbar/TopNav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <TopNav />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
