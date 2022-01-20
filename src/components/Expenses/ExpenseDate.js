import "./ExpenseDate.css";

function ExpenseDate(props) {
  const monat = props.date.toLocaleString("de-DE", { month: "long" });
  const jahr = props.date.getFullYear();
  const tag = props.date.toLocaleString("de-DE", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{monat}</div>
      <div className="expense-date__year">{jahr}</div>
      <div className="expense-date__day">{tag}</div>
    </div>
  );
}

export default ExpenseDate;
