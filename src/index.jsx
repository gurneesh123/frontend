import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import ShoppingPage from "./pages/ShoppingPage";
import Cart from "./pages/Cart";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from "./pages/Login";
import AboutUs from "./components/AboutUs";
import ThankYou from "./components/ThnkaYou";

const router = createBrowserRouter([
  
{
  path: "/",
  element: <Home />,
},
{
  path: "/items",
  element: <ShoppingPage />,
},
{
  path: "/itemdesc",
  element: <App />,
},
{
  path: "/cart",
  element: <Cart />,
},
{
  path: "/review",
  element: <Review />,
},
{
  path: "/aboutus",
  element: <AboutUs/>
},
{
  path: "/contact",
  element: <Contact/>,
},
{
  path:"/api/auth/login",
  element:<Login/>
},
{
  path:"/thankyou",
  element:<ThankYou />
}
]);
function App() { 
  
  return <h1>ITEM DESCRIPTION</h1>
}


ReactDOM.render(
  <RouterProvider router={router}>
      <App />
  </RouterProvider>,
  document.getElementById("root")
);
