import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from "./components/Login/Login"
import Header from "./components/Header/Header"
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Service from './components/Services/Service';
import ContactUs from './components/ContactUs/ContactUs';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';


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

        <Route exact path="/services/:serviceId">
         <Service></Service>
        </Route>

        <Route exact path="/contactus">
          <ContactUs></ContactUs>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
