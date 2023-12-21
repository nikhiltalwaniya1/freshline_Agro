const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const supplierSchema = new Schema(
  {
    suppliername: {
      type: String,
      default: ''
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

supplierSchema.plugin(mongoosePaginate);
var supplierModel = mongoose.model('supplier', supplierSchema);
module.exports = supplierModel