import React, { Component } from "react";
import "react-bootstrap";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import AddForm from "../../components/AddForm";
import ToDoList from "../../components/ToDoList";
import DoneList from "../../components/DoneList"; 

class PersonalProjects extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    // Funtion to display input info on to do div
    handleFormSubmit = () => {
        console.log("IT WORKS!!!!");
        // take each input in the form and display it in the current-todos div as a row

        // add a "done" button to the row and make it move to the done div when clicked

        // alert?
    }

    // Function to move a to do to done div when done button is clicked
    markAsDone = () => {
        // when done button is clicked, display to do title in done div

        // alert?
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <AddForm 
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </Col>
                    <Col lg={6}>
                        <ToDoList />
                    </Col >
                    <Col>
                        <DoneList />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PersonalProjects;