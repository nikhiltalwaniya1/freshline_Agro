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
  form3:"FQC01Inward_Vehicle_Checklist", form4:"FPRD01Raw_Material_&_Packaging_Material_Inspection", 
  form5:"FQC06Raw_Material_Release_record", form6:"RQC01Raw_Material_Rejection_Register", 
  form7:"FPRD03MATERIAL_DISCREPANCY_REPORT", form8:"RST02Raw_Material_Stock_and_Issue_Register", 
  form9:"RST03Packing_Material_incoming_Stock_and_Issue_Register" 
  
}

// form10:"", form11:"", form12:"", form12:"", form14:"", form15:"",
//   form16:"", form17:"", form18:"", form19:"", form20:"",
//   form21:"", form22:"", form23:"", form24:"", form25:"",

const workStatus = {
  Not_Done:'Not Done',
  Done:'Done',
  Process:'Process',
  Rejected:'Rejected',
  Accepted:'Accepted'
}

module.exports = {
  statusCode,
  roleType,
  formName,
  workStatus
}
