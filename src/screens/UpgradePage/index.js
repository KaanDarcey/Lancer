import React from 'react';
import './UpgradePage.scss';
import Header from '../../comps/HeaderBar';
import Upgrade from '../../comps/Upgrade';



function UpgradePage(){

    var feat1 = ['- Add Four Clients', '- Create Two Projects', '- Access to Schedule'],
        feat2 = ['- Add Ten Clients', '- Create Four Projects', '- Access to Schedule'],
        feat3 = ['- Add UNLIMITED Clients', '- Create UNLIMITED Projects', '- Access to Schedule', '- Access to Analytics'];

    return( 
        <div className="UpgradePage-container">
            <Header
            headerTitle="Upgrade"
            />
            <div className='UpgradePage-content'>
                <Upgrade title='FREE-LANCER' price='$0' feat={feat1} popular='false'/>
                <Upgrade title='LANCER' price='$5' feat={feat2} popular='true'/>
                <Upgrade title='PRO-LANCER' price='$20' feat={feat3} popular='false'/>
            </div>
        </div>
    )
  }

export default UpgradePage;