import "./App.css";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Body from "./component/Body";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <DefaultLayout path="/program" component={Body} />
                    <DefaultLayout path="/book" component={Body} />
                    <DefaultLayout path="/" exact component={Body} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
