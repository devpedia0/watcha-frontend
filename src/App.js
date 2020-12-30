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
import MyPage from "./pages/MyPage/MyPage";
import PageBoard from "./pages/Form/PageBoard";
import PageMovie from "./pages/Form/PageMovie";
import PageTV from "./pages/Form/PageTV";
import PageBook from "./pages/Form/PageBook";
import PageTag from "./pages/Form/PageTag";
import PageParticipant from "./pages/Form/PageParticipant";
import PageCollection from "./pages/Form/PageCollection";
import MyMovie from "./pages/MyData/MyMovie";
import MyTv from "./pages/MyData/MyTv";
import MyBook from "./pages/MyData/MyBook";
import ContentsInfo from "./pages/Contents/ContentsInfo";
import Comment from "./pages/Comments/Comment";
import Decks from "./pages/Decks/Decks";
import Watcha from "./pages/Watcha/Watcha";
import RatedMovie from "./pages/MyData/RatedMovie";
import Book from './pages/Book/Book';
import Searches from "./pages/Searches/Searches";
import Wish from "./pages/WishPage/Wish";

// import DetailInfo from "./pages/Detail/DetailInfo";
// import DetailComment from "./pages/Detail/DetailComment";

import Analysis from "./pages/MyData/Analysis";
import People from "./pages/People/People";
function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/team" component={Team} />
                    <Route path="/myPage" component={MyPage} />
                    <Route path="/myMovie" component={MyMovie} />
                    <Route path="/analysis" component={Analysis} />
                    <Route path="/ratedMovie" component={RatedMovie} />
                    <Route path="/searches" component={Searches} />
                    <Route path="/myTv" component={MyTv} />
                    <Route path="/wish" component={Wish} />
                    <Route path="/myBook" component={MyBook} />
                    <Layout path="/" exact component={Main} />
                    <Layout path="/tv_shows" exact component={Main} />
                    <Layout path="/books" exact component={Main} />
                    <Layout path="/contents/:id" exact component={Contents} />
                    <Layout path="/contents/:id/comments" exact component={Comment} />
                    <Layout path="/contents/:id/comments/:userId" exact component={Comment} />
                    <Layout path="/decks/:id" component={Decks} />
                    <Layout path="/people/:id" component={People} />
                    <Layout path="/people/:id" component={People} />
                    <LayoutDetail path="/watcha/:id" component={Watcha} />
                    <LayoutDetail path="/contents/:id/overview" exact component={ContentsInfo} />
                    <LayoutDetail path="/contents/:id/book/:contentId" exact component={Book} />

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
