class ArgumentError extends TypeError {
  /**
   * @constructor
   * @param {string} msg
   */
  constructor(msg) {
    super(msg);

    this.name = "ArgumentError";
  }
}

module.exports = {
  ArgumentError,
};
