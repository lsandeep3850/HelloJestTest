import {createElement} from 'lwc'
import MyEventTesting from 'c/myEventTesting'

describe('c-my-event-testing suite', ()=>{
    beforeEach(()=>{
        const element = createElement('c-my-event-testing', {
            is: MyEventTesting
        })
        document.body.appendChild(element)
    })
    test('Testdefault greet value should be Hello, World!', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const text = element.shadowRoot.querySelector('p')
        expect(text.textContent).toBe('Hello, World!!')
    })
    it('Test default greet value should not be Hello, Sandeep', () => {
        const element = document.querySelector('c-my-event-testing')
        const text = element.shadowRoot.querySelector('p')
        expect(text.textContent).not.toBe('Hello, Sandeep!')
    })

    test('test_input change event value', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const inputElement = element.shadowRoot.querySelector('lightning-input')
        inputElement.value='Salesforce'
        inputElement.dispatchEvent(new CustomEvent('change'))
        const text = element.shadowRoot.querySelector('p');
        return Promise.resolve().then(()=>{
            expect(text.textContent).toBe('Hello, Salesforce!')
        })
    })
    //
    /*
    test('test_input change event value', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const inputElement = element.shadowRoot.querySelector('lightning-button')
        inputElement.ariaSelected=true
        inputElement.dispatchEvent(new CustomEvent('click'))
        const text = element.shadowRoot.querySelector('p');
        return Promise.resolve().then(()=>{
            expect(text.textContent).toBe('Hello, Button Clicked')
        })
    })
    */
   //
})