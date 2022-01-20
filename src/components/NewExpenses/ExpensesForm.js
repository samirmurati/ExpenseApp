import { useState, useContext } from "react";
import "./ExpensesForm.css";
import {ExpenseContext} from "../../store/expense-context"

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [hideForm, setHideForm] = useState(true); // create a useState to handle if a form is hided or not.....

  const expenseCtx = useContext(ExpenseContext)

  console.log(expenseCtx);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    expenseCtx.addExpense(expenseData)

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setHideForm(true); // SetHideForm to true when a new expense is submited....
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      {hideForm ? ( // Conditional rendering .........
        <div className="new-expense__control">
          <button
            onClick={() => {
              // If a button is clicked setHideForm to false to show the form
              setHideForm(false);
            }}
            type="submit"
          >
            Add Expense
          </button>
        </div>
      ) : (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
                value={enteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
                value={enteredDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button
              onClick={() => {
                setHideForm(true); // if Cancel button is clicked setHideForm to true.....
              }}
              type="submit"
            >
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      )}
    </form>
  );
}

export default ExpenseForm;
