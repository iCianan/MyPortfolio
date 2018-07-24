import React from 'react';
import {Switch , Route} from 'react-router-dom';
import About from './aboutme';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';
import LandingPage from './landingpage';
import Contact from './contact';



const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />>
        <Route path="/resume" component={Resume} />>
        <Route path="/contact" component={Contact} />>
        <Route path="/projects" component={Projects} />>

    </Switch>
)

export default Main;