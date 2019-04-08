/* global process */
process.env.SLACK_TOKEN = 'this-is-a-correct-token'
const verify = require('../../lib/verify')
const { mockResponse, mockRequest } = require('../response.mock')

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
			challenge: 'challenge',
		})
		expect(verify(request)).toBe(true)
	})
})
