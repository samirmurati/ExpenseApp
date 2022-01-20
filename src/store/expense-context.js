import React, {useState} from "react"

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export const ExpenseContext = React.createContext({
  items: [],
  addExpense: (expense) => {}
})



const ExpenseContextProvider = (props) => {
  const [items, setItems] = useState(expenses)


  const addExpense = (expense) => {
    setItems(prevItems => {
      return [...prevItems, expense]
    })
  }
return <ExpenseContext.Provider value={{items, addExpense}}>{props.children}</ExpenseContext.Provider>
}

export default ExpenseContextProvider
