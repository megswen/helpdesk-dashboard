import React from "react";
import './style.css';
import { Card } from "react-bootstrap";

function ToDoList() {
    return (
        <Card id="todo-list" className="text-center">
            <h1>TO DO</h1>
            <div id="current-todos">
                
            </div>
        </Card>
    );
}

export default ToDoList;