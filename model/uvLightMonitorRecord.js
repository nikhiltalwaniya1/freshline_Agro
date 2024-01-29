const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const uvLightMonitorSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    time: {
      type: Date,
      default: ''
    },
    cleaningFunctionChecked: {
      type: Boolean,
      default: false
    },
    anyProblemFound: {
      type: String,
      default: ''
    },
    correctiveActionTaken: {
      type: String,
      default: ''
    },
    remark: {
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

uvLightMonitorSchema.plugin(mongoosePaginate);
var uvLightMonitorModel = mongoose.model('FPRD14_UV_Light_Monitoring_Record', uvLightMonitorSchema);
module.exports = uvLightMonitorModel