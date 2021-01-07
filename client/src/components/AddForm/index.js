import React from "react";
import './style.css';
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

function AddForm(props) {
    //console.log(onClick);
    return (
        <Card id="add-todo" className="text-center">
            <h1>ADD</h1>
            <InputGroup className="p-2">
                <FormControl
                    placeholder={props.placeholder1}
                    aria-label="title"
                    aria-describedby=""
                />
            </InputGroup>
            <InputGroup className="p-2">
                <FormControl
                    placeholder={props.placeholder2}
                    aria-label="priority"
                    aria-describedby=""
                />
            </InputGroup>
            <InputGroup className="p-2">
                <FormControl
                    placeholder={props.placeholder3}
                    aria-label="notes"
                    aria-describedby=""
                />
            </InputGroup>
            <Button 
                className="pp-add-todo-button m-auto"
            >Add
            </Button>
        </Card>
    );
}

export default AddForm;