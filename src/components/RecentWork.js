import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
export default class RecentWork extends Component {
ComponentWillMount(){

}
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

    <div className="calendar"></div>
</div>
</div>
    </div>
<ScriptTag isHydrating={false} type="text/javascript">
  GitHubCalendar(".calendar", "francotesei");
</ScriptTag>
    </div>
    )
  }
}
