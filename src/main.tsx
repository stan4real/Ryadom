import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import Root from './routes/root/root.tsx';
import ErrorPage from './utils/error-page.tsx';
import App from './routes/allcats/App.tsx';
import Favorites from './routes/favorites/favorites.tsx';
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query';
import store from './app/store.ts';
import { Provider } from 'react-redux';
import Posts from './routes/posts/postspage.tsx';
import PostPage from './routes/posts/postPage/PostPage.tsx';
import Home from './routes/home/Home.tsx';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    }
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:'home',
        element:<Home/>
      }
      ,
      {
        path: "allcats",
        element: <App />,
      },
      {
        path:"favorites",
        element:<Favorites/>
      },
      {
        path:"posts",
        element:<Posts/>
      },
      {
        path:"posts/:postId",
        element:<PostPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
