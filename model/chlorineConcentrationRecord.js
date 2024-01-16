const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const chlorineConcentrationSchema = new Schema(
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
chlorineConcentrationSchema.plugin(mongoosePaginate);
var chlorineConcentrationModel = mongoose.model('FPRD07Chlorine_Concentration_Record', chlorineConcentrationSchema);
module.exports = chlorineConcentrationModel