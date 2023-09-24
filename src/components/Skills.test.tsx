import Skills from './Skills'
import {render, screen, logRoles} from '@testing-library/react'

describe ('Skills component', () => {
    const skills = ['HTML', 'CSS', 'javascript', 'React']
    test ('renders correctly', () => {
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole ('list')
        expect(listElement).toBeInTheDocument()
    })
    
    test('renders list of skills', () => {
        render(<Skills skills={skills}/>)
        const listItemElement = screen.getAllByRole ('listitem')
        expect(listItemElement).toHaveLength(skills.length)
    })

    test('renders button', () => {
        render(<Skills skills={skills}/>)
        const loginButtonElement = screen.getByRole ('button', {
            name: 'Login'
        })
        expect(loginButtonElement).toBeInTheDocument()
    })

    //using queryByRole for element not present
    test ('start learning button is not rendered', () => {
        render(<Skills skills={skills}/>)
        const learningButtonElement = screen.queryByRole ('button', {
            name: 'Start Learning'
        })
        //we can use not to be in the document also
        expect(learningButtonElement).not.toBeInTheDocument()
    })

    //to test if element was not there before, later it emerged
    //findBy => returns promise which resolves when element is found
    test ('start learning button eventually appears', async ()=> {
        const view = render(<Skills skills={skills}/>)
        // logRoles(view.container)
        // screen.debug()
        const startLearningButtonElement = await screen.findByRole ('button', {
            name: 'Start Learning'
        },
        //specifying third argument for findBy
        {
            timeout: 2000 
        })
        // logRoles(view.container)
        // screen.debug()
        expect(startLearningButtonElement).toBeInTheDocument()
    })
})