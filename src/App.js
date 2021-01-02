import history from "./history";
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layouts/Layout";
import LayoutDetail from "./layouts/LayoutDetail";
import LayoutForm from "./layouts/LayoutForm";
// pages
import Main from "./pages/Main/Main";
import Contents from "./pages/Contents/Contents";
import Team from "./pages/Team/Team";

import PageBoard from "./pages/Form/PageBoard";
import PageMovie from "./pages/Form/PageMovie";
import PageTV from "./pages/Form/PageTV";
import PageBook from "./pages/Form/PageBook";
import PageTag from "./pages/Form/PageTag";
import PageParticipant from "./pages/Form/PageParticipant";
import PageCollection from "./pages/Form/PageCollection";

import ContentsInfo from "./pages/Contents/ContentsInfo";
import Comment from "./pages/Comments/Comment";

import Decks from './pages/Detail/Decks';
import Watcha from "./pages/Detail/Watcha";
import People from "./pages/Detail/People";

import UserMyPage from "./pages/User/UserMyPage";
import UserContents from "./pages/User/UserContents";
import UserContentsDetail from "./pages/User/UserContentsDetail";
import UserAnalysis from "./pages/User/UserAnalysis";

import Book from './pages/Contents/ContentsBook';
import Searches from "./pages/Searches/Searches";
import Wish from "./pages/User/Wish";



function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/team" component={Team} />
                    <Route path="/searches" component={Searches} />

                    <Layout path="/" exact component={Main} />
                    <Layout path="/tv_shows" exact component={Main} />
                    <Layout path="/books" exact component={Main} />
                    {/* User Page */}
                    <Layout path="/user/:id" exact component={UserMyPage} />
                    <Route path="/user/:id/analysis" exact component={UserAnalysis} />
                    <LayoutDetail path="/user/:id/contents/movies" exact component={UserContents} />
                    <LayoutDetail path="/user/:id/contents/books" exact component={UserContents} />
                    <LayoutDetail path="/user/:id/contents/tv_shows" exact component={UserContents} />
                    <Route path="/user/:id/detail/ratedMovie" exact component={UserContentsDetail} />
                    <Route path="/user/:id/detail/wish" exact component={Wish} />
                    {/* <Route path="/user/:id/detail/watching" exact component={MyPage} /> */}
                    {/* Contents Page */}
                    <Layout path="/contents/:id" exact component={Contents} />
                    <Layout path="/contents/:id/comments" exact component={Comment} />
                    <Layout path="/contents/:id/comments/:userId" exact component={Comment} />
                    <LayoutDetail path="/contents/:id/overview" exact component={ContentsInfo} />
                    <LayoutDetail path="/contents/:id/book/:contentId" exact component={Book} />
                    {/* Detail Page*/}
                    <Layout path="/detail/decks/:id" component={Decks} />
                    <Layout path="/detail/people/:id" component={People} />
                    <LayoutDetail path="/detail/watcha/:id" component={Watcha} />
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
