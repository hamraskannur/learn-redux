import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
  id: "p1",
  title: "Book",
  price: 500,
  description: 'This is a first product - amazing!'
},
{
  id: "p2",
  title: "Book2",
  price: 600,
  description: 'This is a first product - amazing!'
}, {
  id: "p3",
  title: "Book3",
  price: 700,
  description: 'This is a first product - amazing!'
}, {
  id: "p4",
  title: "Book4",
  price: 800,
  description: 'This is a first product - amazing!'
}

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products)=> (
          <ProductItem
           key={products.id} 
           id={products.id} 
           title={products.title}
            price={products.price} 
            description={products.description}/>
        ))}

      </ul>
    </section>  
  );
};

export default Products;
