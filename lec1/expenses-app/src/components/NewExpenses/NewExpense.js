import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const formSubmissionHandler = (userInput) => {
    props.onNewExpenseAdded(userInput);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmission={formSubmissionHandler} />
    </div>
  );
};

export default NewExpense;
