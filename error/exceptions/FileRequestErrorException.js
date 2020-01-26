class FileRequestErrorException extends Error {
    constructor(message) {
        super(JSON.stringify(message))
        this.name = 'FileRequestErrorException'
        this.message = JSON.stringify(message)
    }
}

export default FileRequestErrorException