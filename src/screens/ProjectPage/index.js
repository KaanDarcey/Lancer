import React from 'react';
import './ProjectPage.scss';

import ProjectList from '../../comps/ProjectList';
import Header from '../../comps/HeaderBar';
import Button from '../../comps/Button';
import {FaSortAmountUp, FaSearch} from 'react-icons/fa'
import Search from '../../comps/Search';
import PopUp from '../../comps/PopUp';

function ProjectPage(){
    return (
        <div className='ProjectPage-container'>
            <Header
                headerTitle="Projects"
                iconTitle="Sort"
                icon={<FaSortAmountUp/>}
                btn={<Button
                title="Create Project"
                />}
            />
            <div className='ProjectPage-search'>
                <Search
                icon={<FaSearch/>}
                />
            </div>
            <ProjectList />
        </div>
    )
  }

  export default ProjectPage;