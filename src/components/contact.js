import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <Grid>
        <Cell col={6}>
          <h2 className="page-title">I want to hear from you!</h2>
          <hr style={{ borderTop: '3px solid #000046', width: '100%' }} />
          <p>
            I'm always open to new challenges and networking opportunities.
            My plan is to work with the smartest people I can find, solve the hardest problems and work with cutting edge technolgy.
            If you have a question or want to work together, I can be reached via the following:
          </p>
          <hr style={{ borderTop: '3px solid #000046', width: '100%' }} />
        </Cell>
        <Cell col={6}>
          <div className="contact-list">
            <h2 className="page-title">Contact Me</h2>
            <hr style={{ borderTop: '3px solid #000046', width: '100%', alignContent: 'center' }} />
            <List>
              <ListItem>
                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                  <i className="fa fa-instagram" aria-hidden="true" />
                  <a href="https://www.instagram.com/ikeen4n" rel="noopener noreferrer" target="_blank">Instagram</a>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                  <a href="https://www.linkedin.com/in/keenanirvin/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                  <img
                    alt=""
                    className="icon-image"
                    src="https://steemitimages.com/DQmVs4bowkrP3M3pejKrNoi6xYuUfzyyEu2qSfSUZpLNAUW/bw-steem-icon.png" />
                  <a href="https://steemit.com/@ikeenan" rel="noopener noreferrer" target="_blank">&nbsp;&nbsp;&nbsp;Steemit</a>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                  <i className="fa fa-at" aria-hidden="true" />
                  <a href="mailto:kirvinb@gmail.com">kirvinb@gmail.com</a>
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Contact;