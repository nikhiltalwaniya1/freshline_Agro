const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const issueRequestSchema = new Schema(
  {
    issueNumber : {
      type:String,
      default:''
    },
    status:{
      type: String,
      default: 'Not Done'
    },
    AdminId:{
      type: String,
      ref: "user",
    },
    currentAssigneeId:{
      type: Array,
      default: []
    },
    prevAssigneeIds:{
      type: Array,
      default: []
    },
    currentFormName:{
      type: Array,
      default: []
    },
    materialType:{
      type: String,
      default: ''
    },
    form8Id:{
      type: String,
      ref:"RST02Raw_Material_Stock_and_Issue_Register"
    },
  },
  {
    timestamps: true,
    typecast: true,
  }
)

issueRequestSchema.plugin(mongoosePaginate);
var materialIssueRequestModel = mongoose.model('materialissuerequest', issueRequestSchema);
module.exports = materialIssueRequestModel