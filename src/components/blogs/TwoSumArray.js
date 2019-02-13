import React, { Component } from 'react';
import {
  Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import { Grid, Cell } from 'react-mdl';

class TwoSumArray extends Component {
  render() {
    return (
      <div>
        <Container>
          <h3 className="page-title">Two Sum Array Problem</h3>
          <h5> By Keenan Irvin-Benning | Feb.12.2019 | Data Structures and Algorithms | Reading Time: 5 min</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
          </p>
          <Cell className="code-text" col={6} >
            <code className="code-text">
          {`
            function sum(arr){\ 
              if (!arr.length) return 0;
              let lastNum = arr[arr.length-1];
              let allButLast = sum(arr.slice(0, arr.length-1));
              return lastNum + allButLast;
            }
          `}
            </code>     
            </Cell>          
        </Container >
      </div >
    )
  }

}
export default TwoSumArray;