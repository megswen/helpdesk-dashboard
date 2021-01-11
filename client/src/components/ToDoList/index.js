import React from "react";
import './style.css';
import { Card } from "react-bootstrap";

function ToDoList() {
    return (
        <Card id="todo-list" className="text-center">
            <h1>TO DO</h1>
            <div className="todo-columns text-center">
                <h5 className="m-2">Title</h5>
                <h5 className="m-2">Priority</h5>
                <h5 className="m-2">Notes</h5>
            </div>
            <div id="current-todos">
                
            </div>
        </Card>
    );
}

export default ToDoList;