import React, { Component } from 'react';
import {Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
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
          <CardTitle className="blog-title">Two Sum Array Problem</CardTitle> 
          <hr style={{ borderTop: '3px solid #000046', width: '50', marginLeft:'25%', marginRight:'25%'}} />
          <CardSubtitle>Feb.12.2019 | Data Structures and Algorithms | Reading Time: 5 min</CardSubtitle>
            <CardText>
              Given an array of integers, return indices of the two numbers such that they add up to a specific target.
            </CardText>
            <Button tag={Link} to="./blogs/TwoSumArray" outline color="primary">Read Post</Button>
          </CardBody>
          <CardImg className="blog-title-pic" src={code} ></CardImg>
          <CardBody className="text-center">
          <CardTitle className="blog-title">Two Sum Array Problem</CardTitle> 
          <hr style={{ borderTop: '3px solid #000046', width: '50', marginLeft:'25%', marginRight:'25%'}} />
            <CardText>
              Given an array of integers, return indices of the two numbers such that they add up to a specific target.
            </CardText>
            <Button outline color="primary">Read Post</Button>
          </CardBody>
        </Card>
        </Col>
        

      </div>


    )
  }

}
export default Blog;