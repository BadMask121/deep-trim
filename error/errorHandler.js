import InvalidException from './exceptions/InvalidException';
import NullException from './exceptions/NullException';
import NotAuthorized from './exceptions/NotAuthorized';
import FileNotFoundException from './exceptions/FileNotFoundException';
import FileRequestErrorException from './exceptions/FileRequestErrorException';
import InvalidEmailAddressException from './exceptions/mail/InvalidEmailAddressException';
import MailFailedException from './exceptions/mail/MailFailedException';

class ErrorHandler extends Error {
  constructor(message) {
    super(JSON.stringify(message));
    this.name = 'ErrorHandler';
    this.message = JSON.stringify(message);
  }

  get getMessage() {
    return this.message;
  }
}

const errorHandler = {
  ErrorHandler,
  FileNotFoundException,
  FileRequestErrorException,
  InvalidException,
  InvalidEmailAddressException,
  MailFailedException,
  NullException,
  NotAuthorized,
};

export default errorHandler;
