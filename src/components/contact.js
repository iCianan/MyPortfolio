import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2> Keenan Irvin-Benning</h2>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              <h3>Let's build something amazing!</h3> 
              I'm always open to new challenges and networking opportunities.
              My plan is to work with the smartest people I can find, solve the hardest problems and work with cutting edge technolgy.
              If you have a question or want to work together, I can be reached via the following:
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-instagram" aria-hiddem="true" />
                    <a href="https://www.instagram.com/ikeen4n" target="_blank">Instagram</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-linkedin" aria-hiddem="true" />
                    <a href="https://www.linkedin.com/in/keenanirvin/" target="_blank">LinkedIn</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <img
                      className="icon-image"
                      src="https://steemitimages.com/DQmVs4bowkrP3M3pejKrNoi6xYuUfzyyEu2qSfSUZpLNAUW/bw-steem-icon.png" />
                    <a href="https://steemit.com/@ikeenan" target="_blank">Steemit</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-at" aria-hidden="true" />
                    <a href="mailto:kirvinb@gmail.com">kirvinb@gmail.com</a>
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