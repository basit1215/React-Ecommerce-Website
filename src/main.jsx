import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Service from './Pages/Service.jsx'
import SingleCardDetails from './Pages/singleCardDetails.jsx'

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
        children: [
          {
            path: "",
            element: <h1>Software Developer</h1>
          },
          {
            path: "designer",
            element: <h1>Graphics Designer</h1>
          },
          {
            path: "editor",
            element: <h1>Video Editor</h1>
          }
        ]
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
        element: <SingleCardDetails/>
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



// 1st] layout ki file root m banaka outlet ka componenet render krwana haa os filr m...
// 2nd] main.jsx m router ka variable banayaa jiska undar createBroweserRouter ka function call krka aik array of object dedi...
// 3rd] createBroweserRouter ky arr of obj m tamam file ko path , element sy waha pass karygy...
// 4th] main.jsx m hi routerprovider ky tag m router component ko call krwaka uska undar router ka var rakh dy r pori app pass ho jaygi...