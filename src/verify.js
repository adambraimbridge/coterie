const verify = require("../lib/verify")

module.exports = (request, response) => {
    verify(request)

    response.status(200).send('Hello World!');
}