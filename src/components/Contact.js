import React, { Component } from 'react';
import linkedin from "../resources/images/icons/linkedin.png";
import github from "../resources/images/icons/github.png";
import gmail from "../resources/images/icons/gmail.svg";
import html2canvas from 'html2canvas'
export default class Contact extends Component {

  constructor(props){
    super(props);
    this.downloadCV = this.downloadCV.bind(this)
  }

  downloadCV(){
    html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
});
  }

  render(){
    return(
    <div className="contact">
    <div className="container">
    <div className="row">
    <div className="col-md-12  text-left">
    <div>
    <h5 >CONTACT</h5>
    </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-2"></div>

  <div className="col-md-3">
      <div className="card">
        <div className="card-body text-center">
          <a href="www.linkedin.com/in/franco-tesei-4b7580109" target="_blank">
          <img src={linkedin} className="rounded"></img>
      <span><strong>Linkedin</strong></span>
      </a>
    </div>
  </div>
</div>

<div className="col-md-3">
    <div className="card">
      <div className="card-body text-center">
        <a href="https://github.com/francotesei" target="_blank">
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

<br/>
<div className="row">
<div className="col-md-12 text-center">
  <button className="btn btn-danger btn-outline-danger" hidden="true" onClick={()=>this.downloadCV()}>Descargar CV</button>
</div>
</div>

    </div>
    </div>
    )
  }
}
