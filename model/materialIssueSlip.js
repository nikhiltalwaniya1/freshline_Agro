const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const materialIssueSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    materialissueto: {
      type: String,
      default: ''
    },
    materialdescription: {
      type: String,
      default: ''
    },
    quantity: {
      type: Number,
      default: 0
    },
    remark: {
      type: String,
      default: ''
    },
    operationid: {
      type: Number,
      default: 0
    },
    userId: {
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
    approvedBy: {
      type: String,
      default: ''
    },
    issuedBy: {
      type: String,
      default: ''
    },
    formName: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)
materialIssueSchema.plugin(mongoosePaginate);
var Material_Issue_SlipModel = mongoose.model('FST03Material_Issue_Slip', materialIssueSchema);
module.exports = Material_Issue_SlipModel