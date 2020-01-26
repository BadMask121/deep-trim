class NotAuthorized extends Error {
    constructor(message) {
        super(JSON.stringify(message))
        this.name = 'NotAuthorized'
        this.message = JSON.stringify(message)
    }
}

export default NotAuthorized