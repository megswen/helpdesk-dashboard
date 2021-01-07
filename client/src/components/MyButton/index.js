import React from "react";
import './style.css';
import { Button } from "react-bootstrap";

function MyButton(props) {
    //console.log(onClick);
    return (
            <Button 
                className="m-auto"
                style={props.style}
                onClick={props.onClick}
            >
                {props.title}
            </Button>
    );
}

export default MyButton;