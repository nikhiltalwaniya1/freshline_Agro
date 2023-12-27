const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const Raw_Material_Incoming_RegisterSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    invoiceno: {
      type: String,
      default: ''
    },
    vehicleno: {
      type: String,
      default: ''
    },
    drivername: {
      type: String,
      default: ''
    },
    driverlicenseno: {
      type: String,
      default: ''
    },
    driverno: {
      type: String,
      default: ''
    },
    pono: {
      type: String,
      default: ''
    },
    itemname: {
      type: String,
      default: ''
    },
    valueOfItem: {
      type: String,
      default: ''
    },
    quantity: {
      type: Number,
      default: ''
    },
    remarks: {
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
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

Raw_Material_Incoming_RegisterSchema.plugin(mongoosePaginate);
var Raw_Material_Incoming_RegisterModel = mongoose.model('RST01Raw_Material_Incoming_Register', Raw_Material_Incoming_RegisterSchema);
module.exports = Raw_Material_Incoming_RegisterModel