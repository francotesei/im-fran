import React, { Component } from 'react';
import Iframe from 'react-iframe'
export default class RecentWork extends Component {

  render(){
    return(
    <div className="recentWork">
    <div className="container">
    <div className="row">
    <div className="col-md-12  text-left">
    <div>
    <h5 >RECENT WORK</h5>
    </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-10">

      <Iframe url="http://localhost:8080/github-calendar.html"
          width="100%"
          height="350px"
          id="myId"
          className="iframe"
          display="initial"
          position="relative"
          allowFullScreen/>
</div>
</div>



    </div>
    </div>
    )
  }
}
