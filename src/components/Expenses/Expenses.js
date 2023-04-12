import React, { useState } from "react";

import "../Expenses/Expenses.css";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const expensesFilteredByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesList item={expensesFilteredByYear} />
      </Card>
    </div>
  );
};

export default Expenses;
