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
            duplicateKeywordMessage:"Error: This keyword already exists please enter a new keyword!",
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
        let request = new XMLHttpRequest();

        request.open('POST', 'http://localhost:5000/api/keywords', true);
        request.setRequestHeader('Content-Type', 'application/json');

        let keywordValue = document.getElementById('NewKeyword').value;

        let jsonString = JSON.stringify(
            {'word': keywordValue}
        )

        request.send(jsonString);



        if(keywordValue !==""){
            this.setState({
            blankKeywordMessage:"",
            duplicateKeywordMessage:"",
            submitMessage:"Keyword has been submitted"
            });
        }
    }
        
        render() {
        
            return (
                <div className="pageContent">
                    <h1>{this.state.title}</h1>
        
                    <p id="intro">Please enter a keyword you would like to add to the database into the field provided, once you are happy
                    with your entry please click the submit button.</p>
        
                        <div  className="reportSection"><KeywordField clickable={this.ableToSubmit} /></div>
        
                        <button onClick={this.submitKeyword} id="submitButton" >Send Keyword</button>
        
                        <p>{this.state.blankKeywordMessage}</p>
                        <p>{this.state.duplicateKeywordMessage}</p>
                        <p>{this.state.submitMessage}</p>
                    </div>
        
                 
                );
            }
        
        }
        
export default AddKeyword;