import React, { Component } from 'react';
import '../css/Upload.css';

import ReportTitle from './ReportTitle.js'
import SelectFile from './SelectFile.js'



class Upload extends Component {
    constructor() {
        super();
        this.state = {
            title: "Upload Files",
            reportNameMessage: "",
            fileTypeMessage: "",
            submitMessage: "",
            ableToUpload: "false"

        }

        this.submitFile = this.submitFile.bind(this);
        this.ableToSubmit = this.ableToSubmit.bind(this);
        this.showKeyWords = this.showKeyWords.bind(this);
   
    }

    componentDidMount() {
        let button = document.getElementById('submitButton');
        button.disabled = true;
    }


    ableToSubmit() {

        let reportTitleValue = document.getElementById('ReportName').value;
        let filevalue = document.getElementById('fileUpload').value;
        let button = document.getElementById('submitButton');


        if (reportTitleValue !== "" && filevalue !== "" && filevalue.endsWith('.pdf')) {

            button.disabled = false;
            this.setState({
                reportNameMessage: "",
                fileTypeMessage: "",
                submitMessage: ""

            });


        }
       else if (reportTitleValue === "" && filevalue !== "" && filevalue.endsWith('.pdf')) {

            button.disabled = true;
            this.setState({
                reportNameMessage: "Please enter a Report Title",
                fileTypeMessage: "",
                submitMessage: ""

            });


        }

        else {
            button.disabled = true;
            this.setState({
                fileTypeMessage: "Please choose a PDF"
            });
        }

    }



    submitFile(event) {
        event.preventDefault();
        let reportTitleValue = document.getElementById('ReportName').value;
        let filevalue = document.getElementById('fileUpload').value;

        if (reportTitleValue !== "" && filevalue !== "" && filevalue.endsWith('.pdf')) {

            this.setState({
                reportNameMessage: "",
                fileTypeMessage: "",
                submitMessage: "File Has Been Submitted"

            });
        }
    }

    showKeyWords() {

        let keywordLocation = document.getElementById('keyWordLocation');
        let keywordValue = document.getElementById('keyWordAmount').value;

    }

    



    render() {

        return (
            <div className="pageContent">
                <h1>{this.state.title}</h1>

                <p id="intro">Welcome to the uploads page! To continue please enter a report title for the generated report <br></br>
                    a PDF file. Please select one and add a Report Title for the report to continue.</p>
                    
                    <form action="/" encType="multipart/form-data" method="post" >
                        <div  className="reportSection"><ReportTitle clickable={this.ableToSubmit} /></div>
                        Select File: 
                        <input id="fileUpload" required="required" type="file" name="upload" accept=".pdf" onChange={this.ableToSubmit}/>
                        <input type="submit" onSubmit={this.submitFile} value="Send File" id="submitButton" />
                    </form>
        
                    <p>{this.state.fileTypeMessage}</p>
                    <p>{this.state.reportNameMessage}</p>
                    <p>{this.state.submitMessage}</p>


                    <p id="keyWordLocation" hidden > KeyWords: <input type="text" id ="keyWordAmount" /> </p>

                </div>

         
        );
    }

}

export default Upload;