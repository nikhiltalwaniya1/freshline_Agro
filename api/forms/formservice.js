const materialRequestModel = require("../../model/materialRequest")
const { formName, workStatus, formateNumber, materialType } = require("../../utills/constant")
const usersModel = require("../../model/user")
const formModel = require("../../model/form")
const materialStockModel = require("../../model/materialStock")
const materialIssueRequestModel = require("../../model/materialIssueRequest")

exports.movetonext = async (data) => {
  try {
    if (data.formName == formName.form2) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form3 }, { _id: 1 }).lean()
      let obj = {
        status: data.status,
        currentAssigneeId: userId,
        currentFormName: formName.form3,
        form2Id: data.form2Id,
        operationid: data.operationid,
        materialId: data.materialId,
        prevAssigneeIds: [data.userId],
        materialType: data.materialType,
        AdminId: data.createdBy
      }
      const saveMaterialRequest = new materialRequestModel(obj)
      const materialDetails = await saveMaterialRequest.save()
      let objOfMaterialDetails = {
        materialName: data.materialName,
        materialId: data.materialId,
        materialType: data.materialType,
        recivedStock: data.materialQuantity,
        balanceStock: data.materialQuantity,
        operationId: data.operationid,
        materialRequeryId: materialDetails._id.toString(),
        createdBy: data.createdBy,
        dates: data.dates
      }
      const saveMaterialStock = new materialStockModel(objOfMaterialDetails)
      await saveMaterialStock.save()
      const updateForms = await formModel.updateOne(
        { formname: formName.form3 },
        {
          $set: {
            status: true
          }
        })
      return Promise.resolve()
    }
    if (data.formName == formName.form3) {
      let query = {
        $set: {
          currentAssigneeId: [],
          currentFormName: [],
          form3Id: data.form3Id,
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateMaterialRequest = await materialRequestModel.updateOne(
        { materialId: data.materialId },
        query
      )
      return Promise.resolve()
    }
    if (data.workStatus == workStatus.Accepted) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form4_1 }, { _id: 1 }).lean()
      let query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: [formName.form4_1],
          status: workStatus.Accepted
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateMaterialRequest = await materialRequestModel.updateOne(
        { materialId: data.materialId },
        query
      )
      const updateStockStatus = await materialStockModel.updateOne(
        { materialId: data.materialId },
        {
          $set: {
            status: true
          }
        }
      )
      const updateForms = await formModel.updateMany(
        { formname: { $in: [formName.form4_1] } },
        {
          $set: {
            status: true
          }
        }
      );
      return Promise.resolve()
    }
    if (data.workStatus == workStatus.Rejected) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form6 }, { _id: 1 }).lean()
      let query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form6,
          status: workStatus.Rejected
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateMaterialRequest = await materialRequestModel.updateOne(
        { materialId: data.materialId },
        query
      )
      const updateStockStatus = await materialStockModel.updateOne(
        { materialId: data.materialId },
        {
          $set: {
            stautus: false
          }
        }
      )
      const updateForms = await formModel.updateOne(
        { formname: formName.form6 },
        {
          $set: {
            status: true
          }
        })
    }
    if (data.formName == formName.form4_1) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form4_2 }, { _id: 1 }).lean()
      let query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form4_2,
          form4_1Id: data.form4Id,
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateMaterialRequest = await materialRequestModel.updateOne(
        { materialId: data.materialId },
        query
      )
      const updateForms = await formModel.updateOne(
        { formname: formName.form4_2 },
        {
          $set: {
            status: true
          }
        })
      return Promise.resolve()
    }
    if (data.formName == formName.form4_2) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form5 }, { _id: 1 }).lean()
      let query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form5
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateMaterialRequest = await materialRequestModel.updateOne(
        { materialId: data.materialId },
        query
      )
      const updateForms = await formModel.updateOne(
        { formname: formName.form5 },
        {
          $set: {
            status: true
          }
        })
      return Promise.resolve()
    }
    if (data.formName == formName.form6) {
      let query = {
        $set: {
          currentAssigneeId: "",
          currentFormName: "",
          form6Id: data.form6Id,
          status: workStatus.Rejected
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateMaterialRequest = await materialRequestModel.updateOne(
        { materialId: data.materialId },
        query
      )
    }
    if (data.formName == formName.form5) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form8 }, { _id: 1 }).lean()
      let query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form8,
          form5Id: data.form5Id,
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateMaterialRequest = await materialRequestModel.updateOne(
        { materialId: data.materialId },
        query
      )
      const updateForms = await formModel.updateOne(
        { formname: formName.form8 },
        {
          $set: {
            status: true
          }
        })
      return Promise.resolve()
    }
    if (data.formName == formName.form7) {
      let query = {
        $set: {
          form7Id: data.form7Id,
        }
      }
      const updateMaterialRequest = await materialRequestModel.updateOne(
        { materialId: data.materialId },
        query
      )
      return Promise.resolve()
    }
    if (data.formName == formName.form8) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form9 }, { _id: 1 }).lean()
      let obj = {
        currentAssigneeId: userId,
        currentFormName: formName.form9,
        form8Id: data.form8Id,
        issueNumber: data.issueId,
        materialType: data.materialType,
        createdBy: data.createdBy,
        prevAssigneeIds: data.userId
      }
      const saveIssueMaterialList = new materialIssueRequestModel(obj)
      await saveIssueMaterialList.save()
      const updateForms = await formModel.updateOne(
        { formname: formName.form9 },
        {
          $set: {
            status: true
          }
        })
      return Promise.resolve()
    }
    if (data.formName == formName.form9) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form10 }, { _id: 1 }).lean()
      let query = {
        $set: {
          currentFormName: formName.form10,
          form9Id: data.form9Id,
        },
        $push: {
          prevAssigneeIds: data.userId,
          currentAssigneeId: data.materialissueto,
        }
      }
      const updateMaterialRequest = await materialIssueRequestModel.updateOne(
        { issueNumber: data.issueNumber },
        query
      )
      const updateForms = await formModel.updateOne(
        { formname: formName.form10 },
        {
          $set: {
            status: true
          }
        })
      return Promise.resolve()
    }
  } catch (error) {
    throw error
  }
}