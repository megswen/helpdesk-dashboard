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
                    id="title-input"
                />
            </InputGroup>
            <InputGroup className="p-2">
                <FormControl
                    placeholder="Priority"
                    id="priority-input"
                />
            </InputGroup>
            <InputGroup className="p-2">
                <FormControl
                    placeholder="Notes"
                    id="notes-input"
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