const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const certificateOfAnalysisSchema = new Schema(
  {
    dateOfMenuFecture: {
      type: Date,
      default: ''
    },
    dateOfRelease: {
      type: Date,
      default: ''
    },
    expiryDate: {
      type: Date,
      default: ''
    },
    productName: {
      type: String,
      default: ''
    },
    customerName: {
      type: String,
      default: ''
    },
    batchNo: {
      type: String,
      default: ''
    },
    appearanceOfColor: {
      type: String,
      default: ''
    },
    odor: {
      type: String,
      default: ''
    },
    test: {
      type: String,
      default: ''
    },
    texture: {
      type: String,
      default: ''
    },
    moisture: {
      type: String,
      default: ''
    },
    labIncharge: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: '',
      ref: "user",
    },
    status: {
      type: Boolean,
      default: false
    },
    formateNumber: {
      type: String,
      default: ''
    },
    createdBy: {
      type: String,
      default: '',
      ref: "user",
    },
    remark: {
      type: String,
      default: ''
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

certificateOfAnalysisSchema.plugin(mongoosePaginate);
var certificateOfAnalysisModel = mongoose.model('FQC03Certificate_of_Analysis_COA', certificateOfAnalysisSchema);
module.exports = certificateOfAnalysisModel