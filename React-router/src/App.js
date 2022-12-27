import { Route,Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/">
          {/*if only / is given then it will redirect to the welcome to page*/}
          <Redirect to="/welcome" />
        </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products' exact /*helps loading only /products pages not /products/anything*/>
          <Products />
        </Route>
        
        <Route path='/products/:productId'  /*anything after 2nd  to make dynamic */>
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book