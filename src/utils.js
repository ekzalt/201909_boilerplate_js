const { ArgumentError } = require("./errors");

/**
 * @typedef IUser
 * @property {string} name
 */

/**
 * ### some
 * @param {string[]} arr string[]
 * @param {string} str string
 * @returns {boolean} boolean
 */
function some(arr, str) {
  if (!Array.isArray(arr) || typeof str !== "string") {
    throw new ArgumentError("Unsupported argument");
  }

  return arr.some((item) => (item === str));
}

/**
 * ### getUserName
 * @param {IUser} user IUser
 * @returns {string} name
 */
const getUserName = (user) => {
  // if (!(user instanceof User)) throw new TypeError('Unsupported User');
  if (!user || !user.name) throw new TypeError("Unsupported User");

  return user.name;
};

module.exports = {
  some,
  getUserName,
};
