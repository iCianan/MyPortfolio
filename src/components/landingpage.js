import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://image.flaticon.com/icons/svg/53/53060.svg"
                            alt="avatar"
                            className="avatar-img" />
                    </Cell>
                        <div className="banner-text">
                        <h1>I Build Things</h1>
                        <hr/>

                        <p>
                            .ASP.NET | C#/VB.NET | Javascript | SQL Server | Microsoft Azure | React | NodeJS
                        </p>
                        <div className="social-links">
                            {/*LinkedIn  */}
                            <a href="https://www.linkedin.com/in/keenanirvin" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/*Github  */}
                            <a href="https://github.com/icianan" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                            {/*Gmail  */}
                            <a href="https://gmail.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope" aria-hidden="true" />
                            </a>


                        </div>

                        </div>
                </Grid>
            </div>
        )
    }

}
export default Landing;