import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from "./components/Login/Login"
import Header from "./components/Header/Header"
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
