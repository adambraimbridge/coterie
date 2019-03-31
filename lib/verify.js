/**
 * Verify that the incoming request legitimately comes from Slack
 */

module.exports = (request, response) => {

    console.error("Request body:",request.body)
    console.error("Slack token:",process.env.SLACK_TOKEN)
    console.error("Request token:",request.body.token)

    if (!request.body || !request.body.token || request.body.token !== process.env.SLACK_TOKEN) {
        response.status(500).send("Could not verify the source of the incoming request.")
    }
    else {
        return Promise.resolve()
    }
}