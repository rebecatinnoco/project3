import React, {Component} from "react";
import AppNavbar from "./Navbar"
import {Card, ListGroup} from 'react-bootstrap';
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"; 
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons"; 
import { faPenSquare } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class InventoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventories: [],
            isLoading: true
        };
    }
    componentDidMount() {
        this.setState({isLoading: true})

        fetch('/api/inventories')
        .then(response => response.json())
        .then(data => this.setState({inventories: data, isLoading: false}));
    }
    removeInv = async (id) => {
        await fetch(`/api/inventory/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        console.log("Remove Done!");
        let updatedInventories =
            [...this.state.inventories].filter(i => i._id !== id);
            this.setState({inventories: updatedInventories})
    }      
    render () {
        const {inventories, isLoading} = this.state;
        if(isLoading) {
            return <p>Loading...</p>;
        }
        const inventoryList = inventories.map(inventory => {
            return <tr key={inventory._id}>
                <td style={{whiteSpace: 'nowrap'}}>{inventory.prodname}</td>
                <td>{inventory.qty}</td>
                <td>{inventory.category}</td>
                <td>{inventory.brand}</td>
                <td className="border text-center">
                    <ButtonGroup>
                        <Button
                        size="sm"
                        color="info"
                        tag={Link}
                        to={"/inventories/" + inventory._id}
                        >
                        <FontAwesomeIcon icon={faPenSquare} className="fas fa-lg" />
                        </Button>
                        <Button
                        size="sm"
                        color="info"
                        onClick={() => this.removeInv(inventory._id)}
                        >
                        <FontAwesomeIcon icon={faXmarkCircle} className="fas fa-lg" />
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
        const inventoryAcc = inventories.map(inventory => {
            if (inventory.category === 'Accessories'){
                return <tr key={inventory._id}>
                <td style={{whiteSpace: 'nowrap'}}>{inventory.prodname}</td>
                <td>{inventory.qty}</td>
                <td>{inventory.category}</td>
                <td>{inventory.brand}</td>
                <td className="border text-center">
                    <ButtonGroup>
                        <Button
                        size="sm"
                        color="info"
                        tag={Link}
                        to={"/inventories/" + inventory._id}
                        >
                        <FontAwesomeIcon icon={faPenSquare} className="fas fa-lg" />
                        </Button>
                        <Button
                        size="sm"
                        color="info"
                        onClick={() => this.removeInv(inventory._id)}
                        >
                        <FontAwesomeIcon icon={faXmarkCircle} className="fas fa-lg" />
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
            }
        });
        const inventoryCam = inventories.map(inventory => {
            if (inventory.category === 'Cameras'){
                return <tr key={inventory._id}>
                <td style={{whiteSpace: 'nowrap'}}>{inventory.prodname}</td>
                <td>{inventory.qty}</td>
                <td>{inventory.category}</td>
                <td>{inventory.brand}</td>
                <td className="border text-center">
                    <ButtonGroup>
                        <Button
                        size="sm"
                        color="info"
                        tag={Link}
                        to={"/inventories/" + inventory._id}
                        >
                        <FontAwesomeIcon icon={faPenSquare} className="fas fa-lg" />
                        </Button>
                        <Button
                        size="sm"
                        color="info"
                        onClick={() => this.removeInv(inventory._id)}
                        >
                        <FontAwesomeIcon icon={faXmarkCircle} className="fas fa-lg" />
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
            }
        });
        const inventoryCab = inventories.map(inventory => {
            if (inventory.category === 'Cables'){
                return <tr key={inventory._id}>
                <td style={{whiteSpace: 'nowrap'}}>{inventory.prodname}</td>
                <td>{inventory.qty}</td>
                <td>{inventory.category}</td>
                <td>{inventory.brand}</td>
                <td className="border text-center">
                    <ButtonGroup>
                        <Button
                        size="sm"
                        color="info"
                        tag={Link}
                        to={"/inventories/" + inventory._id}
                        >
                        <FontAwesomeIcon icon={faPenSquare} className="fas fa-lg" />
                        </Button>
                        <Button
                        size="sm"
                        color="info"
                        onClick={() => this.removeInv(inventory._id)}
                        >
                        <FontAwesomeIcon icon={faXmarkCircle} className="fas fa-lg" />
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
            }
        });
        const inventoryRec = inventories.map(inventory => {
            if (inventory.category === 'Recorders'){
                return <tr key={inventory._id}>
                <td style={{whiteSpace: 'nowrap'}}>{inventory.prodname}</td>
                <td>{inventory.qty}</td>
                <td>{inventory.category}</td>
                <td>{inventory.brand}</td>
                <td className="border text-center">
                    <ButtonGroup>
                        <Button
                        size="sm"
                        color="info"
                        tag={Link}
                        to={"/inventories/" + inventory._id}
                        >
                        <FontAwesomeIcon icon={faPenSquare} className="fas fa-lg" />
                        </Button>
                        <Button
                        size="sm"
                        color="info"
                        onClick={() => this.removeInv(inventory._id)}
                        >
                        <FontAwesomeIcon icon={faXmarkCircle} className="fas fa-lg" />
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
            }
        });
        return (
            <div className="bg-light">
                <AppNavbar />
                <Container >
                    <div className=""> 
                        <Button
                        color="info"
                        className="my-4"
                        tag={Link}
                        to="/inventories/new"
                        >
                        <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" /> New Category
                        </Button>
                    </div>
                    <Card border="info">
                        <Card.Header>
                            Accessories
                        </Card.Header>
                        <Card.Body>
                        <Button
                        color="info"
                        className=""
                        tag={Link}
                        to="/inventories/new"
                        >
                        <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" /> New Item
                        </Button>
                            <ListGroup>
                            <Table className="mt-4 border">
                        <thead >
                            <tr>
                                <td width="20%" className="font-weight-bold">Product Name</td>
                                <td width="15%">Quantity</td>
                                <td width="15%">Category</td>
                                <td width="15%">Brand</td>                              
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryAcc}
                        </tbody>
                    </Table>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card border="info">
                        <Card.Header>
                            Cameras
                        </Card.Header>
                        <Card.Body>
                        <Button
                        color="info"
                        className=""
                        tag={Link}
                        to="/inventories/new"
                        >
                        <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" /> New Item
                        </Button>
                            <ListGroup>
                            <Table className="mt-4 border">
                        <thead >
                            <tr>
                                <td width="20%" className="font-weight-bold">Product Name</td>
                                <td width="15%">Quantity</td>
                                <td width="15%">Category</td>
                                <td width="15%">Brand</td>                              
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryCam}
                        </tbody>
                    </Table>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card border="info">
                        <Card.Header>
                            Cables
                        </Card.Header>
                        <Card.Body>
                        <Button
                        color="info"
                        className=""
                        tag={Link}
                        to="/inventories/new"
                        >
                        <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" /> New Item
                        </Button>
                            <ListGroup>
                            <Table className="mt-4 border">
                        <thead >
                            <tr>
                                <td width="20%" className="font-weight-bold">Product Name</td>
                                <td width="15%">Quantity</td>
                                <td width="15%">Category</td>
                                <td width="15%">Brand</td>                              
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryCab}
                        </tbody>
                    </Table>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card border="info">
                        <Card.Header>
                            Recorders
                        </Card.Header>
                        <Card.Body>
                        <Button
                        color="info"
                        className=""
                        tag={Link}
                        to="/inventories/new"
                        >
                        <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" /> New Item
                        </Button>
                            <ListGroup>
                            <Table className="mt-4 border">
                        <thead >
                            <tr>
                                <td width="20%" className="font-weight-bold">Product Name</td>
                                <td width="15%">Quantity</td>
                                <td width="15%">Category</td>
                                <td width="15%">Brand</td>                              
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryRec}
                        </tbody>
                    </Table>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                </Container>
            </div>
        )
    }
}

export default InventoryList;