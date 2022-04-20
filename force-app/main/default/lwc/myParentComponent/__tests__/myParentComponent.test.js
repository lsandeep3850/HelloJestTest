import {createElement} from 'lwc'

import MyParentComponent from 'c/myParentComponent'

const USER_RESULT={
    Name: 'Sandeep',
    Id:'1'
}

describe('c-my-parent-component',()=>{

beforeEach(()=>{
  const element= createElement('c-my-parent-component',{
      is:MyParentComponent
  })
       document.body.appendChild(element)
})
 test('Render Child component',()=>{
     const element=document.querySelector('c-my-parent-component')
     const childcomp=element.shadowRoot.querySelectorAll('c-my-child-component')
     expect(childcomp.length).toBe(1)
 })
 test('set user data property correctly',()=>{
    const element=document.querySelector('c-my-parent-component')
    const childcomp=element.shadowRoot.querySelector('c-my-child-component')
    expect(childcomp.userDetail.Name).toBe(USER_RESULT.Name)
})
})