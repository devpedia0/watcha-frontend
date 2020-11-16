import "./App.css";
import Team from "./component/Team";
import MyPage from "./component/MyPage";

import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
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
                    <Route path="/team" component={Team} />
                    <Route path="/myPage" component={MyPage} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
