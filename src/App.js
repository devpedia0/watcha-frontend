import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

// pages
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <DefaultLayout path="/program" component={Home} />
                    <DefaultLayout path="/book" component={Home} />
                    <DefaultLayout path="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
