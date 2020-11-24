import "./App.css";
import history from "./history";
import React from "react";
import "./App.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import  Layout  from './layouts/Layout';
// pages
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import MyPage from "./pages/MyPage/MyPage";
import PageBoard from './pages/Form/PageBoard';
import PageMovie from "./pages/Form/PageMovie";
import PageTV from "./pages/Form/PageTV";
import PageBook from "./pages/Form/PageBook";
import PageTag from './pages/Form/PageTag';
import PageParticipant from './pages/Form/PageParticipant';
import PageCollection from './pages/Form/PageCollection';


function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/team" component={Team} /> 
                    <Route path="/myPage" component={MyPage} />
                    <Layout path="/admin/books" exact component={PageBoard} />
                    <Layout path="/admin/books/form" component={PageBook} />
                    <Layout path="/admin/movies" exact component={PageBoard} />
                    <Layout path="/admin/movies/form" component={PageMovie} />
                    <Layout path="/admin/participants" exact component={PageBoard} />
                    <Layout path="/admin/participants/form" component={PageParticipant} />
                    <Layout path="/admin/tags" exact component={PageBoard} />
                    <Layout path="/admin/tags/form" component={PageTag} />
                    <Layout path="/admin/tv_shows" exact component={PageBoard} />
                    <Layout path="/admin/tv_shows/form" component={PageTV} />
                    <Layout path="/admin/collections" exact component={PageBoard} />
                    <Layout path="/admin/collections/form" component={PageCollection} />
                    <Layout path="/" exact component={Home} />
                    <Redirect from="/admin" to="/admin/movies/form" />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
