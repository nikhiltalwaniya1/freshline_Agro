const { statusCode } = require("../../utills/constant")
const message = require("../../utills/message")
const { encryptPassword, comparePassword, createToken } = require("../../utills/utill")
const authService = require("../auth/authService")
const users = require("../../model/user")

exports.userlist = async (req, res) => {
  try {
    const userDetails = await users.find({}).lean()
    if (userDetails && userDetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: userDetails
      })
    } else {
      return res.status(statusCode.error).send({
        message: message.Data_not_found,
        data: []
      })
    }
  } catch (error) {
    console.log("error in userlist function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.userlistwithid = async (req, res) => {
  try {
    const { id } = req.params;
    const userDetails = await users.findOne({ _id: id })
      .lean();

    if (userDetails) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: userDetails
      });
    } else {
      return res.status(statusCode.error).send({
        message: message.Data_not_found,
      });
    }
  } catch (error) {
    console.error("Error in userlistwithid function:", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    });
  }
};

exports.createuser = async (req, res) => {
  try {
    const userDetails = await authService.checkUserExistWithEmail(req.body.email)
    if (userDetails === null) {
      const encryptedPassword = await encryptPassword(req.body.password)
      let obj = {
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword,
        details: req.body.details,
        roleid: req.body.roleid,
        roletype: req.body.roletype,
        username: req.body.username
      }
      const saveUser = new users(obj)
      await saveUser.save()
      return res.status(statusCode.success).send({
        message: message.Registration_Done
      })
    } else {
      return res.status(statusCode.error).send({
        message: message.Email_already_exist
      })
    }
  } catch (error) {
    console.log("error in login function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.updateuser = async (req, res) => {
  try {
    const userDetails = await authService.checkUserExistWithId(req.body.id)
    if (userDetails) {
      const updateQuery = {
        name: req.body.name,
        email: req.body.email,
        details: req.body.details
      }
      const updateUser = await users.updateOne(
        { _id: req.body.id },
        { $set: updateQuery })
      return res.status(statusCode.success).send({
        message: message.user_update_successfully
      })
    } else {
      return res.status(statusCode.error).send({
        message: message.User_not_found
      })
    }
  } catch (error) {
    console.log("error in updateuser function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}