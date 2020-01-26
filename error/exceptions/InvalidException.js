class InvalidException extends Error {
  constructor(message) {
    super(JSON.stringify(message));
    this.name = "InvalidException";
    this.message = JSON.stringify(message);
  }
}

export default InvalidException;
