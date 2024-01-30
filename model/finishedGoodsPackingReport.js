const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const finshingGoodsSchema = new Schema(
  {
    packingDate: {
      type: Date,
      default: ''
    },
    productName: {
      type: String,
      default: ''
    },
    shift: {
      type: String,
      default: ''
    },
    totalProduction: {
      type: String,
      default: ''
    },
    batchNo: {
      type: String,
      default: ''
    },
    moisture: {
      type: String,
      default: ''
    },
    emptyBagWeight: {
      type: String,
      default: ''
    },
    netFGWeight: {
      type: String,
      default: ''
    },
    grossWeight: {
      type: String,
      default: ''
    },
    emptyHDPEWeight: {
      type: String,
      default: ''
    },
    noOfBag: {
      type: String,
      default: ''
    },
    balanceQuantity: {
      type: String,
      default: ''
    },
    noOfHDPEBags: {
      type: String,
      default: ''
    },
    fgWastage: {
      type: String,
      default: ''
    },
    packingMaterialWastage: {
      type: String,
      default: ''
    },
    scaningMatelDetector: {
      type: String,
      default: ''
    },
    dispatch: {
      type: String,
      default: ''
    },
    balanceNoOfBag: {
      type: String,
      default: ''
    },
    supervisorName: {
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

finshingGoodsSchema.plugin(mongoosePaginate);
var finshingGoodsModel = mongoose.model('FPRD05Finished_Goods_Packing_Report', finshingGoodsSchema);
module.exports = finshingGoodsModel