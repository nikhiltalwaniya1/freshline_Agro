const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const MaterialStockAndIssueSchema = new Schema(
  {
    materialName: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
    },
    issueNumber: {
      type: String,
      default: ''
    },
    materialType: {
      type: String,
      default: ''
    },
    materialId: {
      type: Array,
      default: []
    },
    issueStock: {
      type: Number,
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
      type: Array,
      default: []
    },
    formateNumber: {
      type: String,
      default: ''
    },
    status: {
      type: Boolean,
      default: true
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

MaterialStockAndIssueSchema.plugin(mongoosePaginate);
var MaterialStockAndIssueModel = mongoose.model('RST02Raw_Material_Stock_and_Issue_Register', MaterialStockAndIssueSchema);
module.exports = MaterialStockAndIssueModel