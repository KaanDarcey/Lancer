import React, { useState} from 'react';
import './App.scss';
import Menu from './comps/Menu';
import TaskPage from './screens/TaskPage';
import ProjectPage from './screens/ProjectPage';
import ClientPage from './screens/ClientPage';
import SchedulePage from './screens/SchedulePage';
import AddTaskPage from './screens/AddTaskPage';
import ClientOverviewPage from './screens/ClientOverviewPage';
import Components from './screens/Components';
import UpgradePage from './screens/UpgradePage';
import BillingPage from './screens/BillingPage';
import DashboardPage from './screens/DashboardPage';
import AnalyticsPage from './screens/DashboardPage/AnalyticsPage';

import { BrowserRouter as Router, Route, Switch , NavLink} from 'react-router-dom';
import AdvancedAnalyticsPage from './screens/DashboardPage/AdvancedAnalyticsPage';




function App() {

  return (
    <Router>
    <div className="App" style={{display:'flex', flexDirection:'row', height:'100vh', width:'100vw'}}>
      <Menu />
      <Switch>
      <Route path="/DashboardPage">
            <DashboardPage />
          </Route>
          <Route path="/ProjectPage">
            <ProjectPage />
          </Route>
          <Route path="/ClientPage">
            <ClientPage />
          </Route>
          <Route path="/SchedulePage">
            <SchedulePage />
          </Route>
          <Route path="/ClientOverviewPage">
            <ClientOverviewPage />
          </Route>
          <Route path="/TaskPage">
            <TaskPage />
          </Route>
          <Route path="/AddTaskPage">
            <AddTaskPage />
          </Route>
          <Route path='/Components'>
            <Components/>
          </Route>
          <Route path="/UpgradePage">
            <UpgradePage />
          </Route>
          <Route path="/BillingPage">
            <BillingPage />
          </Route>
          <Route path="/AnalyticsPage">
            <AnalyticsPage />
          </Route>
          <Route path="/AdvancedAnalyticsPage">
            <AdvancedAnalyticsPage />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
