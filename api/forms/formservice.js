const materialRequestModel = require("../../model/materialRequest")
const { formName, workStatus, formateNumber, materialType } = require("../../utills/constant")
const usersModel = require("../../model/user")
const formModel = require("../../model/form")
const materialStockModel = require("../../model/materialStock")
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
        createdBy:data.createdBy
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
      return
    }
    if (data.formName == formName.form3) {
      query = {
        $set: {
          currentAssigneeId: [],
          currentFormName: [],
          form3Id: data.form3Id,
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
    }
    if (data.workStatus == workStatus.Accepted) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form4_1 }, { _id: 1 }).lean()
      query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: [formName.form4_1],
          status: workStatus.Accepted
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateStockStatus = await materialStockModel.updateOne(
        { operationid: data.operationid },
        {
          $set: {
            stautus: true
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
    }
    if (data.workStatus == workStatus.Rejected) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form6 }, { _id: 1 }).lean()
      query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form6,
          status: workStatus.Rejected
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateStockStatus = await materialStockModel.updateOne(
        { operationid: data.operationid },
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
      query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form4_2,
          form4_1Id: data.form4Id,
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateForms = await formModel.updateOne(
        { formname: formName.form4_2 },
        {
          $set: {
            status: true
          }
        })
    }
    if (data.formName == formName.form4_2) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form5 }, { _id: 1 }).lean()
      query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form5
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateForms = await formModel.updateOne(
        { formname: formName.form5 },
        {
          $set: {
            status: true
          }
        })
    }
    if (data.formName == formName.form6) {
      query = {
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
    }
    if (data.formName == formName.form5) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form8 }, { _id: 1 }).lean()
      query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form8,
          form5Id: data.form5Id,
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateForms = await formModel.updateOne(
        { formname: formName.form8 },
        {
          $set: {
            status: true
          }
        })
    }
    if (data.formName == formName.form7) {
      query = {
        $set: {
          form7Id: data.form7Id,
        }
      }
    }
    if (data.formName == formName.form8) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form9 }, { _id: 1 }).lean()
      query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form9,
          form8Id: data.form8Id,
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateForms = await formModel.updateOne(
        { formname: formName.form9 },
        {
          $set: {
            status: true
          }
        })
    }
    console.log("query", query);
    console.log("data.operationid", data.operationid);
    const updateMaterialRequest = await materialRequestModel.updateOne(
      { operationid: data.operationid },
      query
    )
    return Promise.resolve()
  } catch (error) {
    throw error
  }
}