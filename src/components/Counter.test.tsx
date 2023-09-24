import Counter from './Counter'
import {render, screen, act} from '@testing-library/react'
//import user-event library
import user from '@testing-library/user-event'

describe ('Counter component', () => {
    test('renders correctly', () => {
        render (<Counter />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toBeInTheDocument()
        
        const buttonElement = screen.getByRole('button', {
            name: 'Increment'
        })
        expect(buttonElement).toBeInTheDocument()
    })
    
    test('renders count of zero', ()=> {
        render (<Counter />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('0')

    })

    test('renders a count of 1 after clicking the increment button', async () => {
        //to create an instance of user event
        user.setup()
        render (<Counter/>)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        //since user event API are asynchronous use await
        //using act when state is changed 
        await act (async()=> user.click(incrementButton))
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('1')

    })

    test('renders count of 2 after clicking the increment button twice', async () => {
        //to create an instance of user event
        user.setup()
        render (<Counter/>)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        //since user event API are asynchronous use await
        await act (async()=> user.click(incrementButton))
        await act (async()=> user.click(incrementButton))
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('2')
    })

    test ('renders a count of 10 after clicking set button', async () => {
        //as we are dealing with user-event
        user.setup()
        render(<Counter/>)
        //set 10 as amount in amount input
        //role for input box with type number is "spinbutton" - not textbox
        const amountInput = screen.getByRole ('spinbutton')
        //for typing in an input box, user event of type is used
        await act (async()=>user.type(amountInput, '10')) 
        expect(amountInput).toHaveValue(10)

        const setButtonElement = screen.getByRole('button', {
            name: 'Set'
        })
        await act (async ()=> user.click(setButtonElement))
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('10')
    })

    test('elements are focussed in right order', async()=> {
        user.setup()
        render(<Counter/>)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        const amountInput = screen.getByRole('spinbutton')
        const setButton = screen.getByRole('button', {
            name: 'Set'
        })

        await act (async ()=> user.tab())
        expect(incrementButton).toHaveFocus()
        await act (async ()=> user.tab())
        expect(amountInput).toHaveFocus()
        await act (async ()=> user.tab())
        expect(setButton).toHaveFocus()
    })
})