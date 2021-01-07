import React from "react";
// import './style.css';
import { Card } from "react-bootstrap";

function DoneList() {
    return (
        <Card id="done-list" className="text-center">
            <h1>DONE</h1>
            <div id="done-todos">

            </div>
        </Card>
    );
}

export default DoneList;