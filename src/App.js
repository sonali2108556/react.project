import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Footer from "./components/Footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Forminformation from "./components/Form/Forminformmation"
import About from './components/About/About';

function Layout({ children }) {
  return (
    <div className="App">
      <Navbar />
      {children}
      <Footer />

    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Banner></Banner></Layout>
  },
  {
    path: "/contact",
    element: <Layout><Forminformation></Forminformation></Layout>

  },
  {
    path: "/about",
    element: <Layout><About></About></Layout>

  }
]);


function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
