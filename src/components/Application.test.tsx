import Application from './Application'
import {render, screen} from '@testing-library/react'

describe ('Application', ()=> {
    test('component renders correctly', ()=> {
        render (<Application/>)

        const pageHeading = screen.getByRole('heading', {
            level: 1
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading = screen.getByRole('heading', {
            //for heading there is level from 1 to 6 
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument()

        //use getByText mostly for span, para, div
        const paraElement = screen.getByText('All fields are mandatory')
        expect(paraElement).toBeInTheDocument()

        const imgElement = screen.getByAltText('a person with a laptop')
        expect(imgElement).toBeInTheDocument()

        const spanElement = screen.getByTitle('close')
        expect(spanElement).toBeInTheDocument()

        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()

        //1. input by default have role of textbox
        // 1. const nameElement = screen.getByRole('textbox')
        // 1. expect(nameElement).toBeInTheDocument()

        //when getByRole returns multiple objects with same role
        //second argument is option object 
        const nameElement = screen.getByRole('textbox', {
            //value will be accessible value like label etc
            name: "Name"
        })
        expect(nameElement).toBeInTheDocument()

        //using one more test for "Name" label
        //if Name as label is used for two elements
        //we can use selector in option object 
        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        })
        expect(nameElement2).toBeInTheDocument()

        //can use placeholder Text also 
        const nameElement3 = screen.getByPlaceholderText('FullName')
        expect(nameElement3).toBeInTheDocument()

        //using displayValue for finding element
        const nameElement4 = screen.getByDisplayValue('Priya')
        expect(nameElement4).toBeInTheDocument()

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(bioElement).toBeInTheDocument()

        //select by default have role of combobox
        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()

        //checkbox has role of checkbox
        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        //getByLabelText can also work if element is wrapped around 
        //label
        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument()
        //button has role of button
        const submitElement = screen.getByRole('button')
        expect(submitElement).toBeInTheDocument()
    })
    
})