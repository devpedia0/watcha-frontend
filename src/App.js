import './App.css';
import Header from './component/Header';
import Login from './pages/LoginSignUp/Login';
import SignUp from './pages/LoginSignUp/SignUp';
import Footer from './component/Footer';
import Home from './pages/Home';
import Team from './component/Team';
import MyPage from './component/MyPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/signin" component={Login}>
        <Login />
      </Route>
      <Route path="/signup" component={SignUp}>
        <SignUp />
      </Route>
      <Route exact path="/">
        <Home />
        <Footer />
      </Route>
      <Route path="/team" component={Team}>
        <Team />
      </Route>
      <Route path="/myPage" component={MyPage}>
        <MyPage />
      </Route>
    </Router>
  );
}

export default App;
