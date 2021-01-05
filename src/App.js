import history from "./history";
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layouts/Layout";
import Detail from "./layouts/LayoutDetail";
import LayoutForm from "./layouts/LayoutForm";
// pages
import Main from "./pages/Main/Main";
import Team from "./pages/Team/Team";

import PageBoard from "./pages/Form/PageBoard";
import PageMovie from "./pages/Form/PageMovie";
import PageTV from "./pages/Form/PageTV";
import PageBook from "./pages/Form/PageBook";
import PageTag from "./pages/Form/PageTag";
import PageParticipant from "./pages/Form/PageParticipant";
import PageCollection from "./pages/Form/PageCollection";

import Contents from "./pages/Contents/Contents";
import ContentsOverview from "./pages/Contents/ContentsOverview";
import ContentsComment from "./pages/Contents/ContentsComment";
import ContentsBook from './pages/Contents/ContentsBook';

import Decks from './pages/Detail/Decks';
import Watcha from "./pages/Detail/Watcha";
import People from "./pages/Detail/People";

import UserMyPage from "./pages/User/UserMyPage";
import UserContents from "./pages/User/UserContents";
import UserRated from "./pages/User/UserRated";
import UserAnalysis from "./pages/User/UserAnalysis";
import UserRatedMore from "./pages/User/UserRatedMore";

import Searches from "./pages/Searches/Searches";
import SearchesMoreContents from "./pages/Searches/SearchesMoreContents";
import SearchesMorePeople from './pages/Searches/SearchesMorePeople'

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/team" component={Team} />
                    <Layout path="/" exact component={Main} />
                    <Layout path="/books" exact component={Main} />
                    <Layout path="/tv_shows" exact component={Main} />
                    {/* User Page */}
                    <Detail path="/users/:userId" exact component={UserMyPage} />
                    <Route  path="/users/:userId/analysis" exact component={UserAnalysis} />
                    <Detail path="/users/:userId/:contentType" exact component={UserContents} />
                    <Layout path="/users/:userId/:contentType/:statusId" exact component={UserRated} />
                    <Detail path="/users/:userId/:contentType/ratings/:scoreId" exact component={UserRatedMore} />
                    {/* Contents Page */}
                    <Layout path="/contents/:pageId" exact component={Contents} />
                    <Layout path="/contents/:pageId/comments" exact component={ContentsComment} />
                    <Layout path="/contents/:pageId/comments/:userId" exact component={ContentsComment} />
                    <Detail path="/contents/:pageId/overview" exact component={ContentsOverview} />
                    <Detail path="/contents/:pageId/book/:contentId" exact component={ContentsBook} />
                    {/* Detail Page*/}
                    <Layout path="/detail/decks/:pageId" component={Decks} />
                    <Layout path="/detail/people/:pageId" component={People} />
                    <Detail path="/detail/watcha/:pageId" component={Watcha} />
                    {/* Search Page */}
                    <Layout path="/searches" exact component={Searches} />
                    <Detail path="/searches/:contentType" exact component={SearchesMoreContents} />
                    <Detail path="/searches/people/users" component={SearchesMorePeople} />
                    {/* Form Page */}
                    <LayoutForm path="/admin/:pageId" exact component={PageBoard} />
                    <LayoutForm path="/admin/books/form" component={PageBook} />
                    <LayoutForm path="/admin/movies/form" component={PageMovie} />
                    <LayoutForm path="/admin/participants/form" component={PageParticipant} />
                    <LayoutForm path="/admin/tags/form" component={PageTag} />
                    <LayoutForm path="/admin/tv_shows/form" component={PageTV} />
                    <LayoutForm path="/admin/collections/form" component={PageCollection} />
                    <Redirect from="/admin" to="/admin/movies/form" />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
