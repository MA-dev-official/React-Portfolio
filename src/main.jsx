import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  Home from './components/Home/Home.jsx' ;
import  About from './components/About/About.jsx' ;
  import  Services from './components/Services/Services.jsx' ;
 import  Contact from './components/Contact/Contact.jsx'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,  
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
   <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
