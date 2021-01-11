import React, { Component } from "react";
import "react-bootstrap";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import AddForm from "../../components/AddForm";
import ToDoList from "../../components/ToDoList";
import DoneList from "../../components/DoneList"; 

class PersonalProjects extends Component {
    state = {
        todos: []
    };

    componentDidMount = () => {
        // load all the current to dos
        
    }

    // Funtion to display input info on to do div
    handleFormSubmit = event => {
        event.preventDefault();

        // take each input in the form and display it in the current-todos div as a row
        let title = document.getElementById("title-input").value;
        let priority = document.getElementById("priority-input").value;
        let notes = document.getElementById("notes-input").value;

        const elements = [title, priority, notes];
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < elements.length; i++) { 
            let e = document.createElement("div"); 
            // e.setAttribute("style", "margin: '10px'");
            e.setAttribute("id", "new-todo");
            e.innerHTML = elements[i]; 
            fragment.appendChild(e); 
        } 

        let newElement = document.getElementById("current-todos"); 
        newElement.appendChild(fragment); 

        console.log(title, priority, notes);

        // add a "done" button to the row and make it move to the done div when clicked

        // add to dos to a database

        // alert?
    }

    // Function to move a to do to done div when done button is clicked
    markAsDone = () => {
        // when done button is clicked, display to do title in done div

        // alert?
    }

    // Function to delete to dos off of Done List
    deleteDone = () => {

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