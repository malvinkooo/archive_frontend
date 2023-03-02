import React from "react";
import ReactDom from "react-dom";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import FundsList from "./pages/FundsList/index.js";
import Fund from "./pages/Fund/index.js";
import AddEditFund from "./pages/AddEditFund/index.js";
import AddEditInventory from "./pages/AddEditInventory/index.js";
import AddEditCase from "./pages/AddEditCase/index.js";
import Inventory from "./pages/Inventory/index.js";
import Case from "./pages/Case/index.js";
import Main from "./pages/Main/index.js";

import "./style.css";

const App = () => (
    <Router>
        <Switch>
            <Route path="/funds/add" component={AddEditFund} />
            <Route path="/funds/edit/:id" component={AddEditFund} />
            <Route path="/funds" component={FundsList} />
            <Route path="/fund/:id" component={Fund} />
            <Route path="/inventory/add" component={AddEditInventory} />
            <Route path="/inventory/edit/:id" component={AddEditInventory} />
            <Route path="/inventory/:id" component={Inventory} />
            <Route path="/case/add" component={AddEditCase} />
            <Route path="/case/edit/:id" component={AddEditCase} />
            <Route path="/case/:id" component={Case} />
            <Route path="/" component={Main} />
        </Switch>
    </Router>
);

export default App;
