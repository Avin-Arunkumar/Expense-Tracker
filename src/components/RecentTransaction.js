import React from "react";

function RecentTransaction({ transactions }) {
  const categoryEmojis = {
    Salary: "💰",
    Groceries: "🛒",
    Dining: "🍽",
    Transport: "🚗",
    Entertainment: "🎭",
    Others: "📝",
  };

  return (
    <>
      {transactions
        .slice(-10)
        .reverse()
        .map((tx, index) => (
          <li key={index} className="transaction-item">
            <span className="transaction-category">
              {categoryEmojis[tx.category]} {tx.category}
            </span>
            <span
              className={`transaction-amount ${
                tx.type === "Income" ? "income" : "expense"
              }`}
            >
              {tx.amount}
            </span>
          </li>
        ))}
    </>
  );
}
export default RecentTransaction;
