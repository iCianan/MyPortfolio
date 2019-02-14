import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import LandingPage from './LandingPage';
import Contact from './Contact';
import Blog from './Blog';
import WhyCreateABlog from './blogs/WhyCreateABlog';
import TwoSumArray from './blogs/TwoSumArray';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/AboutMe" component={AboutMe} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Blog" component={Blog} />
    <Route path="/blogs/WhyCreateABlog" component={WhyCreateABlog} />
    <Route path="/blogs/TwoSumArray" component={TwoSumArray} />
  </Switch>
)

export default Main;