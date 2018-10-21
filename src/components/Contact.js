import React, { Component } from 'react';
import linkedin from "../resources/images/icons/linkedin.png";
import github from "../resources/images/icons/github.png";
import gmail from "../resources/images/icons/gmail.svg";
export default class Contact extends Component {

  render(){
    return(
    <div className="contact">
    <div className="container">
    <div className="row">
    <div className="col-md-12  text-left">
    <div>
    <h5 >Contact</h5>
    </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-2"></div>

  <div className="col-md-3">
      <div className="card">
        <div className="card-body text-center">
          <a href="www.linkedin.com/in/franco-tesei-4b7580109" target="blank">
          <img src={linkedin} className="rounded"></img>
      <span><strong>Linkedin</strong></span>
      </a>
    </div>
  </div>
</div>

<div className="col-md-3">
    <div className="card">
      <div className="card-body text-center">
        <a href="https://github.com/francotesei" target="blank">
        <img src={github} className="rounded"></img>
    <span><strong>Github</strong></span>
</a></div>

</div>
</div>


<div className="col-md-3">
    <div className="card">
      <div className="card-body text-center">
        <a href="mailto:ftesei96@gmail.com">
        <img src={gmail} className="rounded"></img>
    <span><strong>Gmail</strong></span>
    </a>
  </div>
</div>
</div>



</div>

    </div>
    </div>
    )
  }
}
