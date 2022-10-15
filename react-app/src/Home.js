import React, {Component} from "react";
import AppNavbar from "./Navbar"
import { Button, Container, Card } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar />
                {/* <Container fluid className="btt"> */}
                <Card className="btt border border-3 mx-10">
                    <Button className="btn btn-danger">
                        <Link
                        to="/inventories"
                        className="nav-link"
                        >Manage Inventory List
                        </Link>
                    </Button>
                    <Button className="btn btn-danger">
                        <Link
                        to="/inventories"
                        className="nav-link"
                        >Logout
                        </Link>
                    </Button>
                </Card>
            </div>
        );
    }
}

export default Home;