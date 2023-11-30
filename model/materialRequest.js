const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const materialRequestSchema = new Schema(
  {
    status:{
      type: String,
      default: 'Not Done'
    },
    currentAssigneeId:{
      type: Array,
      default: []
    },
    prevAssigneeIds:{
      type: Array,
      default: []
    },
    currentFormName:{
      type: Array,
      default: []
    },
    operationid:{
      type: Number,
      default: 0
    },
    form1Id:{
      type: String,
      ref:"FPRD04Production_Schedule"
    },
    form2Id:{
      type: String,
      ref:"RST01Raw_Material_Incoming_Register"
    },
    form3Id:{
      type: String,
      ref:"FQC01Inward_Vehicle_Checklist"
    },
    form4Id:{
      type: String,
      ref:"FPRD01Raw_Material_&_Packaging_Material_Inspection"
    },
    form5Id:{
      type: String,
      ref:"FQC06Raw_Material_Release_record"
    },
    form6Id:{
      type: String,
      ref:"RQC01Raw_Material_Rejection_Register"
    },
  },
  {
    timestamps: true,
    typecast: true,
  }
)

materialRequestSchema.plugin(mongoosePaginate);
var materialRequestModel = mongoose.model('materialrequest', materialRequestSchema);
module.exports = materialRequestModel