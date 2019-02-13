import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap'
import code from '../images/code.jpeg'
import { Link } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h2 className="page-title">Its coffee time!</h2>
        <Card >
          <CardImg className="blog-title-pic" src={code} ></CardImg>
          <CardBody className="text-center">
          <CardTitle className="blog-title">Why Create a Blog?</CardTitle> 
          <hr style={{ borderTop: '3px solid #000046', width: '50', marginLeft:'25%', marginRight:'25%'}} />
          <CardSubtitle>Feb.13.2019 | Personal Development | Reading Time: 5 min</CardSubtitle>
            <CardText>
              Hey Keenan, why are you wasting time creating a blog? Shouldn't you be learning new tech skills?
            </CardText>
            <Button tag={Link} to="./blogs/WhyCreateABlog" outline color="primary">Read Post</Button>
          </CardBody>
        </Card>
        </Col>
      </div>
    )
  }

}
export default Blog;