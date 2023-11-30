const { statusCode } = require("../../utills/constant")
const message = require("../../utills/message")
const role = require("../../model/role")
const menu = require("../../model/menu")
const submenu = require("../../model/submenu")
const forms = require("../../model/form")
const usersModel = require("../../model/user")

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
    const submenudetails = await submenu.find({}).lean()
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

exports.createTables = async (req, res) => {
  try {
    const roleTableQuery = `create table role (
      id serial PRIMARY KEY,
      rolename text not null,
      roletype INT,
      created_at timestamp DEFAULT NOW(),
      updated_at timestamp DEFAULT NOW()
    );`
    const menusTableQuery = `create table menus (
      id serial PRIMARY KEY,
      menuname text not null,
      created_at timestamp DEFAULT NOW(),
      updated_at timestamp DEFAULT NOW()
    );`
    const submenuTableQuery = `create table submenus (
      id serial PRIMARY KEY,
      submenuname text not null,
      menuid int not null,
      FOREIGN KEY (menuid) REFERENCES menus (id),
      created_at timestamp DEFAULT NOW(),
      updated_at timestamp DEFAULT NOW()
    );`
    const formTableQuery = `create table forms (
      id serial PRIMARY KEY,
      formlist text,
      menuid int,
      submenuid int,
      created_at timestamp DEFAULT NOW(),
      updated_at timestamp DEFAULT NOW()
    )`
    const UserTableQuery = `CREATE TABLE users (
      id serial PRIMARY KEY,
      name text NOT NULL,
      email text NOT NULL,
      password text NOT NULL,
      roleid int REFERENCES role (id),
      username text NOT NULL,
      roletype text NOT NULL,
      menulist text[] DEFAULT '{}'::text[],
      submenulist text[] DEFAULT '{}'::text[],
      formslist text[] DEFAULT '{}'::text[],
      created_at timestamp DEFAULT NOW(),
      updated_at timestamp DEFAULT NOW()
    );`
    const FPRD04Production_ScheduleTableQuery = `CREATE TABLE FPRD04Production_Schedule (
    id serial PRIMARY KEY,
    productionitem text NOT NULL,
    productiontype text NOT NULL,
    machineinprocess text NOT NULL,
    quantity int NOT NULL,
    duedate DATE NOT NULL,
    dates DATE NOT NULL,
    times time NOT NULL,
    supervisor text NOT NULL,
    operationid int ,
    created_at timestamp DEFAULT NOW(),
    updated_at timestamp DEFAULT NOW()
    )`
    const FQC01Inward_Vehicle_ChecklistTableQuery = `CREATE TABLE FQC01Inward_Vehicle_Checklist (
      id serial PRIMARY KEY,
      dates DATE NOT NULL,
	  	transportername text NOT NULL,
      vehicleno text NOT NULL,
      drivername text NOT NULL,
      driverlicenseno text NOT NULL,
			rawMaterialCondition jsonb NOT NULL,
			properlyCleaned jsonb NOT NULL,
			freeFromAbnormalOdor jsonb NOT NULL,
			insetFree jsonb NOT NULL,
			tarapulinCondition jsonb NOT NULL,
			breaksAndSteering jsonb NOT NULL,
      operationid int ,
      created_at timestamp DEFAULT NOW(),
      updated_at timestamp DEFAULT NOW()
    )`
    const RST01Raw_Material_Incoming_RegisterTableQuery = `CREATE TABLE RST01Raw_Material_Incoming_Register (
    id serial PRIMARY KEY,
    dates DATE NOT NULL,
    invoiceno text,
    vehicleno text ,
    drivername text ,
    driverno text ,
    pono text ,
    itemname text,
    valueOfItem text,
    quantity int,
    driverlicenseno text,
    remarks text,
    userId int,
    operationid int ,
    created_at timestamp DEFAULT NOW(),
    updated_at timestamp DEFAULT NOW()
    )`

    //Create roles table 
    const createRoleTable = await query(roleTableQuery)
    //Create roles table 
    const createMenuTable = await query(menusTableQuery)
    //Create roles table 
    const createSubMenuTable = await query(submenuTableQuery)
    //Create roles table 
    const createFormsTable = await query(formTableQuery)
    //Create users table 
    const createUsersTable = await query(UserTableQuery)
    //Create form table 
    const createFPRD04Production_ScheduleTable = await query(FPRD04Production_ScheduleTableQuery)
    //Create form table 
    const createFQC01Inward_Vehicle_ChecklistTable = await query(FQC01Inward_Vehicle_ChecklistTableQuery)
    //Create form table 
    const createRST01Raw_Material_Incoming_RegisterTable = await query(RST01Raw_Material_Incoming_RegisterTableQuery)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in createTables function ========", error)
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
    const formsdetails = await forms.find({menuid:req.params.menuid, submenuid:req.params.submenuid}).lean()
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