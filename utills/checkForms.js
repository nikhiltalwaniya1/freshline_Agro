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
    formName: "FPRD01Raw_Material_Inspection_And_Packaging_Material_Inspection",
    path: "/Raw-Material-Inspection-List"
  },
  {
    formName: "FPRD01Verify_Raw_Material_Inspection_And_Packaging_Material_Inspection",
    path: "/Verify-Raw-Material-Inspection"
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
    path: "/materialStockandIssueRegister"

  },
  {
    formName: "FST03Material_Issue_Slip",
    path: "/material-issue-slip"
  },
  {
    formName: "FPRD07Chlorine_Concentration_Record",
    path: "/chlorine-concentration-record "
  },
  {
    formName: "RPRD05Boiler_Temp_Record",
    path: "/boiler-temp-record"
  },
  {
    formName: "RPRD05Belt_Dryer_Temperature_Record",
    path: "/belt-dryer-temperature-record"
  },
  {
    formName: "FPRD02_Work_in_Process_Report_for_Belt_Dryer",
    path: "/belt-dryer-work-report"
  },
  {
    formName: "RPRD04Control_of_Nonconforming_Product_Register",
    path: "/nonconforming-product-register"
  },
  {
    formName: "FPRD14_UV_Light_Monitoring_Record",
    path: "/uv-light-monitoring-record"
  },
  {
    formName: "FQC03Certificate_of_Analysis_COA",
    path: "/certificate-analysis-coa"
  },
  {
    formName: "FPRD13_Line_Clearance_Record_after_Manufacturing",
    path: "/line-clearance-record-manufacturing"
  },
  {
    formName: "FPRD08Daily_Metal_Detector_Test_Log",
    path: "/metal-detector-test"
  },
  {
    formName: "RPRD03Metal_Detecting_Log_Sheet",
    path: "/metal-detecting-log-sheet"
  },
  {
    formName: "FPRD05Finished_Goods_Packing_Report",
    path: "/goods-packing-report"
  },
  {
    formName: "FQC10_Packing_checklist",
    path: "/packing-checklist"
  },
  {
    formName: "FPRD12_Line_Clearance_Record_After_Packing",
    path: "/line-clearance-record-packing"
  },
  {
    formName: "RST04_Dispatch_Register_For_Finished_Goods",
    path: "/register-for-finished-goods"
  },
  {
    formName: "FQC11_outward_Vehicle_Checklist",
    path: "/outward-vehicle-checklist"
  }
]
exports.checkForms = async () => {
  try {
    for (let index = 0; index < formNames.length; index++) {
      const formNameDetails = formNames[index];
      const formDetails = await formModel.findOne({ formname: formNameDetails.formName }).lean();
      if (formDetails === null) {
        let query = {}
        if ((formNameDetails.formName == formName.form1) || (formNameDetails.formName == formName.form2)) {
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
    rolename: "Super Admin",
    roletype: 0
  },
  {
    rolename: "Admin",
    roletype: 1
  },
  {
    rolename: "User",
    roletype: 2
  }
]

exports.checkRole = async () => {
  try {
    for (let index = 0; index < roleName.length; index++) {
      const roleNameDetails = roleName[index];
      const roleDetails = await roleModel.findOne({ rolename: roleNameDetails.rolename }).lean();
      if (roleDetails === null) {
        const obj = {
          rolename: roleNameDetails.rolename,
          roletype: roleNameDetails.roletype
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