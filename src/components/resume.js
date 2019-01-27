import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import samurai from'../images/samurai.png';

class Resume extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={samurai}
                            alt="avatar"
                            style={{ height: '200px' }}
                        />
                    </div>
                    <h2>Keenan Irvin-Benning</h2>
                    <h4>Programmer</h4>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    <p>I've always been fascinated by the god like powers software engineers have.
                        Programming languages have given us the ability to build anything that comes to mind.
                        While I started my career in the ERP industry the allure of software
                        development was too tempting to ignore
                    </p>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    <h5>Address</h5>
                    <p>281.330.8004</p>
                    <h5>Email</h5>
                    <p>somethin@gmail.com</p>
                    <h5>Website</h5>
                    <p>ikeenan.io</p>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                </Cell>
                <Cell className="resume-right-col" col={8}>
                    Right Side
                    </Cell>
            </Grid>

        )
    }

}
export default Resume;