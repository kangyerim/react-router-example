import React from "react";
import {About, Home, Contacts, Event, Products, Error} from "../components";
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'

const Main:React.FC = () => {
    return <div>
        <BrowserRouter>
            <div className="main">
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route exact path="/about" component ={About}/>
                    <Redirect from={"/history"} to={"/about/history"}/>
                    <Redirect from={"/services"} to={"/about/services"}/>
                    <Redirect from={"/location"} to={"/about/location"}/>
                    <Route path="/products" component ={Products}/>
                    <Route path="/event" component ={Event}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
}
export default Main