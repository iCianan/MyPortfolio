import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,  Container, Row, Col } from 'reactstrap'
class About extends Component {
  render() {
    return (
      <Container>
      <div>     
        <Jumbotron>
        <h2>About Me</h2>
        <hr className="my-2" />
        <div className="label">Education</div>
        <b>Grand Valley State University - B.B.A. Management Information Systems</b>
        <br />
        <br />
        <div className="label">Leadership Experience</div>
        President of Phi Beta Sigma Fraternity, Inc. Nu Gamma Chapter, Secretary of National Pan-Hellenic Council (NPHC) GVSU Chapter, Vice President of National Society of Black Engineers (NSBE) GVSU Chapter, Institute of Electrical and Electronics Engineers (IEEE).
        <br />
        <br />
        <div className="label">Hobbies</div>
        I strength train five to six days a week. I also practice yoga twice a month. I love learning about machine learning and blockchain use cases and projects. I volunteer with my fraternity for various charities several times a year. I love solving algorithm problems and playing chess, sports and video games.
        </Jumbotron>
      </div>
      </Container>

    )
  }

}
export default About;