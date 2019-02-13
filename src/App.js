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
                        <Header className="header-color" title={<a href="/">Home</a>} scroll href="/">
                            <Navigation>
                                <Link to="/Resume">Resume</Link>

                                <Link to="/Blog">Blog</Link>
                                <Link to="/Projects">Projects</Link>
                                <Link to="/AboutMe">About Me</Link>
                                <Link to="/Contact">Contact</Link>
                            </Navigation>
                        </Header>
                        <Drawer title={<a href="/">Home</a>}>
                            <Navigation>
                                <Link to="/Resume">Resume</Link>
                                <Link to="/Blog">Blog</Link>
                                <Link to="/Projects">Projects</Link>
                                <Link to="/AboutMe">About Me</Link>
                                <Link to="/Contact">Contact</Link>
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
