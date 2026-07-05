import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

import Manufacturing from './components/Manufacturing/Manufacturing';
import Engineering from './components/Engineering/Engineering';
import GlobalFootprint from './components/GlobalFootprint/GlobalFootprint';
import AboutUs from './components/AboutUs/AboutUs';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "manufacturing",
          element: <Manufacturing />
        },
        {
          path: "engineering",
          element: <Engineering /> 
        },
        {
          path: "global-footprint",
          element: <GlobalFootprint /> 
        },
        {
          path: "about-us",
          element: <AboutUs /> 
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Layout  />
    </RouterProvider>
  )
}
