import history from "./history";
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layouts/Layout";
import LayoutDetail from "./layouts/LayoutDetail";
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
import ContentsInfo from "./pages/Contents/ContentsInfo";
import ContentsComment from "./pages/Contents/ContentsComment";
import ContentsBook from './pages/Contents/ContentsBook';

import Decks from './pages/Detail/Decks';
import Watcha from "./pages/Detail/Watcha";
import People from "./pages/Detail/People";

import UserMyPage from "./pages/User/UserMyPage";
import UserContents from "./pages/User/UserContents";
import UserRated from "./pages/User/UserRated";
import UserAnalysis from "./pages/User/UserAnalysis";

import Searches from "./pages/Searches/Searches";
import UserRatedMore from "./pages/User/UserRatedMore";

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
                    <Layout path="/users/:userId" exact component={UserMyPage} />
                    <Route path="/users/:userId/analysis" exact component={UserAnalysis} />
                    <LayoutDetail path="/users/:userId/:contentType" exact component={UserContents} />
                    <Layout path="/users/:userId/:contentType/:statusId" exact component={UserRated} />
                    <LayoutDetail path="/users/:userId/:contentType/ratings/:scoreId" exact component={UserRatedMore} />
                    {/* Contents Page */}
                    <Layout path="/contents/:pageId" exact component={Contents} />
                    <Layout path="/contents/:pageId/comments" exact component={ContentsComment} />
                    <Layout path="/contents/:pageId/comments/:userId" exact component={ContentsComment} />
                    <LayoutDetail path="/contents/:pageId/overview" exact component={ContentsInfo} />
                    <LayoutDetail path="/contents/:pageId/book/:contentId" exact component={ContentsBook} />
                    {/* Detail Page*/}
                    <Layout path="/detail/decks/:pageId" component={Decks} />
                    <Layout path="/detail/people/:pageId" component={People} />
                    <LayoutDetail path="/detail/watcha/:pageId" component={Watcha} />
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
