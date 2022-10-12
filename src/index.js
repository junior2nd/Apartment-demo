import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import './index.css';
// import ErrorPage from './pages/Error-page'
import App from './App'
import Home from './pages/Home'
import MemberRegister from './pages/MemberRegister'
import MemberInfo from './pages/MemberInfo'
import ApartmentInfo from './pages/ApartmentInfo'
import Tutorial from './pages/Tutorial'
import Setting from './pages/Setting'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "Home",
        element: <Home/>
      },
      {
        path: "MemberRegister",
        element: <MemberRegister />
      },
      {
        path: "MemberInfo",
        element: <MemberInfo />
      },
      {
        path: "ApartmentInfo",
        element: <ApartmentInfo/>
      },
      {
        path: "Tutorial",
        element: <Tutorial/>
      },
      {
        path: "Setting",
        element: <Setting/>
      },
    ]
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
