const { statusCode } = require("../../utills/constant")
const message = require("../../utills/message")
const role = require("../../model/role")
const menu = require("../../model/menu")
const submenu = require("../../model/submenu")
const forms = require("../../model/form")
const usersModel = require("../../model/user")
const formListModel = require("../../model/formLIstByMenuId")

exports.menulist = async (req, res) => {
  try {
    const menudetails = await menu.find({}).lean()
    if (menudetails && menudetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: menudetails
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

exports.submenulist = async (req, res) => {
  try {
    const submenudetails = await submenu.find({}).populate('menuid').lean()
    if (submenudetails && submenudetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: submenudetails
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

exports.createMenu = async (req, res) => {
  try {
    const saveMenu = new menu({
      menuname: req.body.menuName
    })
    await saveMenu.save()
    return res.status(statusCode.success).send({
      message: message.MenuCreatedSuccessfully,
    })
  } catch (error) {
    console.log("error in createMenu function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.createSubMenu = async (req, res) => {
  try {
    const saveSubMenu = new submenu({
      submenuname: req.body.SubMenuName,
      menuid:req.body.menuId
    })
    await saveSubMenu.save()
    return res.status(statusCode.success).send({
      message: message.SubMenuCreatedSuccessfully,
    })
  } catch (error) {
    console.log("error in createMenu function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.rolelist = async (req, res) => {
  try {
    const roledetails = await role.find({}).lean()
    if (roledetails && roledetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: roledetails
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

exports.formlist = async (req, res) => {
  try {
    const formsdetails = await forms.find({}).lean()
    if (formsdetails && formsdetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: formsdetails
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

exports.formlistwithid = async (req, res) => {
  try {
    const formsdetails = await formListModel.find({menuid:req.params.menuid, submenuid:req.params.submenuid}).lean()
    if (formsdetails && formsdetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: formsdetails
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

exports.submenulistwithid = async (req, res) => {
  try {
    const submenudetails = await submenu.find({menuid:req.params.menuid}).lean()
    if (submenudetails && submenudetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: submenudetails
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

exports.createRole = async (req, res) => {
  try {
    const obj = {
      rolename: req.body.rolename,
      roletype: req.body.roletype
    }
    console.log("obj===", obj);
    const saveRole = new role(obj)
    await saveRole.save()
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in userlist function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.formlistIds = async (req, res) => {
  try {
    const menuids = req.body.menuids
    const submenuids = req.body.submenuids
    if (!Array.isArray(menuids)) {
      return res.status(statusCode.error).send({
        message: "Menu IDs should be provided as an array",
        data: []
      });
    }
    if (!Array.isArray(submenuids)) {
      return res.status(statusCode.error).send({
        message: "Sub Menu IDs should be provided as an array",
        data: []
      });
    }
    const formsdetails = await forms.find({ menuid: { $in: menuids }, submenuid: { $in: submenuids } }).lean()
    if (formsdetails && formsdetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: formsdetails
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

exports.submenulistByMenuId = async (req, res) => {
  try {
    const menuIds = req.body.menuids
    // Ensure menuIds is an array
    if (!Array.isArray(menuIds)) {
      return res.status(statusCode.error).send({
        message: "Menu IDs should be provided as an array",
        data: []
      });
    }
    const submenudetails = await submenu.find({ menuid: { $in: menuIds } }).lean()
    if (submenudetails && submenudetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: submenudetails
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

exports.formlistById = async (req, res) => {
  try {
    const formsdetails = await formListModel.find({}).populate('menuid').populate('submenuid').lean()
    if (formsdetails && formsdetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: formsdetails
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

exports.deleteMenu = async (req, res) => {
  try {
    const menuDelete = await menu.deleteOne({_id:req.body.menuId})
    return res.status(statusCode.error).send({
      message: message.MenuDeleteSuccessfully,
    })
  } catch (error) {
    console.log("error in userlist function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.deleteSubMenu = async (req, res) => {
  try {
    const submenuDelete = await submenu.deleteOne({_id:req.body.menuId})
    return res.status(statusCode.error).send({
      message: message.SubMenuDeleteSuccessfully,
    })
  } catch (error) {
    console.log("error in userlist function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.deleteForm = async (req, res) => {
  try {
    const formdelete = await formListModel.deleteOne({_id:req.body.menuId})
    return res.status(statusCode.error).send({
      message: message.MenuDeleteSuccessfully,
    })
  } catch (error) {
    console.log("error in userlist function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}