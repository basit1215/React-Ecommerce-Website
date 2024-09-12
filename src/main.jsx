import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Service from './Pages/Service.jsx'
import SingleCardDetails from './Pages/SingleCardDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element:  <Home/>
      },
      {
        path: "about",
        element:  <About/>,
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "service",
        element: <Service/>
      },
      {
        path: "singleCardDetails/:id",
        element:  <SingleCardDetails/>
      },
      {
        path: "*",
        element: <h1>Not Found!</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} >
</RouterProvider>
)