const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const chlorineConcentrationSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    issueId: {
      type: String,
      default: ''
    },
    concentrationPPM: {
      type: String,
      default: ''
    },
    chlorineStripTest: {
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
    NC: {
      type: String,
      default: ''
    },
    correctiveAction: {
      type: String,
      default: ''
    },
    formName: {
      type: String,
      default: ''
    },
    remark: {
      type: String,
      default: ''
    },
    approvedBy: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)
chlorineConcentrationSchema.plugin(mongoosePaginate);
var chlorineConcentrationModel = mongoose.model('FPRD07Chlorine_Concentration_Record', chlorineConcentrationSchema);
module.exports = chlorineConcentrationModel