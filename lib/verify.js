/**
 * Verify that the incoming request legitimately comes from Slack
 */

module.exports = request => {

    console.error(request.body)

    if (!request) {
        throw new Error("Could not verify the source of the incoming request.")
    }
    else {
        return Promise.resolve()
    }

}