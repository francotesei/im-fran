import React, { Component } from 'react';

export default class Skills extends Component {

  render(){
    return(
    <div className="skills">
    <div className="container">
    <div className="row">
    <div className="col-md-12  text-left">
    <div>
    <h5 >Skills</h5>
    </div>
    </div>
  </div>

<div className="row">
<div className="col-md-2"></div>
<div className="col-md-10">




  <div className="container">
    <ul className="nav nav-pills" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="pill" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#menu1">Menu 1</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#menu2">Menu 2</a>
      </li>
    </ul>

    <div className="tab-content">
      <div id="home" className="container tab-pane active"><br/>
        <h3>HOME</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div id="menu1" className="container tab-pane fade"><br/>
        <h3>Menu 1</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div id="menu2" className="container tab-pane fade"><br/>
        <h3>Menu 2</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
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
