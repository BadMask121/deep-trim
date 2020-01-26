class MailFailedException extends Error {
    constructor(message) {
         super(JSON.stringify(message))
         this.name = 'MailFailedException'
         this.message = JSON.stringify(message)
    }
}

export default MailFailedException