const verify = require("../lib/verify")

module.exports = (request, response) => {
    verify(request, response)
    response.status(200).send(request.body.challenge)
}