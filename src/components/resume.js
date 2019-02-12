import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ninja from '../images/CodingNinja.png';

class Resume extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={ninja}
              alt="avatar"
              style={{ height: '300px' }}
            />
          </div>
          <h2>Keenan Irvin-Benning</h2>
          <h4>Software Developer</h4>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          <p>
            Experienced software developer with a passion for identifying problems and offering efficient solutions.
            An excellent record of teamwork and customer service comfortable developing in an Agile environment.
            One who looks forward to pressure situations and working on teams to solve challenging problems.
                    </p>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          <h5>Email</h5>
          <p>kirvinb@gmail.com</p>
          <h5>Github</h5>
          <p>https://github.com/iCianan</p>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

        </Cell>
        <Cell className="resume-right-col" col={8}>
          <div className="label">Work Experience:</div>
          <br />
          Full Stack .NET Developer - State of Michigan. Lansing, MI, 4/16 - Present
          <br />
          Developed frontend and backend solutions using a test-driven approach for the Michigan Department of Education’s suite of ADA compliant web applications, supporting over 200,000 users. Routinely scanned and analyzed system error logs to proactively provide solutions and patches to bugs and security vulnerabilities to problems unreported to promote increased quality. Completed development using an intensive testing process including code reviews, peer testing, and User Acceptance testing with a separate QA team. Assisted development and design on the rewrite of “ProPrep” supporting all Michigan administrators and educators. Adhered to the SCRUM framework: fixed length sprints, daily standups, sprint planning, retrospectives, and a customer managed backlog. Developed SQL stored procedures, functions, views and ad-hoc reports for stakeholders. Kept skills updated via side projects, onsite trainings and Pluralsight courses and reinforced new skills in Microsoft Azure Cloud environments.
          <br /><strong>(ASP.NET, VB.NET, C#, SQL Server, SSRS, HTML/CSS/JS, JAWS, WAVE, PowerShell, Visual Studio, TFS, IBM Security AppScan, Angular.JS)</strong>
          <br />
          <br />
          Software Engineer - Civic Eagle. Remote, 4/18 - Present
          <br />
          Assisted development and design on the legislative intelligence platform “Enview.”
          <br /><strong>(ReactJS, NodeJS, PostgreSQL, Git, Docker, VS Code)</strong>
          <br />
          <br />
          Technical Support Analyst – Infor Global Solutions. Grand Rapids, MI 11/13 – 9/15
          <br />
          Provided technical support to over 300 international companies for Infor’s suite of ERP products. Maintained internal ERP architecture and desktop and web environments for product testing and bug reproduction. Effectively solved problems by asking questions, gathering information, and analyzing available data including: error logs, debug traces, and application/database code. Utilized senior colleagues and available support material whenever needed. Worked closely with development to get software bugs addressed and fixed promptly. Documented successful solutions to the company’s Knowledge Base for future lookup. Collaborated with a global team supporting customers all over the world including Europe, Japan, and Brazil.
                    <br /><strong>(Infor LN, Baan ERP, Windows Server, HP-UX, AIX, RedHat, SQL Server, Oracle, Informix, Apache Tomcat, SSH)</strong>
        </Cell>
      </Grid>

    )
  }

}
export default Resume;