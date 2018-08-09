import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
                <div className="demo-big-content">
                    <Layout>
                        <Header className="header-color" title={<a href="/">My Porfolio</a>} scroll href="/">
                            <Navigation>
                                <Link to="/resume">Resume</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/aboutme">About Me</Link>
                                <Link to="/contact">Contact</Link>
                            </Navigation>
                        </Header>
                        <Drawer title={<a href="/">My Porfolio</a>}>
                            <Navigation>
                                <Link to="/resume">Resume</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/aboutme">About Me</Link>
                                <Link to="/contact">Contact</Link>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                            <Main></Main>

                        </Content>
                        <Footer size="mini">
                            <FooterSection type="left" logo="Title">
                                <FooterLinkList>
                                    <Link to="/">Home</Link>
                                    <Link to="/Contact">Privacy & Terms</Link>
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
