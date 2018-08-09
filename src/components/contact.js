import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Keenan Irvin-Benning</h2>
                        <img
                            src="https://pbs.twimg.com/profile_images/996116918057742337/73SpmBRO_400x400.jpg"
                            alt="avatar"
                            style={{ height: '200px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            I've always been fascinated by the god like powers software engineers have.
                                Programming languages have given us the ability to build anything that comes to mind.
                                While I started my career in the ERP industry the allure of software
                                development was too tempting to ignore.
                            </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hiddem="true" /> 
                                        281.330.8004
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-linkedin" aria-hiddem="true" />
                                        <a href="https://www.linkedin.com/in/keenanirvin/" target="_blank">LinkedIn</a>
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                                        <img
                                            className="icon-image"                                           
                                            src="https://steemitimages.com/DQmVs4bowkrP3M3pejKrNoi6xYuUfzyyEu2qSfSUZpLNAUW/bw-steem-icon.png" />
                                        <a href="https://steemit.com/@ikeenan" target="_blank">Steemit</a>
                                        </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;