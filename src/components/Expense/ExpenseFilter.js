import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
    const expenseFilterChangeHandler = (event) => {
        props.onExpenseFilterChange(event.target.value);
    };

    return (
        <div className="expense-filter">
            <div className="expense-filter-control">
                <label>Filter By Year</label>
                <select
                    value={props.selected}
                    onChange={expenseFilterChangeHandler}
                >
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
