import React, { Component } from 'react';

class KeywordField extends Component {

    render() {
        return (

                <div>
                 New Keyword:
                <input type="text" placeholder="Enter Keyword..." id="NewKeyword" onChange={this.props.clickable}/>
                </div>
        );
    }
}

export default KeywordField;