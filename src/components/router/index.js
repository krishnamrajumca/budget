import React from "react";
import Dashboard from "../dashboard";
import Items from "../items";
import {
  Switch,
  Route,
  
} from "react-router-dom";

const RouteConfig = ()=> {
  return (
       

        <Switch>
          <Route path="/dashboard/">
            <Dashboard/>
          </Route>
          <Route path="/dashboard/items">
            <Items/>
          </Route>
        </Switch>
  );
}

export default RouteConfig