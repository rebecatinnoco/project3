import React, {Component} from "react";
import Home from "./Home"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InventoryList from "./InventoryList"
import InventoryEdit from "./InventoryEdit"
import Register from "./Register"
import Initial from "./Initial"
import './App.scss'

class App extends Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Initial />} />
          <Route path='/home' element={<Home />} />
          <Route path='/inventories' element={<InventoryList />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/inventories/:id' element={<InventoryEdit />} />
        </Routes>
      </Router>
    )
  }
}

export default App;