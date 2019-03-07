import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './Home.js'
import Upload from './Upload.js'
import AddKeyword from './AddKeyword.js'
import FileSubmitted from './FileSubmitted.js'


import '../css/NavBar.css'


class NavBar extends Component {
    constructor(){
        super();
        this.state ={

            page1:"Upload",
            page2:"Add New Keyword",
            page3:"Report"
        

        }
    }


    render(){
        return(
            <div>
            <Router>
                    <nav>
                        <div className="navMenu"><Link to="/"><h2><img src="Sentinel.png" width="50" height="50" alt="Sentinel icon" />    Sentinel</h2></Link>
                            <ul className="topNav" id="topNavJS">
                                 
                                <li><Link to="/Upload">{this.state.page1}</Link></li>
                                <li><Link to="/AddKeyword">{this.state.page2}</Link></li>
                                <li><Link to="/Report">{this.state.page3}</Link></li>
                               
                            </ul> 
                              <Route exact path="/" component={Home}/> 
                              <Route exact path="/Upload" component={Upload}/> 
                              <Route exact path="/AddKeyword" component={AddKeyword}/>  
                              <Route exact path="/FileSubmitted" component={FileSubmitted}/>        
                        </div>    
                    </nav>
            </Router>
            </div>
        );
    }


}

export default NavBar;