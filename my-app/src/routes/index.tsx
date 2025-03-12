import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RootLayOut from "../pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout  */}

      <Route
        path="/"
        element={
          <RootLayOut/>
            // {/* <Navbar /> 
            // <Outlet/> */}
         
        }
      >
        <Route index element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="about" element={<About/>} />
      </Route>
    </>
  )
);
export default router;
