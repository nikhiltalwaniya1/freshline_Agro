const { statusCode, workStatus, formName, formateNumber, materialType } = require("../../utills/constant")
const message = require("../../utills/message")
const { generateUniqueNumber, createRendomId } = require("../../utills/utill")
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
const Raw_Material_Release_recordForm = require("../../model/Raw_Material_Release_record")
const MATERIAL_DISCREPANCY_REPORTForm = require("../../model/Material_Discrepancy_Report")
const formModel = require("../../model/form")
const MaterialStockAndIssueRegistredModels = require("../../model/Raw_Material_Stock_and_Issue_Register")
const MaterialStockModel = require("../../model/materialStock")
const materialissueslip = require("../../model/materialIssueSlip")
const chlorineConcentrationModel = require("../../model/chlorineConcentrationRecord")
const boilerTempRecordModel = require("../../model/boilertemprecord")
const beltTempRecordModel = require("../../model/beltTempRecord")
const materialIssueRequestModel = require("../../model/materialIssueRequest")

exports.createforms = async (req, res) => {
  try {
    const saveForm = new formListModel({
      formname: req.body.formName,
      menuid: req.body.menuId,
      submenuid: req.body.submenuId,
      createdBy: req.decoded._id
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
    const obj = {
      productionitem: req.body.productionitem,
      productiontype: req.body.productiontype,
      machineinprocess: req.body.machineinprocess,
      quantity: req.body.quantity,
      duedate,
      dates,
      dates,
      supervisor: req.body.supervisor,
      status: true,
      formateNumber: formateNumber.form1,
      createdBy: req.decoded._id
    }

    const productionScheduleForm = new production_Schedule_Form(obj)
    const formDetails = await productionScheduleForm.save()
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
    let str = ''
    const firstThreeDigitOfmaterialType = req.body.itemname.substring(0, 3)

    if (req.body.materialType == materialType.Raw_Material) {
      str = `R/${firstThreeDigitOfmaterialType}`
    }
    if (req.body.materialType == materialType.Packaging_Material) {
      str = `P/${firstThreeDigitOfmaterialType}`
    }
    const materialId = await createRendomId(str)
    const operationid = await generateUniqueNumber()
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
      operationid: operationid,
      status: true,
      formateNumber: formateNumber.form2,
      createdBy: req.decoded._id,
      supplierName: req.body.supplierName,
      supplierId: req.body.supplierId
    }
    const submitDetails = new Raw_Material_Incoming_RegisterForm(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form2Id: formDetails._id.toString(),
      userId: req.body.userid,
      operationid: operationid,
      formName: req.body.formName,
      materialType: req.body.materialType,
      materialId: materialId,
      createdBy: req.decoded.createdBy,
      materialQuantity: req.body.quantity,
      materialName: req.body.itemname,
      balanceStock: req.body.quantity,
      dates
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
      status: true,
      formateNumber: formateNumber.form3
    }
    const submitDetails = new Inward_Vehicle_ChecklistForm(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form3Id: formDetails._id.toString(),
      userId: req.body.userid,
      materialId: req.body.materialId,
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
      materialId: req.body.materialId,
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
      userId: req.body.userId,
      materialId: req.body.materialId,
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
    const formNames = req.body.formName;
    let userIdObject;
    try {
      userIdObject = new ObjectId(userId);
    } catch (error) {
      console.error("Invalid userId format:", error);
      return res.status(statusCode.error).send({
        message: "Invalid userId format"
      });
    }
    let query = {}
    if (formNames == formName.form6) {
      query = {
        $or: [
          { "currentAssigneeId._id": userIdObject },
          { "prevAssigneeIds": { $in: userId } },
          { "currentFormName": { $in: formNames } }
        ],
        status: workStatus.Rejected
      };
    } else {
      query = {
        $or: [
          { "currentAssigneeId._id": userIdObject },
          { "prevAssigneeIds": { $in: userId } },
          { "currentFormName": { $in: formNames } }
        ],
      };
    }
    const requestDetails = await materialRequestModel.find(query)
      .populate('form1Id')
      .populate('form2Id')
      .populate('form3Id')
      .populate('form4_1Id')
      .populate('form5Id')
      .populate('form6Id')
      .populate('form7Id')
      .sort({ createdAt: -1 })
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
      invoiceNo: req.body.invoiceno,
      invoiceDate: new Date(req.body.invoiceDate),
      documentVerification: req.body.documentVerification,
      preUnloadingOperation: req.body.preUnloadingOperation,
      unloadingOperation: req.body.unloadingOperation,
      weighingOperation: req.body.weighingOperation,
      physicalInspactionCheckListForVeg: req.body.physicalInspactionCheckListForVeg,
      userid: req.body.userid,
      doneBy: req.body.userid,
      operationId: req.body.operationid,
      status: true,
      formateNumber: formateNumber.form4,
      physicalInspactionCheckListForPackagingMaterial: req.body.physicalInspactionCheckListForPackagingMaterial
    }
    const submitDetails = new Raw_Material_InspectionModel(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form4Id: formDetails._id.toString(),
      userId: req.body.userid,
      materialId: req.body.materialId,
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
      status: req.body.status,
      reasonOfRejection: req.body.reasonOfRejection,
      operationid: req.body.operationId,
      status: true
    }
    const submitDetails = new Raw_Material_Rejection_RegisterForm(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form6Id: formDetails._id.toString(),
      userId: req.body.userId,
      materialId: req.body.materialId,
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
      { _id: req.body.id },
      { $set: obj }
    )
    let obj1 = {
      formName: req.body.formName,
      userId: req.body.userid,
      materialId: req.body.materialId,
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
      form5Id: formDetails._id.toString(),
      userId: req.body.userId,
      materialId: req.body.materialId,
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
      materialRemarks: req.body.materialRemarks,
      materialQty: req.body.materialQty,
      materialReceivedDate: new Date(req.body.materialReceivedDate),
      materialId: req.body.materialId,
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
      form7Id: formDetails._id.toString(),
      userId: req.body.userId,
      materialId: req.body.materialId,
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
exports.Get_Raw_Material_Inspection_byId = async (req, res) => {
  try {
    const Raw_Material_Inspection_Data = await Raw_Material_InspectionModel.findById(
      { _id: req.params.id }
    ).lean()
    if (Raw_Material_Inspection_Data) {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: Raw_Material_Inspection_Data
      })
    } else {
      return res.status(statusCode.success).send({
        message: message.SUCCESS,
        data: null
      })
    }

  } catch (error) {
    console.log("error in raw_material_incoming_register function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.MaterialStockAndIssueRegistred = async (req, res) => {
  try {
    const date = new Date(req.body.date);
    const createdBy = req.decoded.createdBy;
    const firstThreeDigitOfmaterialType = req.body.materialName.substring(0, 3);
    let str = `I/${firstThreeDigitOfmaterialType}`;
    const issueNumber = await createRendomId(str);
    const materialStockDetails = await MaterialStockModel.find({
      materialType: req.body.materialType,
      materialName: req.body.materialName,
      status: true,
      balanceStock: { $gt: 0 },
      createdBy: createdBy
    })
      .populate('materialRequeryId')
      .lean();
    let remainingIssueQuantity = req.body.issueQuantity;
    let materialId = [];
    let operationId = [];
    let availableStock = 0;

    if (materialStockDetails && materialStockDetails.length > 0) {
      for (let index = 0; index < materialStockDetails.length; index++) {
        const stockDetails = materialStockDetails[index];
        availableStock += stockDetails.balanceStock;
      }
    }

    if (remainingIssueQuantity > availableStock) {
      return res.status(statusCode.error).send({
        message: 'Insufficient stock to fulfill the request.'
      });
    }

    if (materialStockDetails && materialStockDetails.length > 0) {
      for (let index = 0; index < materialStockDetails.length; index++) {
        const stockDetails = materialStockDetails[index];
        const deductionQuantity = Math.min(stockDetails.balanceStock, remainingIssueQuantity);

        stockDetails.balanceStock -= deductionQuantity;

        materialId.push(stockDetails.materialId);
        operationId.push(stockDetails.materialRequeryId.operationid);

        const updateStock = await MaterialStockModel.updateOne(
          { _id: stockDetails._id },
          {
            $inc: {
              issueStock: deductionQuantity,
              balanceStock: -deductionQuantity
            }
          }
        );

        remainingIssueQuantity -= deductionQuantity;

        if (remainingIssueQuantity <= 0) {
          break; // Issue quantity deducted completely
        }
      }
    }

    let obj = {
      materialName: req.body.materialName,
      materialType: req.body.materialType,
      issueNumber: issueNumber,
      materialId: materialId,
      issueStock: req.body.issueQuantity,
      operationId: operationId,
      formateNumber: formateNumber.form8,
      createdBy: createdBy,
      userId: req.decoded._id,
      date: date,
      status: true
    }

    const saveMaterialStockAndIssueRegistered = new MaterialStockAndIssueRegistredModels(obj)
    const formDetails = await saveMaterialStockAndIssueRegistered.save()
    let obj1 = {
      form8Id: formDetails._id.toString(),
      userId: req.body.userId,
      operationid: req.body.operationId,
      formName: req.body.formName,
      materialId: materialId,
      issueId: issueNumber,
      materialType: req.body.materialType,
      createdBy: createdBy,
    }
    await movetonext(obj1)
    // Respond with success message or data
    return res.status(statusCode.success).send({
      message: 'Material Issue successfully.'
      // Any additional data you want to send
    });

  } catch (error) {
    console.log("error in Material Stock And Issue Registred function ========", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    });
  }
};

exports.materialSearchByName = async (req, res) => {
  try {
    const createdBy = req.decoded.createdBy
    const materialDetails = await MaterialStockModel.find({
      materialName: req.body.materialName,
      status: true,
      balanceStock: { $gt: 0 },
      createdBy: createdBy
    })
      .populate('materialRequeryId')
      .lean()
    return res.status(statusCode.success).send({
      message: message.SUCCESS,
      data: materialDetails
    })
  } catch (error) {
    console.log("error in Material Stock And Issue Registred function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.materialStockList = async (req, res) => {
  try {
    const createdBy = req.decoded.createdBy
    const materialDetails = await MaterialStockModel.find({
      status: true,
      balanceStock: { $gt: 0 },
      createdBy: createdBy
    })
      .populate('materialRequeryId')
      .lean()
    return res.status(statusCode.success).send({
      message: message.SUCCESS,
      data: materialDetails
    })
  } catch (error) {
    console.log("error in Material Stock And Issue Registred function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.materialissueslip = async (req, res) => {
  try {
    const createdBy = req.decoded.createdBy;
    const dates = new Date(req.body.date)
    let obj = {
      dates,
      materialissueto: req.body.materialIssueTo,
      materialdescription: req.body.materialdescription,
      quantity: req.body.quantity,
      remark: req.body.remark,
      issueNumber: req.body.issueNumber,
      userId: req.body.userId,
      approvedBy: req.body.approvedBy,
      issuedBy: req.body.issuedBy,
      formateNumber: formateNumber.form10,
      status: true,
      createdBy: createdBy
    }
    const submitDetails = new materialissueslip(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form9Id: formDetails._id.toString(),
      userId: req.body.userId,
      issueNumber: req.body.issueNumber,
      formName: req.body.formName,
      materialissueto: req.body.materialIssueTo
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in material issue slip function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.createChlorineConcentration = async (req, res) => {
  try {
    const dates = new Date(req.body.date)
    let obj = {
      dates,
      issueId: req.body.issueId,
      concentrationPPM: req.body.concentrationPPM,
      chlorineStripTest: req.body.chlorineStripTest,
      remark: req.body.remark,
      operationid: req.body.operationid,
      userId: req.body.userId,
      approvedBy: req.body.approvedBy,
      NC: req.body.NC,
      correctiveAction: req.body.correctiveAction,
      formateNumber: formateNumber.form11,
      status: true
    }
    const submitDetails = new chlorineConcentrationModel(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form10Id: formDetails._id.toString(),
      userId: req.body.userId,
      operationid: req.body.operationId,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in material issue slip function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.createBoilerTemperatureRecord = async (req, res) => {
  try {
    const dates = new Date(req.body.date)
    let obj = {
      dates,
      time: new Date(req.body.time),
      inTemp: req.body.inTemp,
      outTemp: req.body.outTemp,
      storeTemp: req.body.storeTemp,
      bdInletTemp: req.body.bdInletTemp,
      boilerMeterReading: req.body.boilerMeterReading,
      tempSetting: req.body.tempSetting,
      gasReading: req.body.gasReading,
      Action: req.body.Action,
      remark: req.body.remark,
      operationid: req.body.operationid,
      userId: req.body.userId,
      approvedBy: req.body.approvedBy,
      NC: req.body.NC,
      formateNumber: formateNumber.form11,
      status: true
    }
    const submitDetails = new boilerTempRecordModel(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form11Id: formDetails._id.toString(),
      userId: req.body.userId,
      operationid: req.body.operationId,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in material issue slip function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.createBeltDryerTempRecord = async (req, res) => {
  try {
    const dates = new Date(req.body.date)
    let obj = {
      dates,
      time: new Date(req.body.time),
      inletTemp: req.body.inletTemp,
      belt1: req.body.belt1,
      belt2: req.body.belt2,
      belt3: req.body.belt3,
      belt4: req.body.belt4,
      belt5: req.body.belt5,
      Action: req.body.Action,
      remark: req.body.remark,
      operationid: req.body.operationid,
      userId: req.body.userId,
      approvedBy: req.body.approvedBy,
      NC: req.body.NC,
      formateNumber: formateNumber.form12,
      status: true
    }
    const submitDetails = new beltTempRecordModel(obj)
    const formDetails = await submitDetails.save()
    let obj1 = {
      form12Id: formDetails._id.toString(),
      userId: req.body.userId,
      operationid: req.body.operationId,
      formName: req.body.formName,
    }
    await movetonext(obj1)
    return res.status(statusCode.success).send({
      message: message.SUCCESS
    })
  } catch (error) {
    console.log("error in material issue slip function ========", error)
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    })
  }
}

exports.materialIssueRequestListById = async (req, res) => {
  try {
    const userId = req.body.userid;
    const formNames = req.body.formName;
    let query = {
      $or: [
        { "currentAssigneeId": { $in: userId } },
        { "prevAssigneeIds": { $in: userId } }
      ]
    }
    const issueList = await materialIssueRequestModel.find(query)
      .populate('form8Id')
      .populate({
        path:'form9Id',
        populate:{
          path:'materialissueto',
          select:'name'
        }
      })
      .sort({ createdAt: -1 })
      .lean();
    return res.status(statusCode.success).send({
      message: message.SUCCESS,
      data: issueList
    });
  } catch (error) {
    console.log("Error in materialRequestListById function:", error);
    return res.status(statusCode.error).send({
      message: message.SOMETHING_WENT_WRONG
    });
  }
};