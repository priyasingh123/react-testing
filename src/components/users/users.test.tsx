import { server } from '../../mocks/server'
import {render, screen} from '../../test-utils'
import {Users} from "./users"
import {rest} from 'msw'

describe ('Users Component', () => {
    test('renders correctly', () => {
        render (<Users/>)
        const textElement = screen.getByRole('heading')
        expect(textElement).toBeInTheDocument()
    })

    test('renders a list of users', async()=>{
        render (<Users/>)
        // find is used as data fetching is async
        const users = await screen.findAllByRole('listitem')
        expect(users).toHaveLength(3)
    })

    test('renders error', async()=>{
        //we have written this as we want to test error scenario
        //it will apply to only this test
        server.use(
            rest.get(
                'https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
                    return res(ctx.status(500))
                }
            )
        )
        render (<Users/>)
        const errorText = await screen.findByText('Error fetching users')
        expect(errorText).toBeInTheDocument()
    })
})