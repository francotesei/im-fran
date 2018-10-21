import React, { Component } from 'react';
import angular2 from '../resources/images/icons/angular2.png';
import elm from '../resources/images/icons/elm.png';
import js from '../resources/images/icons/js.jpeg';
import java from '../resources/images/icons/java.png';
import scala from '../resources/images/icons/scala.png';
import python from '../resources/images/icons/python.png';

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
  <nav>
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <a className="nav-item nav-link active" id="nav-languages-tab" data-toggle="tab" href="#nav-languages" role="tab" aria-controls="nav-languages" aria-selected="true">
        Programming Languages</a>
      <a className="nav-item nav-link" id="nav-frameworks-tab" data-toggle="tab" href="#nav-frameworks" role="tab" aria-controls="nav-frameworks" aria-selected="false">
        Frameworks & Libraries</a>
      <a className="nav-item nav-link" id="nav-tools-tab" data-toggle="tab" href="#nav-tools" role="tab" aria-controls="nav-tools" aria-selected="false">
        Tools</a>
    </div>
  </nav>
  <div className="tab-content" id="nav-tabContent">
    <div className="tab-pane fade show active" id="nav-languages" role="tabpanel" aria-labelledby="nav-languages-tab">

      <div className="row">

        <div className="col-xs-3  text-center">
          <img src={js} className="rounded"></img>
            <p>Javascript</p>
          </div>


        <div className="col-xs-3  text-center">
          <img src={elm} className="rounded"></img>
          <p>Elm</p>
          </div>

          <div className="col-xs-3  text-center">
            <img src={java} className="rounded"></img>
            <p>Java</p>
            </div>

            <div className="col-xs-3  text-center">
              <img src={scala} className="rounded" style={{width: "12%"}}></img>
              <p>Scala</p>
              </div>
            </div>

            <div className="row">

              <div className="col-xs-3  text-center">
                <img src={python} className="rounded"></img>
                  <p>Python</p>
                </div>

                <div className="col-xs-3  text-center"></div>
                  <div className="col-xs-3  text-center"></div>
                    <div className="col-xs-3  text-center"></div>

                  </div>

    </div>
    <div className="tab-pane fade" id="nav-frameworks" role="tabpanel" aria-labelledby="nav-frameworks-tab">

<div className="row">
<div className="col-xs-3 text-center">
  <img src={angular2} className="rounded"></img>
  <p>Angular 2</p>
  </div>
  <div className="col-xs-3  text-center">
    <img src={elm} className="rounded"></img>
    <p>Elm</p>
    </div>
<div className="col-xs-3"></div>
<div className="col-xs-3"></div>
      </div>

    </div>
    <div className="tab-pane fade" id="nav-tools" role="tabpanel" aria-labelledby="nav-tools-tab">
      tools
    </div>
  </div>

</div>
</div>

    </div>
    </div>
    )
  }
}
