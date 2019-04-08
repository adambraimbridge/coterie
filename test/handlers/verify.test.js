/* global jest, expect */
process.env.SLACK_TOKEN = 'this-is-a-correct-token'
const verify = require('../../handlers/verify')
const { mockResponse, mockRequest } = require ('../response.mock') 

describe('Given a verification request', () => {
    const response = mockResponse()
    beforeEach(() => {
        jest.clearAllMocks()
    })
    test('it correctly fails', () => {
        const request = mockRequest({
            type: 'url_verification',
            token: 'this-is-an-incorrect-token',
        })
        verify(request, response)
        expect(response.status).toHaveBeenCalledWith(401)
        expect(response.send).toHaveBeenCalled()
    })
    test('it correctly approves', () => {
        const request = mockRequest({
            type: 'url_verification',
            token: process.env.SLACK_TOKEN,
            challenge: "challenge",
        })
        verify(request, response)
        expect(response.status).toHaveBeenCalledWith(200)
        expect(response.send).toHaveBeenCalledWith('challenge')
    })
})
