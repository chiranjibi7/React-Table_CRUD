import React from "react";
import {DrawerForm, TableData, UserProfiles} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App=()=> {

  return(
    <Router>
      <Switch>
        <Route path="/" exact >
          <DrawerForm />
          <TableData />
        </Route>
        <Route path="/userprofiles"><UserProfiles/></Route>
      </Switch>
    </Router>
  );
  
  }

  export default App;