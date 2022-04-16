import {createElement} from 'lwc'
import FirstSampleComponent from 'c/FirstSampleComponent'  

describe('c-first-sample-component test suite',()=>{
    test('display first greeting',()=>{
        const element = createElement('c-first-sample-component',{
            is:FirstSampleComponent
        })
        document.body.appendChild(element)
        const firstdiv=element.shadowRoot.querySelector('div.first')
        expect(firstdiv.textContent).toBe('Hello, World!')
    })
    test('display second greeting', () => {
        const element = createElement('c-my-first-component', {
            is: FirstSampleComponent
        })
        document.body.appendChild(element)
        const secondDiv = element.shadowRoot.querySelector('div.second')
        expect(secondDiv.textContent).toBe('My, World!')
    })
})
