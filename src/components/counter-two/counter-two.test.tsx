import { CounterTwo } from "./counter-two"
import {render, screen} from '../../test-utils'
import user from '@testing-library/user-event'

describe('CounterTwo', () => {
    test('renders correctly', () => {
        render (<CounterTwo count={0}/>)
        const textElement = screen.getByText('Counter Two')
        expect(textElement).toBeInTheDocument()
    })

    //here we are testing if hanlders are called
    // not implementation of these handlers
    test('handlers are called', async() => {
        user.setup()
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render (<CounterTwo count={0}
            handleDecrement={decrementHandler}
            handleIncrement={incrementHandler}
        />)
        const incrementButton = screen.getByRole('button', {name: 'Increment'})
        const decrementButton = screen.getByRole('button', {name: 'Decrement'})
        //all user events are asynchronous 
        //so use async 
        await user.click(incrementButton)
        expect(incrementHandler).toHaveBeenCalledTimes(1)
        await user.click(decrementButton)
        expect(decrementHandler).toHaveBeenCalledTimes(1)

    })
})