import axios from 'axios'
import {reqGetCount} from '../actions'

jest.mock('axios')

describe('side effects', () => {
    it('can retrieve counts from backend', async () => {
        axios.get.mockResolvedValue({data: {currentCount: 132}})

        const dispatch = jest.fn()
        await reqGetCount()(dispatch)

        const getCalls = axios.get.mock.calls
        const dispatchCalls = dispatch.mock.calls
        expect(getCalls.length).toEqual(1)
        expect(getCalls[0][0]).toEqual('/api/count')
        expect(dispatchCalls.length).toEqual(1)
        expect(dispatchCalls[0][0]).toEqual({type: 'SET_COUNT', payload: 132})
    })
})