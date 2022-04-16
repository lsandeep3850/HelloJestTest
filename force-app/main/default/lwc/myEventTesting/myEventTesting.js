import { LightningElement } from 'lwc';

export default class MyEventTesting extends LightningElement {

    greeting = 'World!';

    handleChange(event) {
        this.greeting = event.target.value;
    }
    datachange(){
        this.greeting='Button Clicked'
    }
}