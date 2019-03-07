import React, { Component } from 'react';

class ReportTitle extends Component {

    render() {
        return (

                <div>
                 Report Title:
                 <input type="text" placeholder="Enter name" id="ReportName" onChange={this.props.clickable} required/>
                </div>
        );
    }
}

export default ReportTitle;