import React, { Component } from 'react';

export default class Education extends Component {

  render(){
    return(
    <div className="education">
    <div className="container">
    <div className="row">
    <div className="col-md-12  text-left">
    <div>
    <h5 >EDUCATION</h5>
    </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-2"></div>

    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
      <p><strong>2007 - 2014</strong></p>
      <p><b>Technical Computer Programmer</b></p>
      <p className="text-center">Secondary School.</p>
    </div>
  </div>
</div>

<div className="col-md-3">
  <div className="card">
    <div className="card-body">
      <p><strong>2014 - 2018</strong></p>
      <p><b>IT Engineer / Electronic Engineer </b></p>
      <p className="text-center">Discontinued.</p>
</div>
</div>
</div>

<div className="col-md-3">
  <div className="card">
    <div className="card-body">
      <p><strong>2018 - Present</strong></p>
      <br/>
      <p><b>Computer Science</b></p>
      <p className="text-center">UBA</p>
</div>
</div>
</div>




</div>


    </div>
    </div>
    )
  }
}
