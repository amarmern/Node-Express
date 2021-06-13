class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // Added a meesage property
    this.code = errorCode; // Adds a code property
  }
}

module.exports = HttpError;
