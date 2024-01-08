import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/AppHeader";
import BodyComponent from "./Components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error"; 
import Kitchens from "./Components/OurKitchens";
import KitchenMenu from "./Components/KitchenMenu";
import Home from "./Components/Home";
/*
  Components in my app - Header,Body,Footer
  Header - Logo component , Options in header component
  Body - Restaurent card component,search bar component,
  Footer - Copyright,social media links,contact us
*/

const ApplicationLayout = () => {
    return(<div id = "app">
        {HeaderComponent()}
        <Outlet/>
    </div>)
};
const ApplicationRoutes = createBrowserRouter([
  {
    path: '/',
    element: <ApplicationLayout/>,
    children :[
      {
        path : '/About',
        element : <About/>,
      },
      {
        path: '/Contact',
        element: <Contact/>,
      },
      {
        path: '/ourKitchens',
        element: <BodyComponent/>
      },
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/KitchenMenu/:ID',
        element : <KitchenMenu/>
      },
    ],
    errorElement:<Error/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ApplicationRoutes}/>);