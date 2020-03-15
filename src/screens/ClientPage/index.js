import React, {useState} from 'react';
import './ClientPage.scss';

import Header from '../../comps/HeaderBar';
import Button from '../../comps/Button';
import ClientList from '../../comps/ClientList';
import {FaSortAmountUp, FaEdit, FaSearch, FaRegUserCircle} from 'react-icons/fa'
import Search from '../../comps/Search';

import PopUp from '../../comps/PopUp';

function ClientPage() {

    var icon = <FaEdit/>;
    var clientImage = <FaRegUserCircle/>

    var ClientItems = [
        {
          clientImage: clientImage,
          clientName: "David So",
          company: "Reva Solutions",
          phone: "778-123-4567",
          email:"client@email.com",
          totalProjects:"1",
          act: icon,
        },
        {
          clientImage: clientImage,
          clientName: "Paul Tan",
          company: "OW Solutions",
          phone: "778-123-4567",
          email:"client@email.com",
          totalProjects:"4",
          act: icon,
        },
        {
          clientImage: clientImage,
          clientName: "Mike Change",
          company: "Google",
          phone: "778-123-4567",
          email:"client@email.com",
          totalProjects:"2",
          act: icon,
        },
        {
          clientImage: clientImage,
          clientName: "Kevin Mavas",
          company: "Amazon",
          phone: "778-123-4567",
          email:"client@email.com",
          totalProjects:"8",
          act: icon,
        },
        {
          clientImage: clientImage,
          clientName: "Jake Paul",
          company: "Grammarly",
          phone: "778-123-4567",
          email:"client@email.com",
          totalProjects:"4",
          act: icon,
        },        
      ];
      
      var ClientTitles = [
        {
          clientName: "Client Name",
          company: "Company",
          phone: "Phone",
          email:"Email",
          totalProjects:"Total Projects",
          act: "Edit",
        },
      ];

      //pop up

      const [showPop, setShowPop] = useState(false);

      var pop = null;

      if(showPop === true){
        pop = <PopUp caption='Add Client' />;
      } else {
        pop = null;
      }

    return (
        <div className='ClientPage-container '>
            <Header
                headerTitle="Clients"
                iconTitle="Sort"
                icon={<FaSortAmountUp/>}
                btn={<Button
                title="New Client"
                onClick = {()=>{setShowPop(true)}}
                />}
            />
            <div className='ClientPage-search'>
                <div className='ClientPage-btn'>
                <Button title="Current"/>
                <Button title="Past"/>
                </div>
                <Search
                icon={<FaSearch/>}
                />
            </div>
        
            <ClientList
            titles={ClientTitles}
            items={ClientItems}
            />
            {pop}
        </div>
    )
  }

  export default ClientPage;