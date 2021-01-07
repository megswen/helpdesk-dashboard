import React from "react";
import './style.css';
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

function AddForm({ handleFormSubmit, props }) {
    
    const buttonStyle = {
        width: "75px",
        margin: "auto",
        marginTop: "20px"
    }

    return (
        <Card id="add-todo" className="text-center">
            <h1>ADD</h1>
            <InputGroup className="p-2">
                <FormControl
                    placeholder="Title"
                    aria-label="title"
                    aria-describedby=""
                />
            </InputGroup>
            <InputGroup className="p-2">
                <FormControl
                    placeholder="Priority"
                    aria-label="priority"
                    aria-describedby=""
                />
            </InputGroup>
            <InputGroup className="p-2">
                <FormControl
                    placeholder="Notes"
                    aria-label="notes"
                    aria-describedby=""
                />
            </InputGroup>
            <Button
                onClick={handleFormSubmit}
                type="submit"
                style={buttonStyle}
            >
                Add
            </Button>
        </Card>
    );
}

export default AddForm;