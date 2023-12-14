const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const Material_Discrepancy_ReportSchema = new Schema(
  {
    materialName: {
      type: String,
      default: ''
    },
    natureOfDiscrepancy: {
      type: String,
      default: ''
    },
    details: {
      type: Array,
      default: []
    },
    supplierName: {
      type: String,
      default: ''
    },
    invoiceNo: {
      type: String,
      default: ''
    },
    invoiceDate: {
      type: String,
      default: ''
    },
    transporterName: {
      type: String,
      default: ''
    },
    quantity: {
      type: String,
      default: ''
    },
    shortageQuantity: {
      type: String,
      default: ''
    },
    actualRecivedQuantity: {
      type: String,
      default: ''
    },
    qaInspaction: {
      type: Object,
      default: {}
    },
    returnToVendor: {
      type: String,
      default: ''
    },
    repack: {
      type: String,
      default: ''
    },
    stockToBetaken: {
      type: String,
      default: ''
    },
    vehicleNumber: {
      type: String,
      default: ''
    },
    driverName: {
      type: String,
      default: ''
    },
    qaInspactedName: {
      type: String,
      default: ''
    },
    qaInspactionDate: {
      type: Date,
      default: ''
    },
    remark: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: ''
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
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

Material_Discrepancy_ReportSchema.plugin(mongoosePaginate);
var Material_Discrepancy_ReportModel = mongoose.model('FPRD03MATERIAL_DISCREPANCY_REPORT', Material_Discrepancy_ReportSchema);
module.exports = Material_Discrepancy_ReportModel