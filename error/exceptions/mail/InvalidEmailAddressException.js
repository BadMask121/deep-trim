class InvalidEmailAddressException extends Error {
    constructor(message) {
         super(JSON.stringify(message))
         this.name = 'InvalidEmailAddressException'
         this.message = JSON.stringify(message)
    }
}

export default InvalidEmailAddressException