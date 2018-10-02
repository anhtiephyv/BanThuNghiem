import React, { Component } from 'react';
import HeaderDesktop from './headerDesktop';
import routers from './../routers';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
class Containner extends Component {
  showRouter = (routers) => {
    var result = null;
    result = routers.map((route, index) => {
      return (
        <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
      )
    });
    return (
      <HashRouter>
        <Switch>{result}</Switch>
      </HashRouter>
    )
  }
  render() {
    return (
      <div>
        {/* PAGE CONTAINER*/}
        <div className="page-container">
          <div>
            {/* Header trên nền máy tính */}
            <HeaderDesktop />
          </div>
          {/* end header trên nền máy tính */}
          {/* Router */}
          {this.showRouter(routers)}
          {/* end router */}
          {/* END PAGE CONTAINER*/}
          {/* Footer */}
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
              </div>
            </div>
          </div>
          {/* end footer */}
        </div>

      </div>
    );
  }
}

export default Containner;
