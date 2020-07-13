import React from "react";
import { PageTemplate, AboutMenu, History, Services, Company } from "./index";
import {Route} from 'react-router-dom';
const About = ({match}) => <PageTemplate>
    <section className="about">
        <Route component={AboutMenu} />
        <Route exact path={"/about"} component ={Company}/>
        <Route path={"/about/history"} component ={History}/>
        <Route path={"/about/services"} component ={Services}/>
    </section>
</PageTemplate>

export default About