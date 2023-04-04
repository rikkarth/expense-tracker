import React, { useState } from "react";

import "../ExpenseItem/ExpenseItem.css";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
