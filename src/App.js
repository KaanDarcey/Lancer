import React, { useState } from 'react';
import './App.scss';
import Menu from './comps/Menu';
import TaskPage from './screens/TaskPage';
import ProjectPage from './screens/ProjectPage';
import ClientPage from './screens/ClientPage';

import { BrowserRouter as Router, Route, Switch , NavLink} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App" style={{display:'flex', flexDirection:'row', height:'100vh', width:'100vw'}}>
      <Menu />
      <Switch>
          <Route path="/ProjectPage">
            <ProjectPage />
          </Route>
          <Route path="/ClientPage">
            <ClientPage />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
