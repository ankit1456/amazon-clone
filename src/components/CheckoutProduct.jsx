import React from "react";
import "../CSS/checkoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, rating, price, image }) {
  const [{ Basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title} </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
