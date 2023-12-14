const materialRequestModel = require("../../model/materialRequest")
const { formName, workStatus, formateNumber } = require("../../utills/constant")
const usersModel = require("../../model/user")
const formModel = require("../../model/form")
exports.movetonext = async (data) => {
  try {
    let query = {}
    if (data.formName == formName.form1) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form2 }, { _id: 1 }).lean()
      let obj = {
        status: data.status,
        currentAssigneeId: userId,
        currentFormName: formName.form2,
        form1Id: data.form1Id,
        operationid: data.operationid,
        prevAssigneeIds: [data.userId]
      }
      const saveMaterialRequest = new materialRequestModel(obj)
      await saveMaterialRequest.save()
      const updateForms = await formModel.updateOne(
        { formname: formName.form2 },
        {
          $set: {
            status: true
          }
        })
      return Promise.resolve()
    }
    if (data.formName == formName.form2) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form3 }, { _id: 1 }).lean()
      query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form3,
          form2Id: data.form2Id,
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      };
      
      const updateForms = await formModel.updateOne(
        { formname: formName.form3 },
        {
          $set: {
            status: true
          }
        })
    }
    if (data.formName == formName.form3) {
      // const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": { $in: [formName.form4_1, formName.form4_2]} }, { _id: 1 }).lean()
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
      // const updateForms = await formModel.updateMany(
      //   { formname: { $in: [formName.form4_1, formName.form4_2] } },
      //   {
      //     $set: {
      //       status: true
      //     }
      //   }
      // );
            
    }
    if (data.formName == formName.form4_1) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form4_1_b }, { _id: 1 }).lean()
      query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form4_1_b,
          form4_1Id: data.form4Id,
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateForms = await formModel.updateOne(
        { formname: formName.form4_1_b },
        {
          $set: {
            status: true
          }
        })
    }
    if (data.formName == formName.form4_2) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": formName.form4_2_b }, { _id: 1 }).lean()
      query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: formName.form4_2_b,
          form4_2Id: data.form4Id,
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateForms = await formModel.updateOne(
        { formname: formName.form4_2_b },
        {
          $set: {
            status: true
          }
        })
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
      const updateForms = await formModel.updateOne(
        { formname: formName.form6 },
        {
          $set: {
            status: true
          }
        })
    }
    if (data.workStatus == workStatus.Accepted) {
      const userId = await usersModel.find({ "details.submenuDetails.formDetails.formname": { $in: [formName.form4_1, formName.form4_2]} }, { _id: 1 }).lean()
      query = {
        $set: {
          currentAssigneeId: userId,
          currentFormName: [formName.form4_1,formName.form4_2],
          status: workStatus.Accepted
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
      const updateForms = await formModel.updateMany(
        { formname: { $in: [formName.form4_1, formName.form4_2] } },
        {
          $set: {
            status: true
          }
        }
      );
      
    }
    if (data.formName == formName.form6) {
      query = {
        $set: {
          currentAssigneeId: "",
          currentFormName: "",
          form6Id: data.form6Id,
          status:workStatus.Rejected
        },
        $push: {
          prevAssigneeIds: data.userId
        }
      }
    //   const updateForms = await formModel.updateOne(
    //     { formname: formName.form5 },
    //     {
    //       $set: {
    //         status: true
    //       }
    //     })
    }
    if (data.formName == formName.form4_1_b){
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
    if (data.formName == formName.form4_2_b){
      //Need to implemet next lavel logic in this section
    }
    if (data.formName == formName.form5){
      //Need to implemet next lavel logic in this section
    }
    if (data.formName == formName.form7){
      //Need to implemet next lavel logic in this section
    }
    const updateMaterialRequest = await materialRequestModel.updateOne(
      { operationid: data.operationid },
      query
    )
    return Promise.resolve()
  } catch (error) {
    throw error
  }
}