import "../Expenses/Expenses.css";
import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const yearChangeHandler = (year) => {
  console.log(year);
};

function Expenses(props) {
  return (
    <div>
      <ExpensesFilter onYearChange={yearChangeHandler} />
      <Card className="expenses">
        <ExpenseItem
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          date={props.items[2].date}
          title={props.items[2].title}
          amount={props.items[2].amount}
        />
        <ExpenseItem
          date={props.items[3].date}
          title={props.items[3].title}
          amount={props.items[3].amount}
        />
      </Card>
    </div>
  );
}

export default Expenses;
