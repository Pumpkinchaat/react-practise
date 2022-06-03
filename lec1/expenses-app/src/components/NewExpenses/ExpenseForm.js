import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (evt) => {
    setUserInput((prevState) => {
      return { ...prevState, title: evt.target.value };
    });
  };

  const amountChangeHandler = (evt) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: evt.target.value };
    });
  };

  const dateChangeHandler = (evt) => {
    setUserInput((prevState) => {
      return { ...prevState, date: evt.target.value };
    });
  };

  const submissionHandler = (evt) => {
    evt.preventDefault();

    const finalUserInput = {
      title: userInput.title,
      amount: userInput.amount,
      date: userInput.date,
    };

    props.onSubmission(finalUserInput);
  };

  return (
    <form onSubmit={submissionHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            name="date"
            id="date"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            name="amount"
            id="amount"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <button> Submit</button>
    </form>
  );
};

export default ExpenseForm;
