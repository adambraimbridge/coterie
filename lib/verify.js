/**
 * Verify that the incoming request legitimately comes from Slack
 */

module.exports = (request, response) => {
    if (!request.body || !request.body.token || request.body.token !== process.env.SLACK_TOKEN) {
        return response.status(500).send("Could not verify the source of the incoming request.")
    }
    else {
        return Promise.resolve()
    }

}