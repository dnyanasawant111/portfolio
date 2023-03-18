import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import About from './Components/About';
import Contact from './Components/Contact';
import  Education from './Components/Education';

import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Header from './Components/Header';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },



  {
    path: "/about",
    element: <About />
  },
  {
    path: "/education",
    element: <Education />
  },

  
  {
    path: "/skills",
    element: <Skills/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/header",
    element: <Header/>
  },


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


