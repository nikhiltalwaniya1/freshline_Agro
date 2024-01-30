const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const despatchFGSchema = new Schema(
  {
    date: {
      type: Date,
      default: ''
    },
    customerName: {
      type: String,
      default: ''
    },
    driverName: {
      type: String,
      default: ''
    },
    truckNumber: {
      type: String,
      default: ''
    },
    Commodity: {
      type: String,
      default: ''
    },
    invoiceNo: {
      type: String,
      default: ''
    },
    unitWeight: {
      type: String,
      default: ''
    },
    totalWeight: {
      type: String,
      default: ''
    },
    totalUnits: {
      type: String,
      default: ''
    },
    timeOut: {
      type: String,
      default: ''
    },
    destination: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: '',
      ref: "user",
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
    issueNumber: {
      type: String,
      default: ''
    } 
  },
  {
    timestamps: true,
    typecast: true,
  }
)

despatchFGSchema.plugin(mongoosePaginate);
var despatchFGModel = mongoose.model('RST04_Dispatch_Register_For_Finished_Goods', despatchFGSchema);
module.exports = despatchFGModel