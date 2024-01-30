const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const metaldetectingschema = new Schema(
  {
    date: {
      type: Date,
      default: ''
    },
    location: {
      type: String,
      default: ''
    },
    batchNo: {
      type: String,
      default: ''
    },
    gearUsed: {
      type: String,
      default: ''
    },
    targetFound: {
      type: String,
      default: ''
    },
    CAPA: {
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

metaldetectingschema.plugin(mongoosePaginate);
var metaldetectingLogModel = mongoose.model('RPRD03Metal_Detecting_Log_Sheet', metaldetectingschema);
module.exports = metaldetectingLogModel