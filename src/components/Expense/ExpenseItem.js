import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item-description">
                <h2>{props.title}</h2>
                <div className="expense-item-amount">
                    ${props.amount}
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;