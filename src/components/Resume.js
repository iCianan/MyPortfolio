import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ninja from '../images/codingNinja.png';
import { Helmet } from 'react-helmet';

let subTitile = {
	fontFamily: 'Oswald'
};
class Resume extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Resume | Keenan Irvin-Benning</title>
					<meta
						name="description"
						content="resume, Experienced software developer with a passion for identifying problems and offering efficient solutions."
					/>
				</Helmet>

				<Grid>
					<Cell col={4}>
						<div className="ninja" style={{ textAlign: 'center' }}>
							<img src={ninja} alt="avatar" style={{ height: '300px' }} />
						</div>
						<div className="page-title">
							<h2 className="page-title">Keenan Irvin-Benning</h2>
							<h4 className="page-title">Software Developer</h4>
						</div>
						<hr style={{ borderTop: '3px solid #000046', width: '50%' }} />
						<p>
							Experienced software developer with a passion for identifying problems and offering
							efficient solutions. An excellent record of teamwork and customer service comfortable
							developing in an Agile environment. One who looks forward to pressure situations and working
							on teams to solve challenging issues.
						</p>
						<hr style={{ borderTop: '3px solid #000046', width: '50%' }} />
						<h5 style={subTitile}>Email</h5>
						<p>
							<a href="mailto:kirvinb@gmail.com">kirvinb@gmail.com</a>
						</p>
						<h5 style={subTitile}>Github</h5>
						<p>
							<a href="https://github.com/iCianan" rel="noopener noreferrer" target="_blank">
								https://github.com/iCianan
							</a>
						</p>
						<hr style={{ borderTop: '3px solid #000046', width: '50%' }} />
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<div className="label">Work Experience:</div>
						<br />
						<div className="label">
							Software Engineer – Two Men and a Truck. Lansing, MI, 3/19 - Present
						</div>
						<ul>
							<li>
								Responsible for developing frontend and backend solutions using agile development
								methodologies for web-based software within the franchise system.
							</li>
							<li>
								<strong>
									(ASP.NET MVC, C#, SQL Server, Entity Framework, PowerShell, Visual Studio, TFS,
									GitLab, Docker, Web API, Postman, VueJS)
								</strong>
							</li>
						</ul>
						<div className="label">Contributer - Civic Eagle. Remote, 4/18 - Present</div>
						<ul>
							<li>
								Assisted development and design on the legislative intelligence platform “Enview.”
								Developed a function using NodeJS and GraphQL to retrieve, parse, and store bill data
								from various state government websites.
							</li>
							<li>
								<strong>(ReactJS, NodeJS, PostgreSQL, Postman, GraphQL, Git, Docker, VS Code)</strong>
							</li>
						</ul>
						<div className="label">
							Full Stack .NET Developer - State of Michigan. Lansing, MI, 4/16 - 2/19
						</div>
						<ul>
							<li>
								Developed frontend and backend solutions using a test-driven approach for the Michigan
								Department of Education’s suite of ADA compliant ASP.NET web applications, supporting
								over 200,000 users.
							</li>
							<li>
								<strong>
									(ASP.NET, VB.NET, C#, SQL Server, SSRS, HTML/CSS/JS, JAWS, WAVE, PowerShell, Visual
									Studio, TFS, IBM Security AppScan, Angular.JS)
								</strong>
							</li>
						</ul>

						<div className="label">
							Technical Support Analyst – Infor Global Solutions. Grand Rapids, MI 11/13 – 9/15
						</div>
						<ul>
							<li>
								Provided technical support to over 300 international companies for Infor’s suite of ERP
								products. Collaborated with a global team supporting customers all over the world
								including Europe, Japan, and Brazil. Maintained and managed internal ERP environments
								and UNIX, Linux, and Windows servers for testing and bug reproduction.
							</li>
							<li>
								<strong>
									(Infor LN, Baan ERP, Windows Server, HP-UX, AIX, RedHat, SQL Server, Oracle,
									Informix, Apache Tomcat, SSH)
								</strong>
							</li>
						</ul>
					</Cell>
				</Grid>
			</div>
		);
	}
}
export default Resume;
