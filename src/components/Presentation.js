import React, { Component } from 'react';
import '../glitch.css';

export default class Presentation extends Component {



  render() {
    return(
      <div>
      <div className="presentation">
        <div className="jumbotron  ">
          <div className="container vertical-center ">
            <h3 className="display-4">
              <div className="glitch" data-text="I'M FRAN">I'M FRAN</div>
              </h3>
            <p className="lead text-center">

              <a href="" className="typewrite" data-period="2000"
                 data-type='[ "Hi, Im Franco.", "Im Sr. Data Engineer.","& Sr. Software Developer", "I Love Coffee."]'>
                <span className="wrap"></span>
              </a>
            </p>

          </div>
            </div>

</div>
</div>
    )
  }
}
