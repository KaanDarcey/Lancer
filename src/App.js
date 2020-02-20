import React, { useState } from 'react';
import './App.scss';
import Menu from './comps/Menu';
import TaskPage from './screens/TaskPage';
import ProjectPage from './screens/ProjectPage';
import ClientPage from './screens/ClientPage';

function App() {

  const [currentPage, setCurrentPage] = useState('');

  var page = <TaskPage />;

  if(currentPage === 'Dashboard'){
    // page = <DashboardPage />
  } else
  if(currentPage === 'Schedule'){
    // page = <SchedulePage />
  } else
  if(currentPage === 'Projects'){
    page = <ProjectPage />
  } else
  if(currentPage === 'TaskPage'){
    page = <TaskPage />
  } else
  if(currentPage === 'ClientPage'){
    page = <ClientPage />
  }

  return (
    <div className="App" style={{display:'flex', flexDirection:'row', height:'100vh', width:'100vw'}}>
      <Menu active={currentPage} setCurrentPage={setCurrentPage}/>
      {page}
    </div>
  );
}

export default App;
