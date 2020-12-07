import './App.css';
import history from './history';
import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './layouts/Layout';
// pages
import Home from "./pages/Home/Home";
import Detail from './pages/Detail/Detail'
import Team from "./pages/Team/Team";
import MyPage from "./pages/MyPage/MyPage";
import PageBoard from './pages/Form/PageBoard';
import PageMovie from './pages/Form/PageMovie';
import PageTV from './pages/Form/PageTV';
import PageBook from './pages/Form/PageBook';
import PageTag from './pages/Form/PageTag';
import PageParticipant from './pages/Form/PageParticipant';
import PageCollection from './pages/Form/PageCollection';
import LayoutForm from './layouts/LayoutForm';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/team" component={Team} /> 
                    <Route path="/myPage" component={MyPage} />
                    <Layout path="/" exact component={Home} />
                    <Layout path="/contents" exact component={Detail} />
                    <LayoutForm path="/admin/books" exact component={PageBoard} />
                    <LayoutForm path="/admin/books/form" component={PageBook} />
                    <LayoutForm path="/admin/movies" exact component={PageBoard} />
                    <LayoutForm path="/admin/movies/form" component={PageMovie} />
                    <LayoutForm path="/admin/participants" exact component={PageBoard} />
                    <LayoutForm path="/admin/participants/form" component={PageParticipant} />
                    <LayoutForm path="/admin/tags" exact component={PageBoard} />
                    <LayoutForm path="/admin/tags/form" component={PageTag} />
                    <LayoutForm path="/admin/tv_shows" exact component={PageBoard} />
                    <LayoutForm path="/admin/tv_shows/form" component={PageTV} />
                    <LayoutForm path="/admin/collections" exact component={PageBoard} />
                    <LayoutForm path="/admin/collections/form" component={PageCollection} />
                    
                    <Redirect from="/admin" to="/admin/movies/form" />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
