import React, { Component } from 'react';
import {
	Jumbotron,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Container,
	Row,
	Col
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
						As software engineers it is our job to solve problems. Whereas most professions have guidelines
						on how to do things, in software you are paid to figure out the best way to solve problems. Your
						stakeholders will not be there to decide if you should use a binary search tree or a hash table
						to store address data. Beyond the financial impact, they won't have any input on if the system
						should be written using .Net 5 or NodeJs.
						<br />
						<br />
						You will decide and be expected to fix any problems you run into. Expect to spend most of your
						time lost and confused endlessly searching the internet for answers. This means an aspiring
						software engineers needs to hone thier Googling and problem solving skills. I will assume you
						know how to Google but if you're like me when you started learning how to code you immediately
						jumped into a programming language and/or frontend framework like React trying to build and run
						stuff.
						<br />
						<br />
						It was a grind felt impossible at times but you slowly got better. But after a while you learned
						that top tech companies expect you to be able to solve algorithm and data structure problems
						during their technical interview. I worked as a ASP.NET C# Web Application developer building
						production level applications for 2 years before I even knew what data structure was.
						<br />
						<br />
						I know some argue these type of technical interviews don't not speak to the quality of a
						software engineer but I don't care when they are offering 6 figure compensation packages. If you
						want to work there shut up and get to work.
						<a href="https://amzn.to/2X3ikeb">
							{' '}
							The Complete Software Developer's Career by John Sonmez
						</a>{' '}
						where he literally goes through everything a software developer needs to know to navigate this
						space. He talks about all the technical and soft skills needed to be successful and what it
						takes to reach the next level. The book is long about 20 hours of content but truly valuable. I
						wish I picked it up when I first was starting out. However I want to talk about Chapter 48:
						Creating a Reputation. In this chapter he argues that the most important thing a software
						developer can do is not learn the hottest Javascript framework (side note I built this entire
						website using Node.js and React because I thought it was cool lol) but to build a solid
						reputation.
						<br />
						<br />
						He uses an amazing example comparing a good chef to a celebrity chef. Can a celebrity chef who
						makes 10x the amount a good chef makes really cook 10x better? Of course not food can only taste
						so good but, its their reputation that pushes them over the edge. This concept also applies in
						software development. Sure I can spend all my time developing my technical skills, which I will,
						but eventually I will reach a glass celing where no amount of technical acumen will push me
						through. The only way to break through this is to build a reputation. That is the purpose of
						this blog. Sure by proxy it will increase my communication skills and allow me a place to
						document the things I learn overtime but more importantly it will allow people the chance to see
						what I'm about before they even meet me.
					</p>
					<Cell className="code-text" col={6}>
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
				</Container>
			</div>
		);
	}
}
export default TwoSumArray;
