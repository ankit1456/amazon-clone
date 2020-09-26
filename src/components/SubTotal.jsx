import React from "react";
import "../CSS/subTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketToatal } from "../reducer";
import { getBasketTotal } from "../reducer";
import { roundToPrecision } from "react-currency-format/lib/utils";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items ): <strong>{`${value}`} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order Contains A gift
            </small>
          </>
        )}
        thousandSeparator={true}
        value={getBasketTotal(basket)}
        displayType={"text"}
        desimalScale={2}
        prefix={"$"}
      />
      <button>Procced To Checkout</button>
    </div>
  );
}

export default SubTotal;
