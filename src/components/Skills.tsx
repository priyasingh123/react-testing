import {SkillProps} from './SkillProps'
import {useState, useEffect } from 'react'

const Skills = (props: SkillProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const {skills} = props

    useEffect (() => {
        setTimeout(() => {
            setIsLoggedIn(true)
            //here is timeout is more than 1000 ms
            //findBy will fail
        }, 1001)
    },[])
    return (
        <>
        <ul>
            {skills.map((skill: string) => {
                return <li key={skill}>
                    {skill}
                </li>
            })}
        </ul>
        {isLoggedIn ? (
            <button>Start Learning</button>
        ): (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
        ) }
    </>
    )
}

export default Skills