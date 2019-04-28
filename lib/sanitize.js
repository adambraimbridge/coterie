/* global process */

/**
 * Verify and filter the network request from Slack
 *
 * @param {*} request An ExpressJS-compatible request object
 * @param {*} response An ExpressJS-compatible response object
 * @returns true if it passes verification; else send a 401 error response.
 */
module.exports = (request, response) => {
	if (!request.body || !request.body.token || request.body.token !== process.env.SLACK_TOKEN) {
		response
			.status(401)
			.header({ 'content-type': 'text/html', 'X-Slack-No-Retry': 1 })
			.send({ Error: 'Could not verify the source of the incoming request.' })
			.end()
		return false
	} else {
		return true
	}
}
