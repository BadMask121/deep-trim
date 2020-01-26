class FileNotFoundException extends Error {
  constructor(message) {
    super(JSON.stringify(message));
    this.name = "FileNotFoundException";
    this.message = JSON.stringify(message);
  }
}

export default FileNotFoundException;
