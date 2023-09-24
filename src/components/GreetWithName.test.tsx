import {render, screen } from '@testing-library/react'
import GreetWithName from './GreetWithName'


//we can group tests using describe

describe ('Greet', () => {
    test ('renders correctly', () => {
        render (<GreetWithName/>)
        const textElement = screen.getByText(/Hello/i)
        expect (textElement).toBeInTheDocument()
    })
    
    describe ('Nested', () => {
        test ('with name', ()=> {
            render (<GreetWithName name='Priya'/>)
            const textElement = screen.getByText('Hello Priya')
            expect (textElement).toBeInTheDocument()
        })
    })
    
})
