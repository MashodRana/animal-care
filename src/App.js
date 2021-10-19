import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from "./components/Login/Login"
import Header from "./components/Header/Header"
import NotFound from './components/NotFound/NotFound';
import Service from './components/Services/Service';
import ContactUs from './components/ContactUs/ContactUs';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Appointment from './components/Appointment/Appointment';
import CareTips from './components/CareTips/CareTips';
import CareTip from './components/CareTips/CareTip';


function App() {
    return ( <
        div className = "App" >
        <
        AuthProvider >
        <
        BrowserRouter >
        <
        Header > < /Header> <
        Switch >
        <
        Route exact path = "/" >
        <
        Home > < /Home> <
        /Route> <
        Route exact path = "/home" >
        <
        Home > < /Home> <
        /Route>


        <
        PrivateRoute exact path = "/services/:serviceId" >
        <
        Service > < /Service> <
        /PrivateRoute> <
        Route exact path = "/caretips" >
        <
        CareTips > < /CareTips> <
        /Route> <
        PrivateRoute exact path = "/caretips/:caretipId" >
        <
        CareTip > < /CareTip> <
        /PrivateRoute> <
        PrivateRoute exact path = "/appointment" >
        <
        Appointment > < /Appointment> <
        /PrivateRoute> <
        Route exact path = "/contactus" >
        <
        ContactUs > < /ContactUs> <
        /Route> <
        Route exact path = "/login" >
        <
        Login > < /Login> <
        /Route> <
        Route exact path = "/register" >
        <
        Register > < /Register> <
        /Route> <
        Route path = "*" >
        <
        NotFound > < /NotFound> <
        /Route> <
        /Switch> <
        Footer > < /Footer> <
        /BrowserRouter> <
        /AuthProvider> <
        /div>
    );
}

export default App;