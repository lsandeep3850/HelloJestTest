import {createElement} from 'lwc'

import MyLoopingComponent from 'c/myLoopingComponent'
const expected= [
    'Sandeep',
    'John',
    'Mike'
]
describe('c-my-looping-component test suite',()=>{

 beforeEach(()=>{
     const element=createElement('c-my-looping-component',{
         is:MyLoopingComponent
     })
     document.body.appendChild(element)
 })

 test('check user list length',()=>{
     const element=document.querySelector('c-my-looping-component')
     const userdetails=element.shadowRoot.querySelectorAll('.forEachList>li')
     expect(userdetails.length).toBe(3)
 })
 test('check user list Order',()=>{
    const element=document.querySelector('c-my-looping-component')
    const userdetails=Array.from(element.shadowRoot.querySelectorAll('.forEachList>li'))
    const userList=userdetails.map(li=>li.textContent)

    expect(userList.length).toBe(3)
    expect(userList).toEqual(expected)
})

test('Displays First and Last text in iterator ',() => {
    const element=document.querySelector('c-my-looping-component')
    const firstdiv=element.shadowRoot.querySelector('.iteratorList>li:first-child>div:first-child')
    expect(firstdiv.textContent).toBe('Start of List')
    const lastdiv=element.shadowRoot.querySelector('.iteratorList>li:last-child>div:last-child')
    expect(lastdiv.textContent).toBe('End of List')

})


})