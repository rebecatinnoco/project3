import React, {Component} from "react";
import AppNavbar from "./Navbar"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link} from "react-router-dom";
 
class InventoryEdit extends Component {
    emptyInventory = {
        prodname: '',
        qty: '',
        category: '',
        brand: ''
    };
    constructor(props) {
        super(props);
        this.state ={
            item: this.emptyInventory
        };
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const inventory =
            await (await fetch (`/api/inventory/${this.props.match.params.id}`)).json();
            this.setState({item: inventory});
        }
    }

    handleChange = (event) => {
        const target= event.target;
        const value = target.value;
        const name= target.name;
        let item= {...this.state.item};
        item[name]= value;
        this.setState({item});
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/inventory', {
            method: (item._id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/inventories');
    }

    render () {
        const {item} = this.state;
        const title = 
        <h2 className="mt-3">
            {/* if item has an id number, otherwise */}
            {item._id ? 'Edit Inventory' : 'Add Inventory'}
        </h2>

        return (
            <div>
                <AppNavbar />
                <Container>
                    {/* display the appropriate title */}
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="prodname" className="h5 mt-3">Product Name</Label>
                            <Input type="text"
                            name="prodname"
                            id="prodname"
                            value={item.prodname || ''}
                            onChange={this.handleChange}
                            autoComplete="prodname"
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label for="qty" className="h5 mt-3">Quantity</Label>
                            <Input type="text"
                            name="qty"
                            id="qty"
                            value={item.qty || ''}
                            onChange={this.handleChange}
                            autoComplete="qty"
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label for="category" className="h5 mt-3">Category</Label>
                            <Input type="text"
                            name="category"
                            id="category"
                            value={item.category || ''}
                            onChange={this.handleChange}
                            autoComplete="category"
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label for="brand" className="h5 mt-3">Brand</Label>
                            <Input type="text"
                            name="brand"
                            id="brand"
                            value={item.brand || ''}
                            onChange={this.handleChange}
                            autoComplete="brand"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button
                            color="info"
                            type="submit"
                            className="mt-3"

                            >Save</Button>{' '}
                            <Button
                            color="secondary"
                            className="mt-3"
                            tag={Link} to="/inventories"
                            >Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default InventoryEdit;