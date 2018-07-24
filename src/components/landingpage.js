import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                        <img src="https://image.flaticon.com/icons/svg/53/53060.svg"
                        alt="avatar"
                        className="avatar-img" />

                        <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>

                        <p>
                            .ASP.NET | C#/VB.NET | Javascript | SQL Server | Microsoft Azure | React | NodeJS
                        </p>

                        </div>
                </Grid>
            </div>
        )
    }

}
export default Landing;