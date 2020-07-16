import React from "react";

import {
  Switch,
  Route,
  
} from "react-router-dom";
import {config} from '../utils/routerConfig'
const RouteConfig = ()=> {
  const route = config.slice(3);
  return (
       <Switch>
          {
            route.map(r=>{
              const Component = r.component
              return(
                <Route exact={r.exact} path={r.path} key={r.id}>
                  <Component/>
                </Route>
              )
            })
          }
        </Switch>
  );
}

export default RouteConfig