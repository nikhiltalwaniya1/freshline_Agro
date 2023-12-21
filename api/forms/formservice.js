const materialRequestModel = require("../../model/materialRequest")
const { formName, workStatus, formateNumber, materialType } = require("../../utills/constant")
const usersModel = require("../../model/user")
const formModel = require("../../model/form")

exports.movetonext = async (data) => {
  try{
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
        materialType:data.materialType,
        AdminId:data.createdBy
      }
      const saveMaterialRequest = new materialRequestModel(obj)
      await saveMaterialRequest.save()
      const updateForms = await formModel.updateOne(
        { formname: formName.form3 },
        {
          $set: {
            status: true
          }
        })
    }
    
  }catch(error){
    throw error
  }
}