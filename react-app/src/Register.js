import React, {Component} from "react";
import AppNavbar from "./Navbar"
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Input, Label } from "reactstrap";
import './App.scss';

class Register extends Component {
    emptyInventory = {
        name: '',
        email: '',
        username: '',
        password: ''
    };
    constructor(props) {
        super(props);
        this.state ={
            item: this.emptyRegistration
        };
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const registration =
            await (await fetch (`/api/Register/${this.props.match.params.id}`)).json();
            this.setState({item: registration});
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/Register', {
            method: (item._id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/inventories');
    }

    render() {
        const {item} = this.state;
        return (
            <div>
                <AppNavbar />
                {/* <Container fluid className="btt"> */}
                <Container>
                    {/* display the appropriate title */}
                    <h5 className="mt-5 text-center">REGISTER</h5> 
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name" className="h5 mt-3">Name</Label>
                            <Input type="text"
                            name="name"
                            id="name"
                            //value={item.name || ''}
                            onChange={this.handleChange}
                            autoComplete="name"
                            />                          
                        </FormGroup>
                        <FormGroup>
                            <Label for="email" className="h5 mt-3">Email</Label>
                            <Input type="text"
                            name="email"
                            id="email"
                            //value={item.email || ''}
                            onChange={this.handleChange}
                            autoComplete="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username" className="h5 mt-3">Username</Label>
                            <Input type="text"
                            name="username"
                            id="username"
                           // value={item.username || ''}
                            onChange={this.handleChange}
                            autoComplete="username"
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label for="password" className="h5 mt-3">Password</Label>
                            <Input type="text"
                            name="password"
                            id="password"
                           // value={item.password || ''}
                            onChange={this.handleChange}
                            autoComplete="password"
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