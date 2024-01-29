const express = require('express')
const router = express.Router()
const authController = require("./auth/authController")
const menuController = require("./menu/menucontroller")
const userController = require("./users/usercontroller")
const formController = require("./forms/formcontroller")
const db = require("../database/connection")
const { checkSession, checkToken } = require("../utills/utill")

//Api for user login
router.post("/login", authController.login)
//Api for create user
router.post("/createuser", checkToken, userController.createuser)
//Api for menu list
router.get("/menulist", checkToken, menuController.menulist)
//Api for sub menu list
router.get("/submenulist", checkToken, menuController.submenulist)
//Api for user list
router.get("/userlist", checkToken, userController.userlist)
//Api for user list with id
router.get("/userlist/:id", checkToken, userController.userlistwithid)
//Api for create manu 
router.post("/createmenu", checkToken, menuController.createMenu)
//Api for create sub manu 
router.post("/createsubmenu", checkToken, menuController.createSubMenu)
//Api for create user
router.post("/updateuser", checkToken, userController.updateuser)
//Api for create forms 
router.post("/createforms", checkToken, formController.createforms)
//Api for submit production shedule form
router.post("/productionScheduleForm", checkToken, formController.productionScheduleForm)
//Api for submit raw material incoming register form 
router.post("/raw_material_incoming_register", checkToken, formController.raw_material_incoming_register)
//Api for submit inward vehicle checklist form 
router.post("/inward_vehicle_checklist", checkToken, formController.inward_vehicle_checklist)
//Api for role list
router.get("/rolelist", checkToken, menuController.rolelist)
//Api for form list
router.get("/formlist", checkToken, menuController.formlist)
//Api for form list with id
router.get("/formlist/:menuid/:submenuid", checkToken, menuController.formlistwithid)
//Api for submenu list with id
router.get("/submenulist/:menuid", checkToken, menuController.submenulistwithid)
//Api for production Schedule list
router.get("/getProductionScheduleFormList", checkToken, formController.getProductionScheduleFormList)
//Api for get raw material incoming registerList list
router.get("/getraw_material_incoming_registerList", checkToken, formController.getraw_material_incoming_registerList)
//Api for get raw material incoming registerList list
router.get("/getInward_vehicle_checklist", checkToken, formController.getInward_vehicle_checklist)
//Api for create role
router.post("/createRole", checkToken, menuController.createRole)
//Api for form list with id
router.post("/formlistIds", checkToken, menuController.formlistIds)
//Api for submenu list with id
router.post("/submenulistByMenuId", checkToken, menuController.submenulistByMenuId)
//Api for reject materials
router.post("/rejectMaterialRequest", checkToken, formController.rejectMaterialRequest)
//Api for reject materials
router.post("/acceptedMaterialRequest", checkToken, formController.acceptedMaterialRequest)
//Api for reject materials
router.post("/formDetailsByIds", checkToken, formController.formDetailsByIds)
//Api for materials request list
router.post("/materialRequestListById", checkToken, formController.materialRequestListById)
//Api for form list
router.get("/formlistById", checkToken, menuController.formlistById)
//Api for delete menu
router.post("/deleteMenu", checkToken, menuController.deleteMenu)
//Api for delete Sub menu
router.post("/deleteSubMenu", checkToken, menuController.deleteSubMenu)
//Api for delete Forms
router.post("/deleteForm", checkToken, menuController.deleteForm)
//Api for delete User
router.post("/deleteUser", checkToken, userController.deleteUser)
//Api for submit Raw_Material_Inspection form
router.post("/Raw_Material_Inspection", checkToken, formController.Raw_Material_Inspection)
//Api for submit Raw_Material_Rejection_Register form
router.post("/Raw_Material_Rejection_Register", checkToken, formController.Raw_Material_Rejection_Register)
//Api for Add matrial
router.post("/createMaterial", checkToken, menuController.createMaterial)
//Api for Add matrial
router.post("/updateMaterial", checkToken, menuController.updateMaterial)
//Api for Add matrial
router.post("/deleteMaterial", checkToken, menuController.deleteMaterial)
//Api for Get matrial list
router.get("/allMaterialList", checkToken, menuController.allMaterialList)
//Api for submit Raw_Material_Rejection_Register form
router.post("/Verify_Raw_Material_Inspection", checkToken, formController.Verify_Raw_Material_Inspection)
//Api for submit Raw_Material_Release_record form
router.post("/Raw_Material_Release_record", checkToken, formController.Raw_Material_Release_record)
//Api for submit Raw_Material_Release_record form
router.post("/Material_Discrepancy_Report", checkToken, formController.Material_Discrepancy_Report)
//Api for get Raw_Material_Inspection data by id
router.get("/Get_Raw_Material_Inspection_byId/:id", checkToken, formController.Get_Raw_Material_Inspection_byId)
//Api for Add supplier
router.post("/createSupplier", checkToken, menuController.createSupplier)
//Api for Add supplier
router.post("/updateSupplier", checkToken, menuController.updateSupplier)
//Api for Add supplier
router.post("/deleteSupplier", checkToken, menuController.deleteSupplier)
//Api for Get supplier list
router.get("/allSupplierList", checkToken, menuController.allSupplierList)
//Api for Add supplier
router.post("/MaterialStockAndIssueRegistred", checkToken, formController.MaterialStockAndIssueRegistred)
//Api for search material stock by material name
router.post("/materialSearchByName", checkToken, formController.materialSearchByName)
//Api for search material stock by material name
router.get("/materialStockList", checkToken, formController.materialStockList)
//Api for create material issue slip
router.post("/materialissueslip", checkToken,formController.materialissueslip)
//Api for create Chlorine Concentration
router.post("/createChlorineConcentration",checkToken, formController.createChlorineConcentration)
//Api for create Belt Dryer Report
router.post("/createBoilerTemperatureRecord",checkToken, formController.createBoilerTemperatureRecord)
//Api for create Belt Dryer Report
router.post("/createBeltDryerTempRecord",checkToken, formController.createBeltDryerTempRecord)
//Api for materials request list
router.post("/materialIssueRequestListById", checkToken, formController.materialIssueRequestListById)
//API for user list by form name
router.post("/userlistbyformname",  userController.userlistbyformname)
//Api for create Work Process For Belt Dryer
router.post("/createWorkProcessForBeltDryer", checkToken, formController.createWorkProcessForBeltDryer)
//Api for create Non Conformin Product Registerd
router.post("/createNonConformingProductRegisterd", checkToken, formController.createNonConformingProductRegisterd)
//Api for create Re-Work for Bin Dryer
router.post("/createReWorkforBinDryer", checkToken, formController.createReWorkforBinDryer)
//Api for create UV Light Record
router.post("/createUVLightRecord", checkToken, formController.createUVLightRecord)
//Api for create Certificate Of Analysis COA
router.post("/createCertificateOfAnalysisCOA", checkToken, formController.createCertificateOfAnalysisCOA)

module.exports = router