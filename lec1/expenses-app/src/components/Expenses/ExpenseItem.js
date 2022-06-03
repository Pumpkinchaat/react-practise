import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.expense.date.toLocaleDateString("en-US", {
    month: "long",
  });
  const year = props.expense.date.toLocaleDateString("en-US", {
    year: "numeric",
  });
  const day = props.expense.date.toLocaleDateString("en-US", {
    day: "numeric",
  });

  return (
    <div>
      <div className="expense-item">
        <div className="expense-item__description">
          <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
          </div>
          <h2>{props.expense.title}</h2>
        </div>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
