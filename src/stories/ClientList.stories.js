import React from 'react';
import ClientList from '../comps/ClientList';
import Header from '../comps/HeaderBar';
import Button from '../comps/Button';
import Menu from '../comps/Menu';
import Search from '../comps/Search';

import {FaSortAmountUp, FaEdit, FaSearch} from 'react-icons/fa'

var icon = <FaEdit/>;

export default {
  title: 'ClientList',
  component: ClientList,
}

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

export const DefaultClientList = () =>{
  return <ClientList/>
}

export const ClientListPage = () => {
  return <div className="" style={{display:"flex", flexDirection:"row"}}>
    <Menu style={{display:"flex", flex:1}}/>
   <div style={{display:"flex", flex:2, flexDirection:'column'}}>
   <Header
      headerTitle="Clients"
      iconTitle="Sort"
      icon={<FaSortAmountUp/>}
      btn={<Button
        title="New Client"/>}
    />
    <div style={{display:"flex", flexDirection:"row", padding:"1em"}}>
      <div style={{display:"flex", flexDirection:"row", flex:2}}>
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
  </div>
}