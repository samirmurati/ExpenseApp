import items from "../items";
import "./ExpenseItem.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState, useContext, useEffect } from "react";
import NewExpense from "../NewExpenses/NewExpenses";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import {ExpenseContext} from "../../store/expense-context"

 function Expenses() {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());
  const [expenses, setExpenses] = useState(items);

  const expItems = useContext(ExpenseContext).items

  console.log(expItems);


const filteredExpenses = expItems.filter((expense) => {
 return expense.date.getFullYear().toString() === filteredYear;
 });


 useEffect(() => {
   setFilteredYear(filteredYear)
 }, [filteredExpenses])







  console.log(filteredExpenses);

  const chosenYear = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  const addExpenseHandler =  (expense) => {

    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="expenses">
    <div>
         <ExpensesFilter selected={filteredYear} onChangeYear={chosenYear} />
        <NewExpense onAddExpenseData={addExpenseHandler} />
      </div>
       <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

    </div>
  );
}

export default Expenses;
