import {createElement} from 'lwc'

import MyConditionalRendering from 'c/MyConditionalRendering'

describe('Conditionalrendering test suite',()=>{
   beforeEach(()=>{
       const element=createElement('c-my-conditional-rendering',{
           is:MyConditionalRendering
       })
       document.body.appendChild(element)
       console.log('Checked.....')

   })
   it('Password_Mask check',()=>{
       const element=document.querySelector('c-my-conditional-rendering')
       const passwordelement=element.shadowRoot.querySelector('.userInfo')
       expect(passwordelement.textContent).toBe('My Password is **********')

   })

   it('Password is unmasked',()=>{
       const element=document.querySelector('c-my-conditional-rendering')
       const inputcheck=element.shadowRoot.querySelector('lightning-input')
       inputcheck.checked=true
       inputcheck.dispatchEvent(new CustomEvent('change'))
       return Promise.resolve().then( () =>{
           const passwordelement=element.shadowRoot.querySelector('.userInfo')
           expect(passwordelement.textContent).toBe('My Password is SandeepL')
       })
   })

})




