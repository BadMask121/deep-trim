class NullException extends Error {
    constructor(message) {
        super(JSON.stringify(message))
        this.name = 'NullException'
        this.message = JSON.stringify(message)
    }
}

export default NullException