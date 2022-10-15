import React, {Component} from "react";
import AppNavbar from "./Navbar"
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Input, Label } from "reactstrap";
import './App.css';

class Register extends Component {
    
    render() {
        return (
            <div>
                <AppNavbar />
                {/* <Container fluid className="btt"> */}
                <Container>
                    {/* display the appropriate title */}
                    <h5 className="mt-5 text-center">REGISTER</h5> 
                    <Form >
                        <FormGroup>
                            <Label for="name" className="h5 mt-3">Name</Label>
                            <Input type="text"
                            name="name"
                            id="name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email" className="h5 mt-3">Email</Label>
                            <Input type="text"
                            name="email"
                            id="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username" className="h5 mt-3">Username</Label>
                            <Input type="text"
                            name="username"
                            id="username"
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label for="password" className="h5 mt-3">Password</Label>
                            <Input type="text"
                            name="password"
                            id="password"
                            />
                        </FormGroup>
                        <Button className="btn btn-info">
                        <Link
                        to="/"
                        className="nav-link"
                        >Register
                        </Link>
                        </Button>                        
                    </Form>
                </Container>
            </div>
        );
    }
}



export default Register;