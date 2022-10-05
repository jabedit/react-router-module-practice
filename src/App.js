import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Products from './Component/Product/Products';
import Main from './Layout/Main';
import Friends from './Component/Friend/Friends';
import FriendDetails from './Component/Friend/FriendDetails';

import Posts from './Component/Posts/Posts';
import PostDetails from './Component/Posts/PostDetails';


function App() {
  const router = createBrowserRouter([
    {path: "/",
     element:  <Main />,
     children: [
        {path: "/", element: <Home />},
        {path: "/home", element: <Home />},  
        {path: "/friends",
        loader: async ()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
         element: <Friends />},  
        {path: "/products", element:  <Products />},
        {path: '/friends/:friendID',
          loader: async ({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: "/posts",
          loader: async () =>{
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts />

        },
        {
          path: '/post/:postId',
          loader: async ({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails />

        }
     ]
    },
    {path: "/about", element:  <About />},
    {path: "*", element:  <div>404 not found!</div>},
  
  
    
  ]);
  return (
    <div className="App">
      
       <RouterProvider  router={router}></RouterProvider>
       
    </div>
  );
}

export default App;
