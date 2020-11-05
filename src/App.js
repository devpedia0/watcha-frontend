import './App.css';
import Header from './component/Header';

import Footer from './component/Footer';
import Team from './component/Team';
import MyPage from './component/MyPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
    </Router>
  );
}

export default App;
