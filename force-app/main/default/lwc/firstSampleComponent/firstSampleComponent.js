import { LightningElement } from 'lwc';

export default class FirstSampleComponent extends LightningElement {

    message;
    messageupdate(){
        this.message="World";
    }

}