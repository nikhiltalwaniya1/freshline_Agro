const { statusCode, workStatus, formName, formateNumber } = require("../../utills/constant")
const message = require("../../utills/message")
const { generateUniqueNumber } = require("../../utills/utill")
const forms = require("../../model/form")
const production_Schedule_Form = require("../../model/Production_Schedule")
const Raw_Material_Incoming_RegisterForm = require("../../model/Raw_Material_Incoming_Register")
const Inward_Vehicle_ChecklistForm = require("../../model/Inward_Vehicle_Checklist")
const { movetonext } = require("./formservice")
const Raw_Material_Rejection_RegisterForm = require("../../model/Raw_Material_Rejection_Register")
const materialRequestModel = require("../../model/materialRequest")
const usersModel = require("../../model/user")
const { ObjectId } = require('mongodb');
const formListModel = require("../../model/formLIstByMenuId")
const Raw_Material_InspectionModel = require("../../model/Raw_Material_Inspection")
const Packaging_Material_InspectionModel = require("../../model/Packaging_Material_Inspection")
const Raw_Material_Release_recordForm = require("../../model/Raw_Material_Release_record")
const MATERIAL_DISCREPANCY_REPORTForm = require("../../model/Material_Discrepancy_Report")
const formModel = require("../../model/form")


exports.createforms = async (req, res) => {
  try {
    const saveForm = new formListModel({
      formname: req.body.formName,
      menuid: req.body.menuId,
      submenuid: req.body.submenuId,
    })
    await saveForm.save()
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

//Submit production schedule form 
exports.productionScheduleForm = async (req, res) => {
  try {
    const dates = new Date(req.body.date)
    const duedate = new Date(req.body.duedate)
    const times = dates.toTimeString()
    const operationid = await generateUniqueNumber()
    const obj = {
      productionitem: req.body.productionitem,
      productiontype: req.body.productiontype,
      machineinprocess: req.body.machineinprocess,
      quantity: req.body.quantity,
      duedate,
      dates,
      dates,
      supervisor: req.body.supervisor,
      operationid,
      status:true,
      formateNumber:formateNumber.form1
    }

    const productionScheduleForm = new production_Schedule_Form(obj)
    const formDetails = await productionScheduleForm.save()
    let obj1 = {
      form1Id: formDetails._id.toString(),
      userId: req.body.userid,
      userName: req.body.userName,
      status: workStatus.Process,
      formName: req.body.formName,
      operationid: operationid
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in productionScheduleForm function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Submit raw_material_incoming_register form 
exports.raw_material_incoming_register = async (req, res) => {
  try {
    const dates = new Date(req.body.date)
    let obj = {
      dates,
      invoiceno: req.body.invoiceno,
      vehicleno: req.body.vehicleno,
      drivername: req.body.drivername,
      driverno: req.body.driverno,
      pono: req.body.pono,
      itemname: req.body.itemname,
      valueofitem: req.body.valueofitem,
      quantity: req.body.quantity,
      driverlicenseno: req.body.driverlicenseno,
      remarks: req.body.remarks,
      userid: req.body.userid,
      operationid: req.body.operationid,
      status:true,
      formateNumber:formateNumber.form2
    }
    const submitDetails = new Raw_Material_Incoming_RegisterForm(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form2Id: formDetails._id.toString(),
      userId: req.body.userid,
      operationid: req.body.operationid,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Submit inward_vehicle_checklist form 
exports.inward_vehicle_checklist = async (req, res) => {
  try {
    const dates = new Date(req.body.date)
    const operationid = req.body.operationid
    let obj = {
      dates,
      transportername: req.body.transportername,
      vehicleno: req.body.vehicleno,
      drivername: req.body.drivername,
      driverlicenseno: req.body.driverlicenseno,
      rawMaterialCondition: req.body.rawmaterialcondition,
      properlyCleaned: req.body.properlycleaned,
      freeFromAbnormalOdor: req.body.freefromabnormalodor,
      insetFree: req.body.insetfree,
      tarapulinCondition: req.body.tarapulincondition,
      breaksAndSteering: req.body.breaksandsteering,
      operationid,
      status:true,
      formateNumber:formateNumber.form3
    }
    const submitDetails = new Inward_Vehicle_ChecklistForm(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form3Id: formDetails._id.toString(),
      userId: req.body.userid,
      operationid: req.body.operationid,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in inward_vehicle_checklist function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Get production schedule form list
exports.getProductionScheduleFormList = async (req, res) => {
  try {
    const productionScheduleData = await production_Schedule_Form.find({}).lean()
    if (productionScheduleData && productionScheduleData.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: productionScheduleData
      })
    } else {
      return res.status(statusCode.success).send({
        message: message.Data_not_found,
        data: []
      })
    }
  } catch (error) {
    console.log("error in productionScheduleForm function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Get raw material incoming register form list
exports.getraw_material_incoming_registerList = async (req, res) => {
  try {
    const raw_material_incoming_registerData = await Raw_Material_Incoming_RegisterForm.find({}).lean()
    if (raw_material_incoming_registerData && raw_material_incoming_registerData.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: raw_material_incoming_registerData
      })
    } else {
      return res.status(statusCode.success).send({
        message: message.Data_not_found,
        data: []
      })
    }
  } catch (error) {
    console.log("error in productionScheduleForm function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Get inward vehicle checklist form list
exports.getInward_vehicle_checklist = async (req, res) => {
  try {
    const inward_vehicle_checklistData = await Inward_Vehicle_ChecklistForm.find({}).lean()
    if (inward_vehicle_checklistData && inward_vehicle_checklistData.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: inward_vehicle_checklistData
      })
    } else {
      return res.status(statusCode.success).send({
        message: message.Data_not_found,
        data: []
      })
    }
  } catch (error) {
    console.log("error in getInward_vehicle_checklist function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.rejectMaterialRequest = async (req, res) => {
  try {
    
    let obj1 = {
      userId: req.body.userid,
      operationid: req.body.operationid,
      workStatus: workStatus.Rejected
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.acceptedMaterialRequest = async (req, res) => {
  try {
    let obj1 = {
      userId: req.body.userid,
      operationid: req.body.operationid,
      workStatus: workStatus.Accepted
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in acceptedMaterialRequest function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.formDetailsByIds = async (req, res) => {
  try {
    const formsName = req.body.formName
    const formdetails = await forms.find({ formname: { $in: formsName } }).lean()
    if (formdetails && formdetails.length > 0) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: formdetails
      })
    } else {
      return res.status(statusCode.success).send({
        message: message.Data_not_found,
        data: []
      })
    }
  } catch (error) {
    console.log("error in acceptedMaterialRequest function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.materialRequestListById = async (req, res) => {
  try {
    const userId = req.body.userid;
    const formName = req.body.formName;

    let userIdObject;
    try {
      userIdObject = new ObjectId(userId);
    } catch (error) {
      console.error("Invalid userId format:", error);
      return res.status(statusCode.error).send({
        message: "Invalid userId format"
      });
    }

    let query = {
      $or: [
        { "currentAssigneeId._id": userIdObject },
        { "prevAssigneeIds": {$in:userId} },
        {"currentFormName": {$in:formName}}
      ],
    };
    const requestDetails = await materialRequestModel.find(query)
      .populate('form1Id')
      .populate('form2Id')
      .populate('form3Id')
      .populate('form4_1Id')
      .populate('form4_2Id')
      .populate('form5Id')
      .populate('form6Id')
      .lean();
    return res.status(statusCode.success).send({
      message: message.SUCCESS,
      data: requestDetails
    });
  } catch (error) {
    console.log("Error in materialRequestListById function:", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    });
  }
};

//Submit Raw_Material_Inspection form 
exports.Raw_Material_Inspection = async (req, res) => {
  try {
    const dates = new Date(req.body.date)
    let obj = {
      dates,
      materialName: req.body.materialName,
      invoiceNo: req.body.invoiceNo,
      invoiceDate: req.body.invoiceDate,
      documentVerification: req.body.documentVerification,
      preUnloadingOperation: req.body.preUnloadingOperation,
      unloadingOperation: req.body.unloadingOperation,
      weighingOperation: req.body.weighingOperation,
      physicalInspactionCheckListForVeg: req.body.physicalInspactionCheckListForVeg,
      userid: req.body.userid,
      doneBy: req.body.userid,
      operationid: req.body.operationid,
      status:true,
      formateNumber:formateNumber.form4
    }
    const submitDetails = new Raw_Material_InspectionModel(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form4Id: formDetails._id.toString(),
      userId: req.body.userid,
      operationid: req.body.operationid,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Submit Raw_Material_Rejection_Register form 
exports.Raw_Material_Rejection_Register = async (req, res) => {
  try {
    const dates = new Date(req.body.date)
    let obj = {
      dates,
      invoiceno: req.body.invoiceno,
      supplier: req.body.supplier,
      pono: req.body.pono,
      valueOfProduct: req.body.valueOfProduct,
      quantityAndWeight: req.body.quantityAndWeight,
      accepted: req.body.accepted,
      rejected: req.body.rejected,
      reasonOfRejection: req.body.reasonOfRejection,
      operationid: req.body.operationid,
      status:true
    }
    const submitDetails = new Raw_Material_Rejection_RegisterForm(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form5Id: formDetails._id.toString(),
      userId: req.body.userid,
      operationid: req.body.operationid,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Submit Packaging_Material_Inspection form 
exports.Packaging_Material_Inspection = async (req, res) => {
  try {
    const dates = new Date(req.body.date)
    let obj = {
      dates,
      materialName: req.body.materialName,
      invoiceNo: req.body.invoiceNo,
      invoiceDate: req.body.invoiceDate,
      documentVerification: req.body.documentVerification,
      preUnloadingOperation: req.body.preUnloadingOperation,
      unloadingOperation: req.body.unloadingOperation,
      weighingOperation: req.body.weighingOperation,
      physicalInspactionCheckListForPackagingMaterial: req.body.physicalInspactionCheckListForPackagingMaterial,      
      userid: req.body.userid,
      doneBy: req.body.userid,
      operationid: req.body.operationid,
      status:true,
      formateNumber:formateNumber.form4
    }
    const submitDetails = new Packaging_Material_InspectionModel(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form4Id: formDetails._id.toString(),
      userId: req.body.userid,
      operationid: req.body.operationid,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Submit Verify_Raw_Material_Inspection form 
exports.Verify_Raw_Material_Inspection = async (req, res) => {
  try {
    let obj = {
      checkedBy: req.body.checkedBy,
    }
    const verifyRawMaterial = await Raw_Material_InspectionModel.updateOne(
      {_id:req.body.id},
      {$set:obj}
    )
    let obj1 = {
      userId: req.body.userid,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Submit Verify_Packaging_Material_Inspection form 
exports.Verify_Packaging_Material_Inspection = async (req, res) => {
  try {
    let obj = {
      checkedBy: req.body.checkedBy,
    }
    const verifyPackagingMaterial = await Packaging_Material_InspectionModel.updateOne(
      {_id:req.body.id},
      {$set:obj}
    )
    let obj1 = {
      userId: req.body.userid,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Submit Raw_Material_Release_record form 
exports.Raw_Material_Release_record = async (req, res) => {
  try {
    const dates = new Date(req.body.date)
    let obj = {
      materialName: req.body.materialName,
      doneBy: req.body.userId,
      dates,
      materialId: req.body.materialId,
      qualityAcceptance: req.body.qualityAcceptance,
      analytical: req.body.analytical,
      microBiological: req.body.microBiological,
      sensory: req.body.sensory,
      Other: req.body.Other,
      userId: req.body.userId,
      operationId: req.body.operationId,
      status: true,
      formateNumber: formateNumber.form5,
    }
    const submitDetails = new Raw_Material_Release_recordForm(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form7Id: formDetails._id.toString(),
      userId: req.body.userid,
      operationid: req.body.operationid,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Submit Material_Discrepancy_Report form 
exports.Material_Discrepancy_Report = async (req, res) => {
  try {
    let obj = {
      materialName: req.body.materialName,
      natureOfDiscrepancy: req.body.natureOfDiscrepancy,
      details: req.body.details,
      supplierName: req.body.supplierName,
      invoiceNo: req.body.invoiceNo,
      invoiceDate: new Date(req.body.invoiceDate),
      transporterName: req.body.transporterName,
      quantity: req.body.quantity,
      shortageQuantity: req.body.shortageQuantity,
      actualRecivedQuantity: req.body.actualRecivedQuantity,
      qaInspaction: req.body.qaInspaction,
      returnToVendor: req.body.returnToVendor,
      stockToBetaken: req.body.stockToBetaken,
      vehicleNumber: req.body.vehicleNumber,
      driverName: req.body.driverName,
      qaInspactedName: req.body.qaInspactedName,
      qaInspactionDate: new Date(req.body.qaInspactionDate),
      remark: req.body.remark,
      userId: req.body.userId,
      operationId: req.body.operationId,
      status: true,
      formateNumber: formateNumber.form7,
    }
    const submitDetails = new MATERIAL_DISCREPANCY_REPORTForm(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form5Id: formDetails._id.toString(),
      userId: req.body.userid,
      operationid: req.body.operationid,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Get Packaging_Material_Inspection data by id 
exports.Get_Packaging_Material_Inspection_byId = async (req, res) => {
  try {
    const Packaging_Material_Inspection_Data = await Packaging_Material_InspectionModel.findById(
      {_id:req.params.id}
    ).lean()
    if(Packaging_Material_Inspection_Data){
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data:Packaging_Material_Inspection_Data
      })
    }else{
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data:null
      })
    }
    
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

//Get Packaging_Material_Inspection data by id 
exports.Get_Raw_Material_Inspection_byId = async (req, res) => {
  try {
    const Raw_Material_Inspection_Data = await Raw_Material_InspectionModel.findById(
      {_id:req.params.id}
    ).lean()
    if(Raw_Material_Inspection_Data){
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data:Raw_Material_Inspection_Data
      })
    }else{
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data:null
      })
    }
    
  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}