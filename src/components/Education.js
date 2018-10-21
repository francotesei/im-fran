import React, { Component } from 'react';

export default class Education extends Component {

  render(){
    return(
<div>

  {/*formal education */}
    <div className="education">
    <div className="container">
    <div className="row">
    <div className="col-md-12  text-left">
    <div>
    <h5 >FORMAL EDUCATION</h5>
    </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-3"></div>

    <div className="col-md-3">
      <div className="card">
        <div className="card-body text-center">
      <p><strong>2007 - 2014</strong></p>
      <p><b>Technical Computer Programmer</b></p>
      <p className="text-center">Secondary School.</p>
    </div>
  </div>
</div>

<div className="col-md-3">
  <div className="card">
    <div className="card-body text-center">
      <p><strong>2014 - 2018</strong></p>
      <p><b>IT Engineer / Electronic Engineer </b></p>
      <p className="text-center">Discontinued.</p>
</div>
</div>
</div>

<div className="col-md-3">
  <div className="card">
    <div className="card-body  text-center">
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


{/*informal education */}
    <div className="education">
    <div className="container">
    <div className="row">
    <div className="col-md-12  text-left">
    <div>
    <h5 >INFORMAL EDUCATION</h5>
    </div>
    </div>
    </div>

    <div className="row">
    <div className="col-md-3"></div>

    <div className="col-md-3">
      <div className="card">
        <div className="card-body text-center">
          <a href="https://www.coursera.org/account/accomplishments/certificate/GRM7XHLP2E9E" target="_blank">
      <p><strong>COMPLETED</strong></p>
      <p><b>Machine Learning</b></p>
      <p className="text-center">Coursera - Stanford University</p>
</a>
  </div>
    </div>
    </div>

    <div className="col-md-3">
    <div className="card">
    <div className="card-body text-center">
      <p><strong>CURRENTLY</strong></p>
      <p><b>Functional Programming in Scala</b></p>
      <p className="text-center">Coursera - EPFL</p>
    </div>
    </div>
    </div>

    <div className="col-md-3">

    </div>

    </div>
    </div>
    </div>




</div>



    )
  }
}
