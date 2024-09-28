const { Users } = require("../models/stepDbSchema");
const jwt = require("jsonwebtoken");

/**
 * @description checks for valid username and password on success returns jwt token
 * @param {object} requestBody
 * @returns returns the token on successful login
 */
const login = async (requestBody) => {
  const { userId, password } = requestBody;
    const user = await Users.findOne({ userId: userId });
    if (user.password === password) {
      const token = jwt.sign({ username: user.userName }, process.env.SECRET_KEY, { expiresIn: "3000s" });
      return token;
    } else {
      return "Invalid username or password";
    }
};

/**
 * @description checks for valid username and password on success registers the user in user json file
 * @param {*} param - contains username password
 * @returns registered user
 */
const register = async ({ userId, username, password }) => {
  const user = new Users({
    userId: userId,
    userName: username,
    password: password,
  });
  const newUser = await user.save();
  return newUser;
};

module.exports = { login, register };
