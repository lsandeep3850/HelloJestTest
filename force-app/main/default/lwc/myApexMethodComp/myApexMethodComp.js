import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/accountController.getAccountList'
export default class MyApexMethodComp extends LightningElement {

    accounts
    error
    loadAccounts(){
        getAccountList().then(result=>{
         this.accounts=result;
         this.error=null;
         console.log(JSON.stringify(result));
        }).catch(error=>{
             this.error=error;
             this.account=null;
        })
    }
}