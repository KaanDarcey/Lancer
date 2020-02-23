import React from 'react';
import './ClientPage.scss';

import Header from '../../comps/HeaderBar';
import Button from '../../comps/Button';
import ClientList from '../../comps/ClientList';
import {FaSortAmountUp, FaEdit, FaSearch} from 'react-icons/fa'
import Search from '../../comps/Search';

function ClientPage() {

    var icon = <FaEdit/>;

    var ClientItems = [
        {
          clientName: "Alex Rack",
          company: "OW Solutions",
          phone: "778-123-4567",
          email:"client@email.com",
          totalProjects:"4",
          act: icon,
        },
        {
          clientName: "Jane Doe",
          company: "Reva Solutions",
          phone: "778-123-4567",
          email:"client@email.com",
          totalProjects:"1",
          act: icon,
        }
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

    return (
        <div className='ClientPage-container '>
            <Header
                headerTitle="Clients"
                iconTitle="Sort"
                icon={<FaSortAmountUp/>}
                btn={<Button
                title="New Client"/>}
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
        </div>
    )
  }

  export default ClientPage;