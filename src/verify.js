const verify = require("../lib/verify")

module.exports = async (request, response) => {
    try {
        await verify(request)
        response.status(200).send('Hello World!')
    } 
    catch (error) {
        response.status(500).send(error)
    }
}