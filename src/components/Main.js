import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import LandingPage from './LandingPage';
import Contact from './Contact';
import Blog from './Blog';
import WhyCreateABlog from './blogs/WhyCreateABlog';
import WhatIsHTTP from './blogs/WhatIsHTTP';
import TwoSumArray from './blogs/TwoSumArray';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about-me" component={AboutMe} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/blog" component={Blog} />
    <Route path="/blogs/why-create-a-blog" component={WhyCreateABlog} />
    <Route path="/blogs/what-is-http" component={WhatIsHTTP} />
  </Switch>
)

export default Main;
