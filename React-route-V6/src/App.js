import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetail';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,//Runs if an error will occur i.e> if you enter a wrong url after / 
    children: [
      { index: true, element: <HomePage /> }, //index defines the home page or the main landing page
      { path: 'products', element: <ProductsPage /> }, //not using / before product means we are defining the route abosultely means products will assume his prefix / or whatever is defined in parent path
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ],
  }
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;