const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const moment = require("moment")
//This function is used for encrypt given password
module.exports.encryptPassword = async (password) => {
  try {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err1, hash) => {
        if (err1) {
          logger.error("Error in encryptPassword function line 40... " + err1)
          reject(err1)
        }
        resolve(hash)
      })
    })
  } catch (error) {
    console.log("Error in encryptPassword function... " + error)
    return Promise.reject(error)
  }
}

//this function is used for compare give password
module.exports.comparePassword = async (password, newPassword) => {
  try {
    return new Promise(async (resolve, reject) => {
      const result = await bcrypt.compare(newPassword, password)
      resolve(result)
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

//This function is used for create token
module.exports.createToken = async (userData) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(userData, process.env.TOKEN_KEY, { expiresIn: "24h" })
    resolve(token)
  })
}

//Create unique number of 9 digit
module.exports.generateUniqueNumber = async () => {
  try {
    let uniqueNumber;
    let isUnique = false;

    while (!isUnique) {
      // Generate a random 9-digit number as a hexadecimal string
      const randomHex = crypto.randomBytes(4).toString('hex');
      uniqueNumber = parseInt(randomHex, 16).toString().slice(0, 9);

      // Check if the generated number is unique (you might want to store and check against a list of existing numbers)
      isUnique = true; // Assume it's unique for simplicity, but you should check against a database or a list of existing numbers.
    }

    return Promise.resolve(uniqueNumber);
  } catch (error) {
    return Promise.reject(error);
  }
}

exports.createRendomId = async (str) => {
  return new Promise((resolve, reject) => {
    const date = moment(new Date()).format('DD-MM-YYYY')
    const time = moment(new Date()).format('HH:mm')
    let key = `${str}/${date}/${time}`
    resolve(key)
  })
}