const formModel = require("../model/form")
const { formName } = require("../utills/constant")
const roleModel = require("../model/role")
const formNames = [
  {
    formName: "FPRD04Production_Schedule",
    path: "/productionSchedule"
  },
  {
    formName: "RST01Raw_Material_Incoming_Register",
    path: "/rawMaterialIncomingRegister"

  },
  {
    formName: "FQC01Inward_Vehicle_Checklist",
    path: "/inwardVehicleChecklist"

  },
  {
    formName: "FPRD01Raw_Material_&_Packaging_Material_Inspection",
    path: "/materialInspection"
  },
  {
    formName: "FQC06Raw_Material_Release_record",
    path: "/rawMaterialReleaseRecord"

  },
  {
    formName: "RQC01Raw_Material_Rejection_Register",
    path: "/rawMaterialRejectionRegister"

  },
  {
    formName: "FPRD03MATERIAL_DISCREPANCY_REPORT",
    path: "/materialDiscrepancyReport"

  },
  {
    formName: "RST02Raw_Material_Stock_and_Issue_Register",
    path: "/rawMaterialIssueRegister"

  },
  {
    formName: "RST03Packing_Material_incoming_Stock_and_Issue_Register",
    path: "/packingMaterialIssueRegister"
  }
]
exports.checkForms = async () => {
  try {
    for (let index = 0; index < formNames.length; index++) {
      const formNameDetails = formNames[index];
      const formDetails = await formModel.findOne({ formname: formNameDetails.formName }).lean();
      if (formDetails === null) {
        let query = {}
        if (formNameDetails.formName == formName.form1) {
          query = {
            formname: formNameDetails.formName,
            path: formNameDetails.path,
            status: true
          }
        } else {
          query = {
            formname: formNameDetails.formName,
            path: formNameDetails.path
          }
        }
        const saveForm = new formModel(query)
        await saveForm.save()
      }
    }
    return Promise.resolve()
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const roleName = [
  {
    rolename:"Super Admin",
    roletype:0
  },
  {
    rolename:"Admin",
    roletype:1
  },
  {
    rolename:"User",
    roletype:2
  }
]

exports.checkRole = async () => {
  try {
    for (let index = 0; index < roleName.length; index++) {
      const roleNameDetails = roleName[index];
      const roleDetails = await roleModel.findOne({ rolename: roleNameDetails.rolename }).lean();
      if (roleDetails === null) {
        const obj = {
          rolename:roleNameDetails.rolename,
          roletype:roleNameDetails.roletype
        }
        const saveRole = new roleModel(obj)
        await saveRole.save()
      }
    }
    return Promise.resolve()
  } catch (error) {
    console.error(error);
    throw error;
  }
};