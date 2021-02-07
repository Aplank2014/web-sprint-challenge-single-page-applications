import React from "react";

export default function Confirmation(props) {
  const toppingArr = [];
  const toppingList = toppingArr.join(", ").toUpperCase();

  return (
    <div className="confirmation">
      {props.orders.map(order => (
        <div className="orders" key={order.id}>
          <h2>{order.name}, your order has been received.</h2>
          <h4>Size: {order.size}</h4>
          <h4>Toppings: Choose up to 10 {toppingList}</h4>
          <h4>Special Instructions: "{order.specialInstructions}" - {order.name}</h4>
        </div>
      ))}
    </div>
  );
}