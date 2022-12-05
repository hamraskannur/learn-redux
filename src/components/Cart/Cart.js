import {useSelector}from "react-redux"
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
  const cartitems= useSelector(state=>state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartitems.map(products=>(
          <CartItem
          key={products.id}
            item={{ id:products.id, title: products.name, quantity: products.quantity, total: products.totalprice, price:products.price }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
