import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import NewsPage from './NewsPage/News';
import Login from './Pages/login/login';
import './App.css';
import Community from './Pages/communityPage/Community';
// import Events from './Pages/Events/Events'
const router=createBrowserRouter([
  {
    path:'/',
    children:[
      {index:true,element:<NewsPage />},
      {path:'news',element:<NewsPage />},
      {path:'login',element:<Login />},
      {path:'community',element:<Community />},
      // {path:'events',element:<Events />},
    ]
  },
]);
// const router = createBrowserRouter([
//   { index:true, element: <NewsPage /> },
//   { path: 'news', element: <NewsPage /> },
//   { path: 'community', element: <Community /> },
// ]);

function App() {
  return (
  <RouterProvider router={router}/>
  );
}

export default App;
