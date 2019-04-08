const mockRequest = data => ({ body: data })
const mockResponse = () =>{
    const response = {}
    response.send = jest.fn().mockReturnValue(response)
    response.status = jest.fn().mockReturnValue(response)
    response.header = jest.fn().mockReturnValue(response)
    response.json = jest.fn().mockReturnValue(response)
    response.end = jest.fn().mockReturnValue(response)
    return response
}
module.exports = {
    mockRequest,
    mockResponse,
}
