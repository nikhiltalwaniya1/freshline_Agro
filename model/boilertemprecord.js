const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const beltDryerReportSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    time: {
      type: Date,
      default: ''
    },
    inTemp: {
      type: String,
      default: ''
    },
    outTemp: {
      type: String,
      default: ''
    },
    storeTemp: {
      type: String,
      default: ''
    },
    bdInletTemp: {
      type: String,
      default: ''
    },
    boilerMeterReading: {
      type: String,
      default: ''
    },
    tempSetting: {
      type: String,
      default: ''
    },
    gasReading: {
      type: String,
      default: ''
    },
    Action: {
      type: String,
      default: ''
    },
    NC: {
      type: String,
      default: ''
    },
    approvedBy: {
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
    formName: {
      type: String,
      default: ''
    },
    remark: {
      type: String,
      default: ''
    },    
  },
  {
    timestamps: true,
    typecast: true,
  }
)
beltDryerReportSchema.plugin(mongoosePaginate);
var beltDryerReportModel = mongoose.model('RPRD05Boiler_Temp_Record', beltDryerReportSchema);
module.exports = beltDryerReportModel