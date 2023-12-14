const statusCode = {
  success: 200,
  error: 500,
  unauthorised:401
}

const roleType = {
  super_admin:0,
  admin:1,
  user:2
}

const formName = {
  form1:"FPRD04Production_Schedule", form2:"RST01Raw_Material_Incoming_Register", 
  form3:"FQC01Inward_Vehicle_Checklist", form4_1:"FPRD01Raw_Material_Inspection", 
  form4_1_a:"FPRD01_Physical_Checklist_Specifications_for_vegetables", 
  form4_1_b:"FPRD01Verify_Raw_Material_Inspection",form4_2:"FPRD01Packaging_Material_Inspection",form4_2_a:"FPRD01_Physical_Checklist_Specifications_for_Packing material",
  form4_2_b:"FPRD01Verify_Packaging_Material_Inspection",
  form5:"FQC06Raw_Material_Release_record", form6:"RQC01Raw_Material_Rejection_Register", 
  form7:"FPRD03MATERIAL_DISCREPANCY_REPORT", form8:"RST02Raw_Material_Stock_and_Issue_Register", 
  form9:"RST03Packing_Material_incoming_Stock_and_Issue_Register",
  form9:"RST03Packing_Material_incoming_Stock_and_Issue_Register",
  form10:"FST03Material_Issue_Slip", form11:"FPRD07Chlorine_Concentration_Record", form12:"FPRD02_Work_in_Process_Report_for_Belt Dryer", form12:"RPRD05Boiler_Temp_Record", form14:"RPRD05Belt_Dryer_Temperature_Record", form15:"RPRD04Control_of_Nonconforming_Product_Register",
  form16:"FPRD14_UV_Light_Monitoring_Record", form17:"FQC03Certificate_of_Analysis_COA", form18:"FPRD13_Line_Clearance_Record_after_Manufacturing", form19:"FPRD08Daily_Metal_Detector_Test_Log", form20:"RPRD03Metal_Detecting_Log_Sheet",
  form21:"FPRD05Finished_Goods_Packing_Report", form22:"FQC10_Packing_checklist", form23:"FPRD12_Line_Clearance_Record_After_Packing", form24:"RST04_Dispatch_Register_For_Finished_Goods", form25:"FQC11_outward_Vehicle_Checklist",
}

const workStatus = {
  Not_Done:'Not Done',
  Done:'Done',
  Process:'Process',
  Rejected:'Rejected',
  Accepted:'Accepted'
}

const formateNumber = {
  form1:"F/PRD/04 Rev.00/ 01.07.2022",  form2:"R/ST/01 Rev.00/ 01.07.2021",
  form3:"F/QC/01 Rev.00/ 01.07.2021",  form4:"F/PRD/01 Rev.00/ 01.07.2021",
  form5:"F/QC/06Rev.00/ 01.07.2021",  form6:"R/QC/01 Rev.00/ 01.07.2021",
  form7:"F/PRD/03 Rev.00/ 01.07.2021",  form8:"R/ST/02 Rev.00/ 01.07.2021",
  form9:"R/ST/03 Rev.00/ 01.07.2021",  form10:"F/ST/03 Rev.00/ 01.07.2021",
  form11:"F/PRD/07 Rev.00/ 01.07.2022",  form12:"F/PRD/Dehy-B/02 Rev.00/ 01.10.2022",
  form13:"F/PRD/05 Rev.00/ 01.10.2022",  form14:"R/PRD/06 Rev.00/ 01.10.2022",
  form15:"R/PRD/04 Rev.00/ 01.07.2021",  form16:"F/PRD/14Rev.00/ 01.07.2022",
  form17:"F/QC/03Rev.00/ 01.07.2022",  form18:"F/PRD/13 Rev.00/01.07.2022",
  form19:"F/PRD/08Rev.00/ 01.07.2022",  form20:"R/PRD/03 Rev.00/ 01.07.2021",
  form21:"F/PRD/05Rev.00/ 01.07.2022",  form22:"F/QC/10Rev.00/ 01.07.2022",
  form23:"F/PRD/12 Rev.00/01.07.2022",  form24:"R/ST/04 Rev.00/ 01.07.2021",
  form25:"F/QC/11 Rev.00/ 01.07.2022"
}

module.exports = {
  statusCode,
  roleType,
  formName,
  workStatus,
  formateNumber
}
