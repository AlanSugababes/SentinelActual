import React, { Component } from 'react';
import '../css/AddKeyword.css';
import KeywordField from './KeywordField.js'

class AddKeyword extends Component{
    constructor(){
        super();
        this.state = {
            title: "Add New Keyword",
            blankKeywordMessage:"",
            duplicateKeywordMessage:"",
            submitMessage:"",
            ableToSubmit:"false"
        }

        this.submitKeyword = this.submitKeyword.bind(this);
        this.ableToSubmit = this.ableToSubmit.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount(){
        let button = document.getElementById('submitButton');
        button.disabled = true;
    }

    ableToSubmit(){
        let keywordValue = document.getElementById('NewKeyword').value;
        let button = document.getElementById('submitButton');
        let duplicateKeyword = "bomb";

        if (keywordValue !=="" && keywordValue !== duplicateKeyword) {
            button.disabled = false;
            this.setState({
            blankKeywordMessage:"",
            duplicateKeywordMessage:"",
            submitMessage:""
            });
        }

        else if (keywordValue !== "" && keywordValue ===  duplicateKeyword){
            button.disabled = true;
            this.setState({
            blankKeywordMessage:"",
            duplicateKeywordMessage:"Error: Duplicate keyword entered please enter a new keyword!",
            submitMessage:""
            });

        }

        else {
            button.disabled = true;
            this.setState({
            blankKeywordMessage:"Error: No keyword entered, please enter a keyword!",
            duplicateKeywordMessage:"",
            submitMessage:""
            });}
    }

    submitKeyword() {
        let keywordValue = document.getElementById('NewKeyword').value;

        if(keywordValue !==""){
            this.setState({
            blankKeywordMessage:"",
            duplicateKeywordMessage:"",
            submitMessage:"Keyword has been submitted"
            });
        }
    }

refresh(){
    document.location.reload(true);
    }
        change
        
        
        render() {
        
            return (
                <div className="pageContent">
                    <h2>{this.state.title}</h2>
        
                    <p id="intro">Please enter a keyword you would like to add to the database into the field provided, once you are happy
                    with your entry please click the submit button.</p>
        
                        <div  className="reportSection"><KeywordField clickable={this.ableToSubmit} /></div>
        
                        <button onClick={this.submitKeyword} id="submitButton" >Submit</button>
        
                        <p>{this.state.blankKeywordMessage}</p>
                        <p>{this.state.duplicateKeywordMessage}</p>
                        <p>{this.state.submitMessage}</p>
        
                        <button onClick={this.refresh} id="refreshButton" >Enter another keyword</button>
        
                    </div>
        
                 
                );
            }
        
        }
        
export default AddKeyword;
