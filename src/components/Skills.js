import React, { Component } from 'react';
import angular2 from '../resources/images/icons/angular2.png';
import elm from '../resources/images/icons/elm.png';
import js from '../resources/images/icons/js.jpeg';
import java from '../resources/images/icons/java.png';
import scala from '../resources/images/icons/scala.png';
import python from '../resources/images/icons/python.png';
import cplusplus from '../resources/images/icons/cplusplus.png';
import react from '../resources/images/icons/react.png';
import redux from '../resources/images/icons/redux.png';
import springboot from '../resources/images/icons/springboot.png';
import docker from '../resources/images/icons/docker.png';
import kube from '../resources/images/icons/kube.png';
import kafka from '../resources/images/icons/kafka.png';
import spark from '../resources/images/icons/spark.png';
import jupyter from '../resources/images/icons/jupyter.png';
import mongodb from '../resources/images/icons/mongodb.png';
import redisdb from '../resources/images/icons/redisdb.png';
import postgresdb from '../resources/images/icons/postgresdb.png';
import play from '../resources/images/icons/play.png';
import node from '../resources/images/icons/node.png';
import npm from '../resources/images/icons/npm.png';
import bootstrap from '../resources/images/icons/bootstrap.png';
import reactnative from '../resources/images/icons/reactnative.jpg';
import ionic2 from '../resources/images/icons/ionic2.png';
import jenkins from '../resources/images/icons/jenkins.png';








export default class Skills extends Component {

  render(){
    return(
    <div className="skills">
    <div className="container">
    <div className="row">
    <div className="col-md-12  text-left">
    <div>
    <h5 >SKILLS</h5>
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
{/*-------languages----*/}
{/* row 1*/}
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
{/* row 2*/}
            <div className="row">

              <div className="col-xs-3  text-center">
                <img src={python} className="rounded"></img>
                  <p>Python</p>
                </div>

                <div className="col-xs-3  text-center">
                  <img src={cplusplus} className="rounded"></img>
                    <p>C++</p>
                </div>
                  <div className="col-xs-3  text-center"></div>
                    <div className="col-xs-3  text-center"></div>

                  </div>

    </div>
    <div className="tab-pane fade" id="nav-frameworks" role="tabpanel" aria-labelledby="nav-frameworks-tab">

      {/*-------frameworks----*/}

      {/* row 1*/}
<div className="row">
<div className="col-xs-3 text-center">
  <img src={angular2} className="rounded"></img>
  <p>Angular 2</p>
  </div>

  <div className="col-xs-3  text-center">
    <img src={react} className="rounded"></img>
    <p>React</p>
    </div>

<div className="col-xs-3 text-center">
  <img src={redux} className="rounded"></img>
  <p>Redux</p>
</div>

<div className="col-xs-3 text-center">
  <img src={springboot} className="rounded"></img>
  <p>Spring</p>
</div>
      </div>

      {/* row 2*/}
<div className="row">
<div className="col-xs-3 text-center">
  <img src={play} className="rounded"></img>
  <p>Play Framework</p>
  </div>

  <div className="col-xs-3  text-center">
    <img src={node} className="rounded"></img>
    <p>Node Js</p>
    </div>

<div className="col-xs-3 text-center">
  <img src={bootstrap} className="rounded"></img>
  <p>Bootstrap</p>
</div>

<div className="col-xs-3 text-center">
  <img src={reactnative} className="rounded"></img>
  <p>React Native</p>
</div>
      </div>

      {/* row 3*/}
<div className="row">
<div className="col-xs-3 text-center">
  <img src={ionic2} className="rounded"></img>
  <p>Ionic 2</p>
  </div>

  <div className="col-xs-3  text-center">
    </div>

<div className="col-xs-3 text-center">
</div>

<div className="col-xs-3 text-center">
</div>
      </div>


    </div>
    <div className="tab-pane fade" id="nav-tools" role="tabpanel" aria-labelledby="nav-tools-tab">

      {/*-------tools----*/}
      {/* row 1*/}
<div className="row">
<div className="col-xs-3 text-center">
  <img src={docker} className="rounded"></img>
  <p>Docker</p>
  </div>

  <div className="col-xs-3  text-center">
    <img src={kube} className="rounded"></img>
    <p>Kubernetes</p>


    </div>

<div className="col-xs-3 text-center">
  <img src={spark} className="rounded"></img>
  <p>Apache Spark</p>

</div>

<div className="col-xs-3 text-center">
  <img src={kafka} className="rounded"></img>
  <p>Apache Kafka</p>
</div>

      </div>

      {/* row 2*/}
<div className="row">
<div className="col-xs-3 text-center">
  <img src={jupyter} className="rounded"></img>
  <p>Jupyter</p>
  </div>

  <div className="col-xs-3  text-center">
    <img src={redisdb} className="rounded"></img>
    <p>Redis</p>
    </div>

<div className="col-xs-3 text-center">
  <img src={mongodb} className="rounded"></img>
  <p>Mongo DB</p>
</div>

<div className="col-xs-3 text-center">
  <img src={postgresdb} className="rounded"></img>
  <p>PostgreSQL</p>
</div>

      </div>

      {/* row 3*/}
<div className="row">
<div className="col-xs-3 text-center">
  <img src={npm} className="rounded"></img>
  <p>NPM</p>
  </div>

  <div className="col-xs-3  text-center">
    <img src={jenkins} className="rounded"></img>
    <p>Jenkins</p>
    </div>

<div className="col-xs-3 text-center">

</div>

<div className="col-xs-3 text-center">
</div>

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
