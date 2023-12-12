const express = require('express')
const router = express.Router()
const authController = require("./auth/authController")
const menuController = require("./menu/menucontroller")
const userController = require("./users/usercontroller")
const formController = require("./forms/formcontroller")
const db = require("../database/connection")
//Api for user login
router.post("/login", authController.login)
//Api for create user
router.post("/createuser", userController.createuser)
//Api for menu list
router.get("/menulist", menuController.menulist)
//Api for sub menu list
router.get("/submenulist", menuController.submenulist)
//Api for user list
router.get("/userlist", userController.userlist)
//Api for user list with id
router.get("/userlist/:id", userController.userlistwithid)
//Api for create manu 
router.post("/createmenu", menuController.createMenu)
//Api for create sub manu 
router.post("/createsubmenu", menuController.createSubMenu)
//Api for create user
router.post("/updateuser", userController.updateuser)
//Api for create forms 
router.post("/createforms", formController.createforms)
//Api for submit production shedule form
router.post("/productionScheduleForm", formController.productionScheduleForm)
//Api for submit raw material incoming register form 
router.post("/raw_material_incoming_register", formController.raw_material_incoming_register)
//Api for submit inward vehicle checklist form 
router.post("/inward_vehicle_checklist", formController.inward_vehicle_checklist)
//Api for role list
router.get("/rolelist", menuController.rolelist)
//Api for form list
router.get("/formlist", menuController.formlist)
//Api for form list with id
router.get("/formlist/:menuid/:submenuid", menuController.formlistwithid)
//Api for submenu list with id
router.get("/submenulist/:menuid", menuController.submenulistwithid)
//Api for production Schedule list
router.get("/getProductionScheduleFormList", formController.getProductionScheduleFormList)
//Api for get raw material incoming registerList list
router.get("/getraw_material_incoming_registerList", formController.getraw_material_incoming_registerList)
//Api for get raw material incoming registerList list
router.get("/getInward_vehicle_checklist", formController.getInward_vehicle_checklist)
//Api for create role
router.post("/createRole", menuController.createRole)
//Api for form list with id
router.post("/formlistIds", menuController.formlistIds)
//Api for submenu list with id
router.post("/submenulistByMenuId", menuController.submenulistByMenuId)
//Api for reject materials
router.post("/rejectMaterialRequest", formController.rejectMaterialRequest)
//Api for reject materials
router.post("/acceptedMaterialRequest", formController.acceptedMaterialRequest)
//Api for reject materials
router.post("/formDetailsByIds", formController.formDetailsByIds)
//Api for reject materials
router.post("/materialRequestListById", formController.materialRequestListById)
//Api for form list
router.get("/formlistById", menuController.formlistById)
//Api for delete menu
router.post("/deleteMenu", menuController.deleteMenu)
//Api for delete Sub menu
router.post("/deleteSubMenu", menuController.deleteSubMenu)
//Api for delete Forms
router.post("/deleteForm", menuController.deleteForm)
//Api for delete User
router.post("/deleteUser", userController.deleteUser)
//Api for submit Raw_Material_And_Packaging_Material_Inspection form
router.post("/Raw_Material_And_Packaging_Material_Inspection", formController.Raw_Material_And_Packaging_Material_Inspection)
//Api for submit Raw_Material_Rejection_Register form
router.post("/Raw_Material_Rejection_Register", formController.Raw_Material_Rejection_Register)

module.exports = router