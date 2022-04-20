import {createElement} from 'lwc'

import MyApexMethodComp from 'c/myApexMethodComp'

import getAccountList from '@salesforce/apex/accountController.getAccountList'


const mockAccountResult=require('./data/mockAccountData.json');
const mockAccountError= require('./data/mockAccountError.json');

//jest.mock(module,factory,options)
jest.mock('@salesforce/apex/accountController.getAccountList',()=>({
default:jest.fn()
}),
{virtual:true}
)

describe('testing apex imperative method',()=>{
    beforeEach(()=>{
        const element=createElement('c-my-apex-menthod-comp',{
            is:MyApexMethodComp        
        })
        document.body.appendChild(element)
    })

    test('Renders account data',()=>{
        getAccountList.mockResolvedValue(mockAccountResult)
        const element=document.querySelector('c-my-apex-menthod-comp')
        const buttonElement = element.shadowRoot.querySelector('lightning-button')
        buttonElement.click()

        return new Promise(setImmediate).then(()=>{
            const details=element.shadowRoot.querySelectorAll('p.accountName')
            expect(details.length).toBe(mockAccountResult.length)
            expect(details[0].textContent).toBe(mockAccountResult[0].Name);
            expect(details[1].textContent).toBe(mockAccountResult[1].Name);
        })
    })

    test('Renders account error',()=>{
        getAccountList.mockRejectedValue(mockAccountError)
        const element=document.querySelector('c-my-apex-menthod-comp')
        const buttonElement = element.shadowRoot.querySelector('lightning-button')
        buttonElement.click()

        return new Promise(setImmediate).then(()=>{
            const details=element.shadowRoot.querySelectorAll('.error')
            expect(details.length).not.toBeNull
            
        })


    })
})