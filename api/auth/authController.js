const { statusCode } = require("../../utills/constant")
const message = require("../../utills/message")
const authService = require("./authService")
const { encryptPassword, comparePassword, createToken } = require("../../utills/utill")
const { query } = require("../../database/connection")

exports.login = async (req, res) => {
  try {
    let userDetails = await authService.checkUserExistWithEmail(req.body.email)
    if (userDetails) {
      const passwordCompare = await comparePassword(userDetails.password, req.body.password)
      if (passwordCompare) {
        const token = await createToken(userDetails)
        userDetails.token = token
        return res.status(statusCode.success).send({
          message: message.SUCCESS,
          data:token
        })
      } else {
        return res.status(statusCode.error).send({
          message: message.Password_not_match
        })
      }
    } else {
      return res.status(statusCode.error).send({
        message: message.Email_not_exist
      })
    }
  } catch (error) {
    console.log("error in login function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}