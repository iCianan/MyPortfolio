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
          <h3 className="page-title">Why Create a Blog?</h3>
          <h5> By Keenan Irvin-Benning | Feb.12.2019 | Personal Development | Reading Time: 5 min</h5>
          <p>
              A few years back I tried my luck at creating a blog. I didn't know what I wanted to talk about but I had the time 
              so I felt as an aspiring software developer it would be wise to help the community and get my name out there. Unfornately, 
              like most I got busy and vneglected it. This was in 2016 so who knows where I would be today had I commited and updated it regularly. 
              It wasn't all bad however since at the time I was using Google+ as my blog platform and if you haven't heard 
              <a href="https://support.google.com/plus/answer/9195133"> Google+ is shutting down April 2, 2019.</a> 
              So anyone who spent time developing a following on that platform is now migrating elsewhere. This is partly why instead of using 
              a content platform like Medium I decided to build a blog from scratch. Of course this is harder and I'm spending more time on
              making the site work vs actually creating blog content but I'm okay with that. Maybe in the future I'll create a blog post on the 
              challenges I faced creating this site.
              <br />
              <br />
              Since 2016 I have learned so much about building software. I have worked on multiple teams and read countless technical and
              personal development books that I again feel the itch to share what I've learned with the world. I recently read
              <a href="https://amzn.to/2X3ikeb"> The Complete Software Developer's Career by John Sonmez</a> where he literally
              goes through everything a software developer needs to know to navigate this space. He talks about all the technical and soft skills 
              needed to be successful and what it takes to reach the next level. The book is long about 20 hours of content but truly valuable. 
              I wish I picked it up when I first was starting out. However I want to talk about Chapter 48: Creating a Reputation. 
              In this chapter he argues that the most important thing a software developer can do is not learn the hottest Javascript framework 
              (side note I built this entire website using Node.js and React because I thought it was cool lol) but to build a solid reputation.
              <br />
              <br />        
              He uses an amazing example comparing a good chef to a celebrity chef. Can a celebrity chef who makes 10x the amount a good chef makes
              really cook 10x better? Of course not food can only taste so good but, its their reputation that pushes them over the edge. 
              This concept also applies in software development. Sure I can spend all my time developing my technical skills, which I will, but eventually 
              I will reach a glass celing where no amount of technical acumen will push me through. The only way to break through this is to build a reputation. 
              That is the purpose of this blog. Sure by proxy it will increase my communication skills and allow me a place to document the things I learn overtime but 
              more importantly it will allow people the chance to see what I'm about before they even meet me.  
          </p>
          <Cell className="code-text" col={6} >
            <code className="code-text">
          {`
            function sum(arr){ 
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