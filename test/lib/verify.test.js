/* global jest, expect */
process.env.SLACK_TOKEN = 'this-is-a-correct-token'
const verify = require('../../lib/verify')

const mockRequest = data => ({ body: data })
const mockResponse = () => {
    const response = {}
    response.send = jest.fn().mockReturnValue(response)
    response.status = jest.fn().mockReturnValue(response)
    response.header = jest.fn().mockReturnValue(response)
    response.json = jest.fn().mockReturnValue(response)
    response.end = jest.fn().mockReturnValue(response)
    return response
}

describe('Given a verification request', () => {
    test('it correctly fails', () => {
        const request = mockRequest({
            type: 'url_verification',
            token: 'this-is-an-incorrect-token',
        })
        const response = mockResponse()
        expect(verify(request, response)).toBe(false)
        expect(response.status).toHaveBeenCalledWith(401)
        expect(response.send).toHaveBeenCalled()
    })
    test('it correctly approves', () => {
        const request = mockRequest({
            type: 'url_verification',
            token: process.env.SLACK_TOKEN,
            challenge: "challenge",
        })
        expect(verify(request)).toBe(true)
    })
})
