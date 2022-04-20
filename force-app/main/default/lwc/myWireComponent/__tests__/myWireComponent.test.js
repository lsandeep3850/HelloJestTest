import { createElement } from 'lwc'

import MyWireComponent from 'c/myWireComponent'

//import { registerApexTestWireAdapter} from '@salesforce/sfdx-lwc-jest';
import getContactLists from '@salesforce/apex/ContactController.getContactLists';


const mockGetContactLists = require('./data/getContactLists.json');
const mockGetContactListsNoRecords= require('./data/getContactListsNoRecords.json')

describe('my-wire-component testing',()=>{
    beforeEach(()=>{
        const element=createElement('c-my-wire-component',{
            is:MyWireComponent
        })
        document.body.appendChild(element)
    })

    afterEach(()=>{
      jest.clearAllMocks()
    })

    test('Rendering all records',()=>{
        const element=document.querySelector('c-my-wire-component');
        getContactLists.emit(mockGetContactLists);
        return Promise.resolve().then(()=>{
            const pElem=element.shadowRoot.querySelectorAll('p')
            expect(pElem.length).toBe(mockGetContactLists.length)
            expect(pElem[0].textContent).toBe(mockGetContactLists[0].Name)
        })
    })
    test('Rendering null records',()=>{
        const element=document.querySelector('c-my-wire-component');
        getContactLists.emit(mockGetContactListsNoRecords);
        return Promise.resolve().then(()=>{
            const pElem=element.shadowRoot.querySelectorAll('p')
            expect(pElem.length).toBe(mockGetContactListsNoRecords.length)
           // expect(pElem.length).toBe(9)
        })
    })
    test('Error scenario records',()=>{
        const element=document.querySelector('c-my-wire-component');
        getContactLists.error();
        return Promise.resolve().then(()=>{
            const pElem=element.shadowRoot.querySelector('.error')
           // console.log(pElem);
            expect(pElem.textContent).not.toBeNull()
           
        })
    })

})