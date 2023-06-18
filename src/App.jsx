import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import About from './Components/About';
import Main from "./Layout/Main";
import Error from "./Components/Error";
import Friend from "./Components/Friend";


function App() {

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: () => {
          return fetch('https://jsonplaceholder.typicode.com/users')
        }
      },
      {
        path: 'usersingle/:id',
        element: <Friend></Friend>,
        loader: async({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        }
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ],
  
  },
  {
    path: '*',
    element: <Error></Error>
  },
 
])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
