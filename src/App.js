import './App.css';
import history from './history';
import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './layouts/Layout';
import LayoutDetail from './layouts/LayoutDetail';
import LayoutForm from './layouts/LayoutForm';
// pages
import Main from "./pages/Main/Main";
import Contents from './pages/Contents/Contents'
import Team from "./pages/Team/Team";
import MyPage from "./pages/MyPage/MyPage";
import PageBoard from './pages/Form/PageBoard';
import PageMovie from './pages/Form/PageMovie';
import PageTV from './pages/Form/PageTV';
import PageBook from './pages/Form/PageBook';
import PageTag from './pages/Form/PageTag';
import PageParticipant from './pages/Form/PageParticipant';
import PageCollection from './pages/Form/PageCollection';
import MyMovie from './pages/MyData/MyMovie';
import MyTv from './pages/MyData/MyTv';
import MyBook from './pages/MyData/MyBook';
import ContentsInfo from './pages/Contents/ContentsInfo';
import ContentsComment from './pages/Contents/ContentsComment';
import Decks from './pages/Decks/Decks';

function App() {

    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/team" component={Team} /> 
                    <Route path="/myPage" component={MyPage} />
                    <Route path="/myMovie" component={MyMovie} />
                    <Route path="/myTv" component={MyTv} />
                    <Route path="/myBook" component={MyBook} />
                    <Layout path="/" exact component={Main} />
                    <Layout path="/tv_shows" exact component={Main} />
                    <Layout path="/books" exact component={Main} />
                    <Layout path="/contents" exact component={Contents} />
                    <Layout path="/decks" exact component={Decks} />
                    <LayoutDetail path="/contents/overview" exact component={ContentsInfo}/>
                    <LayoutDetail path="/contents/comment" exact component={ContentsComment}/>
                    {/* Form Page */}
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
