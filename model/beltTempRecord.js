const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const beltTempRecordSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    time: {
      type: Date,
      default: ''
    },
    inletTemp: {
      type: Object,
      default: {}
    },
    belt1: {
      type: String,
      default: ''
    },
    belt2: {
      type: String,
      default: ''
    },
    belt3: {
      type: String,
      default: ''
    },
    belt4: {
      type: String,
      default: ''
    },
    belt5: {
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
beltTempRecordSchema.plugin(mongoosePaginate);
var beltTempRecordModel = mongoose.model('RPRD05Belt_Dryer_Temperature_Record', beltTempRecordSchema);
module.exports = beltTempRecordModel