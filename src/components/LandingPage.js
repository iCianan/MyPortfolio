import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/ninja.svg';
import Contact from './Contact';
import { Link, Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Helmet>
          <title>Keenan Irvin-Benning | Full Stack Developer</title>
          <meta name="description" content="Nice to meet you, I'm Keenan a Full Stack Developer. This is my personal site. 
            Think of it as an online resume. Also a chance for me to apply and share new technical skills I pick up along the way."/> 
        </Helmet>      
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={avatar}
              alt="avatar"
              className="avatar-img" />
          </Cell>
          <div className="banner-text">
            <h1>Hi, I'm Keenan I design and build things</h1>
            <hr />
            <p>
              ASP.NET | C# | SQL Server | Microsoft Azure | Javascript | React | NodeJS
            </p>
            <div className="social-links">
              {/*LinkedIn  */}
              <a href="https://www.linkedin.com/in/keenanirvin" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/*Github  */}
              <a href="https://github.com/icianan" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/*Gmail  */}
              <Link to="/contact"><i className="fa fa-envelope" aria-hidden="true" /></Link>
              <Route path="/contact" component={withRouter(Contact)} />
            </div>
          </div>
        </Grid>
      </div>
    )
  }

}
export default Landing;
