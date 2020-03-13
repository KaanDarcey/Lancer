import React from 'react';
import './BillingPage.scss';
import Header from '../../comps/HeaderBar';
import Upgrade from '../../comps/Upgrade';
import CreditForm from '../../comps/CreditForm';
import Stripe from '../../comps/Stripe';



function BillingPage(){

    var feat1 = ['- Add Four Clients', '- Create Two Projects', '- Access to Schedule'],
        feat2 = ['- Add Ten Clients', '- Create Four Projects', '- Access to Schedule'],
        feat3 = ['- Add UNLIMITED Clients', '- Create UNLIMITED Projects', '- Access to Schedule', '- Access to Analytics'];

    return( 
        <div className="BillingPage-container">
            <Header
            headerTitle="Billing"
            />
            <div className='BillingPage-content'>
                <Upgrade title='PRO-LANCER' price='$20' feat={feat3} popular='false' btn='false'/>
                <div className='BillingPage-form'>
                    {/* <div class='BillingPage-form-header-text'>
                        <h3 className='BillingPage-form-header'>Enter Your Credit Card Information</h3>
                        <p className='BillingPage-form-subhead'>Pro Lancer 1 Month</p>
                    </div> */}
                    {/* <CreditForm /> */}
                    <Stripe/>
                </div>
            </div>
        </div>
    )
  }

export default BillingPage;