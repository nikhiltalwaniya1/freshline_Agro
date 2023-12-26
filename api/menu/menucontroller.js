const { statusCode } = require("../../utills/constant")
const message = require("../../utills/message")
const role = require("../../model/role")
const menu = require("../../model/menu")
const submenu = require("../../model/submenu")
const forms = require("../../model/form")
const usersModel = require("../../model/user")
const formListModel = require("../../model/formLIstByMenuId")
const materialModel = require("../../model/material")
const supplierModel = require("../../model/supplier")
exports.menulist = async (req, res) => {
  try {
    const menudetails = await menu.find({createdBy: req.decoded._id}).lean()
    if (menudetails && menudetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: menudetails
      })
    } else {
      return res.status(statusCode.success).send({
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
    const submenudetails = await submenu.find({createdBy: req.decoded._id}).populate('menuid').lean()
    if (submenudetails && submenudetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: submenudetails
      })
    } else {
      return res.status(statusCode.success).send({
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
      menuname: req.body.menuName,
      createdBy: req.decoded._id
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
      menuid: req.body.menuId,
      createdBy: req.decoded._id
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
      return res.status(statusCode.success).send({
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
    const formsdetails = await formListModel.find({ menuid: req.params.menuid, submenuid: req.params.submenuid })
      .populate('menuid')
      .populate('submenuid')
      .lean()
    if (formsdetails && formsdetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: formsdetails
      })
    } else {
      return res.status(statusCode.success).send({
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
    const submenudetails = await submenu.find({ menuid: req.params.menuid }).lean()
    if (submenudetails && submenudetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: submenudetails
      })
    } else {
      return res.status(statusCode.success).send({
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
      return res.status(statusCode.success).send({
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
    const submenudetails = await submenu.find({ menuid: { $in: menuIds }, createdBy: req.decoded._id }).lean()
    if (submenudetails && submenudetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: submenudetails
      })
    } else {
      return res.status(statusCode.success).send({
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
      return res.status(statusCode.success).send({
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
    const menuDelete = await menu.deleteOne({ _id: req.body.menuId })
    return res.status(statusCode.success).send({
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
    const submenuDelete = await submenu.deleteOne({ _id: req.body.submenuId })
    return res.status(statusCode.success).send({
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
    const formdelete = await formListModel.deleteOne({ _id: req.body.formId })
    return res.status(statusCode.success).send({
      message: message.MenuDeleteSuccessfully,
    })
  } catch (error) {
    console.log("error in userlist function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.createMaterial = async (req, res) => {
  try {
    const saveMaterial = new materialModel({
      materialname: req.body.materialname,
      createdBy: req.decoded._id
    })
    await saveMaterial.save()
    return res.status(statusCode.success).send({
      message: message.MaterialCreatedSuccessfully,
    })
  } catch (error) {
    console.log("error in createMenu function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.updateMaterial = async (req, res) => {
  try {
    let obj = {
      materialname: req.body.materialname,
      materialid: req.body.materialid
    }
    const updateMaterials = await materialModel.updateOne(
      { _id: req.body.id },
      { $set: obj }
    )
    return res.status(statusCode.success).send({
      message: message.updateSuccessfully,
    })
  } catch (error) {
    console.log("error in createMenu function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.deleteMaterial = async (req, res) => {
  try {
    const deleteMaterials = await materialModel.deleteOne(
      { _id: req.body.id }
    )
    return res.status(statusCode.success).send({
      message: message.deleteSuccessfully,
    })
  } catch (error) {
    console.log("error in createMenu function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.allMaterialList = async (req, res) => {
  try {
    const deleteMaterial = await materialModel.find({ createdBy: req.decoded.createdBy }).lean()
    return res.status(statusCode.success).send({
      message: message.SUCCESS,
      data: deleteMaterial
    })
  } catch (error) {
    console.log("error in createMenu function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.createSupplier = async (req, res) => {
  try {
    const saveSupplier = new supplierModel({
      suppliername: req.body.suppliername,
      createdBy: req.decoded._id
    })
    await saveSupplier.save()
    return res.status(statusCode.success).send({
      message: message.SupplierCreatedSuccessfully,
    })
  } catch (error) {
    console.log("error in createMenu function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.updateSupplier = async (req, res) => {
  try {
    let obj = {
      suppliername: req.body.suppliername,
    }
    const updateSuppliers = await supplierModel.updateOne(
      { _id: req.body.id },
      { $set: obj }
    )
    return res.status(statusCode.success).send({
      message: message.updateSuccessfully,
    })
  } catch (error) {
    console.log("error in createMenu function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.deleteSupplier = async (req, res) => {
  try {
    const deleteSuppliers = await supplierModel.deleteOne(
      { _id: req.body.id }
    )
    return res.status(statusCode.success).send({
      message: message.deleteSuccessfully,
    })
  } catch (error) {
    console.log("error in createMenu function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.allSupplierList = async (req, res) => {
  try {
    const deleteSupplier = await supplierModel.find({ createdBy: req.decoded._id }).lean()
    return res.status(statusCode.success).send({
      message: message.SUCCESS,
      data: deleteSupplier
    })
  } catch (error) {
    console.log("error in createMenu function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}