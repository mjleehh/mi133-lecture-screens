import {setCount} from "../actions"


describe('actions', () => {
    describe('set count action', () => {
        it('has an action ID', () => {
            const action = setCount(4)

            expect(action).toEqual({
                type: 'SET_COUNT',
                payload: 4
            })
        })
    })
})
