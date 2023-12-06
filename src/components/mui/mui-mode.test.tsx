
//earlier when we added wrapper attribute here only, we had to import from testing library
// import { render, screen } from "@testing-library/react";
import {render, screen} from '../../test-utils'
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../AppProviders";


describe ('MuiMode ', () => {
    test('renders text correctly', () => {
        //earlier we added wrapper attribute but after defining customRender function in test-utils.tsx
        //render (<MuiMode/>, {wrapper:AppProviders})
        //we can remove wrapper attribute
        render (<MuiMode/>)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent('dark mode')
    })
})