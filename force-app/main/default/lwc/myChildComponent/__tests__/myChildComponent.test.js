import {createElement} from 'lwc'

import MyChildComponent from 'c/myChildComponent'

const USER_DATA={
    Name: 'Sandeep',
    Id:'1'
}

const MESSAGE='No User data Available.'
describe('c-my-child-component',()=>{

 test('Render Name based on Public Property',()=>{
     const element=createElement('c-my-child-component',{
         is:MyChildComponent
     })
     element.userDetail=USER_DATA
     document.body.appendChild(element)
     const divelement=element.shadowRoot.querySelector('.userName')
     expect(divelement.textContent).toBe(USER_DATA.Name)
 })
 test('No Data render template',()=>{
    const element=createElement('c-my-child-component',{
        is:MyChildComponent
    })
    document.body.appendChild(element)
    const divelement=element.shadowRoot.querySelector('p')
    expect(divelement.textContent).toBe(MESSAGE)
})
})