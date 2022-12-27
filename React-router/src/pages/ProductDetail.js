import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  //useparam is a hoo that return an object or key of the dynamic param from the current url
  const params = useParams();
  //profuct id should be same as that passed in app.js in dynamic one
  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;