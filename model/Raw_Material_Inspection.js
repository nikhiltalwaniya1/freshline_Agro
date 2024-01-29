const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const Raw_Material_and_Packaging_Material_InspectionSchema = new Schema(
  {
    materialName: {
      type: String,
      default: ''
    },
    doneBy: {
      type: String,
      default: '',
      ref:"user"
    },
    checkedBy: {
      type: String,
      default: '',
      ref:"user"
    },
    invoiceNo: {
      type: String,
      default: ''
    },
    dates: {
      type: Date,
      default: ''
    },
    invoiceDate: {
      type: String,
      default: ''
    },
    documentVerification: {
      type: Object,
      default: {}
    },
    preUnloadingOperation: {
      type: Object,
      default: {}
    },
    unloadingOperation: {
      type: Object,
      default: {}
    },
    weighingOperation: {
      type: Object,
      default: {}
    },
    physicalInspactionCheckListForVeg: {
      type: Object,
      default: {}
    },
    userId: {
      type: String,
      default: '',
      ref: "user",
    },
    operationId: {
      type: String,
      default: ''
    },
    status:{
      type:Boolean,
      default:false
    },
    formateNumber: {
      type: String,
      default: ''
    },
    createdBy:{
      type: String,
      default: '',
      ref: "user",
    },
    physicalInspactionCheckListForPackagingMaterial: {
      type: Object,
      default: {}
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

Raw_Material_and_Packaging_Material_InspectionSchema.plugin(mongoosePaginate);
var Raw_Material_and_Packaging_Material_InspectionModel = mongoose.model('FPRD01Raw_Material_Inspection', Raw_Material_and_Packaging_Material_InspectionSchema);
module.exports = Raw_Material_and_Packaging_Material_InspectionModel