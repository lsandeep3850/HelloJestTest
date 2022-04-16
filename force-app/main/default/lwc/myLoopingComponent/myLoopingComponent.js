import { LightningElement } from 'lwc';

export default class MyLoopingComponent extends LightningElement {

    userList = [
        {
         id : '1',
         Name: 'Sandeep'
        },
        {
            id :'2',
            Name: 'John'

        },
        {
            id :'3',
            Name: 'Mike'
        }
    ];
}