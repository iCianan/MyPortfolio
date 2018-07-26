import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={( tabId ) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>ASP.NET</Tab>
                    <Tab>React</Tab>
                    <Tab>Solidity</Tab>
                    <Tab>Python</Tab>

                </Tabs>
            </div >

                )
    }

}
export default Project;
