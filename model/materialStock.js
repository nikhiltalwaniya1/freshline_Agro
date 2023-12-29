const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const materialStockSchema = new Schema(
  {
    materialName: {
      type: String,
      default: ''
    },
    materialType: {
      type: String,
      default: ''
    },
    materialId: {
      type: String,
      default: ''
    },
    recivedStock: {
      type: Number,
      default: 0
    },
    issueStock: {
      type: Number,
      default: 0
    },
    balanceStock: {
      type: Number,
      default: 0
    },
    operationId: {
      type: Number,
      default: 0
    },
    status:{
      type:Boolean,
      default:false
    },
    materialRequeryId:{
      type: String,
      default: '',
      ref: "materialrequest",
    },
    createdBy:{
      type: String,
      default: '',
      ref: "user",
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

materialStockSchema.plugin(mongoosePaginate);
var MaterialStockModel = mongoose.model('materialStock', materialStockSchema);
module.exports = MaterialStockModel