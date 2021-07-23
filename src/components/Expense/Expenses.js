import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [selectedFilteredYear, setSelectedFilteredYear] = useState("2021");

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedFilteredYear;
    });

    const onFilterChangeHandler = (selectedFilter) => {
        setSelectedFilteredYear(selectedFilter);
    };

    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter
                    selected={selectedFilteredYear}
                    onExpenseFilterChange={onFilterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList expenses={filteredExpenses} />
            </Card>
        </li>
    );
};

export default Expenses;
