import React, { Component } from 'react';
import '../css/Upload.css';

class Home extends Component {
  render() {
    return (
      <div >

     <h2> WELCOME TO SENTINEL!! </h2>
     <h3>Warning You Are About To Enter A Restricted Area</h3>
     <p>Thank you for visiting Sentinel, this site is here to help you assess the word counts of your document.</p>

     <h3>Features: </h3>

     <h4>- Upload!</h4>
     <p>If you navigate to the the Upload section on the top right on the navigation bar this is where you can upload your chosen file that will be analysed for words.</p>

     <h4>- Add A New Key Word!</h4>
     <p>If you navigate to the the Add New Key Word section on the top right on the navigation bar this is where you can upload your chosen file<br></br> 
      that will add new keywrods to the database. When you add a key word it will allow you to get files of different types to be checked aswell.</p>

     <p>Thank You for visiting to start the process go to UPLOAD !</p>

     
      </div>
    );
  }
}

export default Home;