import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, IconButton } from 'react-mdl';
import { Button } from 'reactstrap'

let cardStyle = {
  textAlign: 'center', minWidth: '450', margin: 'auto'
}
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 }
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={cardStyle}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
              }}>
              React Project #1
            </CardTitle>
            <CardText>
              Personal website built using React and Node.Js
            </CardText>
            <CardActions border>
              <Button outline color="primary" href="https://github.com/iCianan/MyPortfolio" rel="noopener noreferrer" target="_blank">GitHub</Button>
            </CardActions>
          </Card>
        </div>
      )
    }
    else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={cardStyle}>
            <CardTitle style={{
              color: '#fff',
              height: '176px',
              background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
            }} >
              ASP.NET Project #1
              </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button outline color="primary">GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>)
    }
    else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={cardStyle}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Solidity Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button outline color="primary">GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>)
    }
    else {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={cardStyle}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Python Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button outline color="primary">GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
          <Tab>React</Tab>
          <Tab>ASP.NET</Tab>
          <Tab>Solidity</Tab>
          <Tab>Python</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div >
    )
  }

}
export default Project;
