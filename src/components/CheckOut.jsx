import React from "react";
import { useStateValue } from "../StateProvider";
import "../CSS/checkOut.css";
import Checkoutproduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

function CheckOut() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB67kUVGD9sEdX7qDiUPvlOz8UQfm7folHBw&usqp=CAU"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h1>Your Shopping Basket Is Empty</h1>
            <p>
              You have no items in your basket .To buy one or more items, click
              "Add ro basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h1 className="checkout__title">Your Shopping Cart</h1>{" "}
            {/* list out all the items */}
            {basket?.map((item) => (
              <Checkoutproduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default CheckOut;
