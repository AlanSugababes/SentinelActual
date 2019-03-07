import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Upload from './Upload.js'
import AddKeyword from './AddKeyword.js'


import '../css/NavBar.css'


class NavBar extends Component {
    constructor(){
        super();
        this.state ={

            page1:"Upload",
            page2:"Add New Keyword",
            page3:"History",
            page4:"Help"

        }
    }


    render(){
        return(
            <div>
            <Router>
                    <nav>
                        <div className="navMenu"><h2><img src="Sentinel.png" width="50" height="50" alt="Sentinel icon" />    Sentinel</h2>
                            <ul className="topNav" id="topNavJS">
                                <li><Link to="/">{this.state.page1}</Link></li>
                                <li><Link to="/AddKeyword">{this.state.page2}</Link></li>
                                <li><Link to="/History">{this.state.page3}</Link></li>
                                <li><Link to="/Help">{this.state.page4}</Link></li>
                            </ul> 
                              <Route exact path="/" component={Upload}/> 
                              <Route exact path="/AddKeyword" component={AddKeyword}/>     
                        </div>    
                    </nav>
            </Router>
            </div>
        );
    }


}

export default NavBar;