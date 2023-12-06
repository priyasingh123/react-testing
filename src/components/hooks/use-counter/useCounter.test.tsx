import {renderHook, act} from '../../../test-utils'
import { useCounter } from './useCounter'

describe('UseCounter Hook', () => {
    test('should render initial count',() => {
        const {result} = renderHook (useCounter)
        //make assertion
        expect(result.current.count).toBe(0)
    })
    
    test('should accept and render the same initial count', () => {
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        }
        )
        expect(result.current.count).toBe(10)
    })
    
    test('increment function increases count by 1', () => {
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        })
        act (() => result.current.increment())
        expect(result.current.count).toBe(11)

    })

    test('decrement function decreases count by 1', () => {
        const {result} = renderHook(useCounter)
        act (() => result.current.decrement())
        expect(result.current.count).toBe(-1)

    })
})