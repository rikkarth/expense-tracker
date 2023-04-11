import React, { useState } from "react";

import "../Expenses/Expenses.css";
import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2023);

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filterByYear = () => {
    const checkExpenseDate = (expense) => {
      return expense.date.toString().includes(filteredYear);
    };
    return props.items.filter(checkExpenseDate);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={yearChangeHandler}
        />
        {
          filterByYear().map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))

          /* props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) */
        }
      </Card>
    </div>
  );
};

export default Expenses;
