const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const Packaging_Material_InspectionSchema = new Schema(
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
    physicalInspactionCheckListForPackagingMaterial: {
      type: Object,
      default: {}
    },
    userId: {
      type: String,
      default: ""
    },
    operationId: {
      type: String,
      default: ""
    },
    status:{
      type:Boolean,
      default:false
    },
    formateNumber: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

Packaging_Material_InspectionSchema.plugin(mongoosePaginate);
var Packaging_Material_InspectionModel = mongoose.model('FPRD01Packaging_Material_Inspection', Packaging_Material_InspectionSchema);
module.exports = Packaging_Material_InspectionModel