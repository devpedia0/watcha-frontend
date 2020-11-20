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
                    <DefaultLayout path="/admin/books" exact component={PageBoard} />
                    <DefaultLayout path="/admin/books/form" component={PageBook} />
                    <DefaultLayout path="/admin/movies" exact component={PageBoard} />
                    <DefaultLayout path="/admin/movies/form" component={PageMovie} />
                    <DefaultLayout path="/admin/participants" exact component={PageBoard} />
                    <DefaultLayout path="/admin/participants/form" component={PageParticipant} />
                    <DefaultLayout path="/admin/tags" exact component={PageBoard} />
                    <DefaultLayout path="/admin/tags/form" component={PageTag} />
                    <DefaultLayout path="/admin/tv_shows" exact component={PageBoard} />
                    <DefaultLayout path="/admin/tv_shows/form" component={PageTV} />
                    <DefaultLayout path="/admin/collections" exact component={PageBoard} />
                    <DefaultLayout path="/admin/collections/form" component={PageCollection} />
                    <DefaultLayout path="/" exact component={Home} />
                    <Redirect from="/admin" to="/admin/movies" />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
