import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    if (props.expenses.length === 0) {
        return <h2 className="expense-list-fallback">Found No Expenses.</h2>;
    }

    return (
        <ul className="expense-list">
            {props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            ))}
        </ul>
    );
};

export default ExpenseList;
