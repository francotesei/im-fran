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
    <div className="col-md-4"></div>

    <div className="col-md-4">
      <div className="card">
        <div className="card-body text-center">
      <p><strong>2007 - 2014</strong></p>
      <p><b>Technical Computer Programmer</b></p>
      <p className="text-center">Secondary School.</p>
    </div>
  </div>
</div>



<div className="col-md-4">
  <div className="card">
    <div className="card-body  text-center">
      <p><strong>Present</strong></p>
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
      <br/>
      <p className="text-center">Coursera - Stanford University</p>
</a>
  </div>
    </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <div className="card-body text-center">
          <a href="https://www.coursera.org/account/accomplishments/verify/PQ3JTSK79EEK" target="_blank">
      <p><strong>COMPLETED</strong></p>
      <p><b>Intro. Deep Learning with Tensorflow</b></p>
      <p className="text-center">Coursera -  Deeplearning.ai</p>
</a>
  </div>
    </div>
    </div>


      <div className="col-md-3">
      <div className="card">
        <div className="card-body text-center">
          <a href="https://www.coursera.org/account/accomplishments/verify/Z2YPTND9RR99" target="_blank">
      <p><strong>COMPLETED</strong></p>
      <p><b>NLP with Tensorflow</b></p>
      <br/>
      <p className="text-center">Coursera - Deeplearning.ai</p>
</a>
  </div>
    </div>
    </div>

    </div>
    </div>
    </div>




</div>



    )
  }
}
