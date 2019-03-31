const verify = require("../lib/verify")

module.exports = (request, response) => {

    console.error("Slack token:",process.env.SLACK_TOKEN)
    console.error("Request token:",request.body.token)
    
    verify(request, response)
    response.status(200).send(request.body.challenge)
}