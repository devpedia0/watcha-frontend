import "./App.css";
import Header from "./component/Header";

import Footer from "./component/Footer";
import Team from "./component/Team";
import MyPage from "./component/MyPage";
import AdminForm from "./pages/AdminForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

function App() {
    return (
        <Router>
            <Header />
            <Route exact path="/">
                <Footer />
            </Route>
            <Route path="/team">
                <Team />
            </Route>
            <Route path="/myPage">
                <MyPage />
            </Route>
            <Route path="/form" component={AdminForm} />
        </Router>
    );
}

export default App;
