import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import {Home , Addpost , AllPosts , EditPost , Post , Signup } from "./pages/index.js"
import { AuthLayOut, Login} from './Components/index.js'
import { Analytics } from "@vercel/analytics/react"


const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/login",
        element:(
          <AuthLayOut authentication={false}>
            <Login/>
          </AuthLayOut>
        )
      },
      {
        path:"/signup",
        element:(
          <AuthLayOut authentication={false}>
            <Signup/>
          </AuthLayOut>
        )
      },
      {
        path:"/all-posts",
        element:(
          <AuthLayOut authentication>
            {""}
            <AllPosts/>
          </AuthLayOut>
        )
      },
      {
        path:"/add-post",
        element:(
          <AuthLayOut authentication>
            {''}
            <Addpost/>
          </AuthLayOut>
        )
      },
      {
        path:"/edit-post/:slug",
        element:(
          <AuthLayOut authentication>
            {''}
            <EditPost/>
          </AuthLayOut>
        )
      },
      {
        path:"/post/:slug",
        element:<Post/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    <Analytics/>
  </StrictMode>,
)
