import reducer from '../reducer'
import {incrementCount} from '../actions'

describe('the app logic', () => {

    it('can increment the count', () => {
        const action = incrementCount()
        const state = {count: 44}

        const newState = reducer(state, action)

        expect(newState).toHaveProperty('count')
        expect(newState.count).toEqual(45)
    })

    it('ignores unknown actions', () => {
        const action = {type: 'HERE_BE_DRAGONS'}
        const state = {count: 33}

        const newState = reducer(state, action)

        expect(newState).toBe(state)
    })
})