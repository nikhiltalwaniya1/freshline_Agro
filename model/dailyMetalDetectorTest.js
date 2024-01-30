const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const metalDetectorSchema = new Schema(
  {
    date: {
      type: Date,
      default: ''
    },
    time: {
      type: Date,
      default: ''
    },
    shift: {
      type: String,
      default: ''
    },
    defected: {
      type: Boolean,
    },
    correctiveAction:{
      type: String,
      default: ''
    },
    checkedBy: {
      type: String,
      default: ''
    },
    verifiedBy: {
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

metalDetectorSchema.plugin(mongoosePaginate);
var metalDetectorTestModel = mongoose.model('FPRD08Daily_Metal_Detector_Test_Log', metalDetectorSchema);
module.exports = metalDetectorTestModel