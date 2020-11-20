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
import PageBoard from './pages/Form/PageBoard';
import PageTag from './pages/Form/PageTag';
import PagePeople from './pages/Form/PagePeople';
import PageContent from "./pages/Form/PageContent";
import PageCollection from './pages/Form/PageCollection';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/team" component={Team} /> 
                    <Route path="/myPage" component={MyPage} />
                    <DefaultLayout path="/program" component={Home} />
                    <DefaultLayout path="/book" component={Home} />
                    
                    <DefaultLayout path="/admin/movie" component={PageBoard} />
                    <DefaultLayout path="/admin/book" component={PageBoard} />
                    <DefaultLayout path="/admin/tv" component={PageBoard} />
                    <DefaultLayout path="/admin/tag" component={PageBoard} />
                    <DefaultLayout path="/admin/people" component={PageBoard} />
                    <DefaultLayout path="/admin/collection" component={PageBoard} />
                    
                    <DefaultLayout path="/admin/tag/form" component={PageTag} />
                    <DefaultLayout path="/admin/people/form" component={PagePeople} />
                    <DefaultLayout path="/admin/content/form" component={PageContent} />
                    <DefaultLayout path="/admin/collection/form" component={PageCollection} />
                    
                    <DefaultLayout path="/" exact component={Home} />
                    <Redirect from="/admin" to="/admin/movie" />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
