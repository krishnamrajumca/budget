import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { createBrowserHistory } from "history";



import {config} from './utils/routerConfig'
const customHistory = createBrowserHistory();

function App() {
  console.log(config);
  const MainConfig = config.slice(0,3)
  return (
    <Router history={customHistory}>
      <CssBaseline />
        <Container className="vh100">
        
          <div>
            <Switch>
              {
                MainConfig.map(con=>{
                  const Component = con.component;
                  return(
                    <Route exact={con.exact} path={con.path} key={con.id}>
                      <Component />
                  </Route>
                  )
                })
              }
              
            </Switch>
          </div>
      </Container>
    </Router>
  );
}

export default App;
