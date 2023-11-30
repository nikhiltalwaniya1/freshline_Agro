const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const Raw_Material_Rejection_RegisterSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    invoiceNo: {
      type: String,
      default: ''
    },
    supplier: {
      type: String,
      default: ''
    },
    pono: {
      type: String,
      default: ''
    },
    valueOfProduct: {
      type: String,
      default: ''
    },
    quantityAndWeight: {
      type: String,
      default: ''
    },
    accepted: {
      type: String,
      default: ''
    },
    rejected: {
      type: String,
      default: ''
    },
    reasonOfRejection: {
      type: String,
      default: ''
    },
    operationid: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

Raw_Material_Rejection_RegisterSchema.plugin(mongoosePaginate);
var Raw_Material_Rejection_RegisterModel = mongoose.model('RQC01Raw_Material_Rejection_Register', Raw_Material_Rejection_RegisterSchema);
module.exports = Raw_Material_Rejection_RegisterModel