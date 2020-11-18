import "./App.css";
import Team from "./component/Team";
import MyPage from "./component/MyPage";
import history from "./history";

import React from "react";
import "./App.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

// pages
import Home from "./pages/Home";
import PageTag from './pages/Form/PageTag';
import PagePeople from './pages/Form/PagePeople';
import PageContent from "./pages/Form/PageContent";
import PageCollection from './pages/Form/PageCollection';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <DefaultLayout path="/program" component={Home} />
                    <DefaultLayout path="/book" component={Home} />
                    <DefaultLayout path="/form/tag" component={PageTag} />
                    <DefaultLayout path="/form/people" component={PagePeople} />
                    <DefaultLayout path="/form/content" component={PageContent} />
                    <DefaultLayout path="/form/collection" component={PageCollection} />
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
