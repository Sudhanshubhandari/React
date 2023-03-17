import { useParams, Link } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>{/* the productId should be same as given the the route */}
      <p><Link to=".." relative='path' >Back</Link></p>
     {  /* by defining path here it will go back only one segment ex>
              if url is root/product/hi
              then it will go on product 
  but if you will not use the path then it will go to its parent i.e> root here*/}
      
    
    </>
  );
}

export default ProductDetailPage;