import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title={<a style={{color:"white"}} href="/">Home</a>} scroll href="/">
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about-me">About Me</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title={<a href="/">Home</a>}>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about-me">About Me</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main></Main>

            </Content>
            <Footer size="mini">
              <FooterSection type="left" logo="">
                <FooterLinkList>
                  <Link to="/">Home</Link>
                  <a href="https://www.linkedin.com/in/keenanirvin" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                  <a href="mailto:kirvinb@gmail.com">
                    <i className="fa fa-at" aria-hidden="true" />
                  </a>
                  <a href="https://www.instagram.com/ikeen4n" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </FooterLinkList>
              </FooterSection>
            </Footer>
          </Layout>
        </div>

      </div>
    );
  }
}

export default App;
