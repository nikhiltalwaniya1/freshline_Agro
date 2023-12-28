const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const Production_ScheduleSchema = new Schema(
  {
    productionitem: {
      type: String,
      default: ''
    },
    productiontype: {
      type: String,
      default: ''
    },
    machineinprocess: {
      type: String,
      default: ''
    },
    quantity: {
      type: String,
      default: ''
    },
    duedate: {
      type: Date,
      default: ''
    },
    dates: {
      type: Date,
      default: ''
    },
    times: {
      type: Date,
      default: ''
    },
    supervisor: {
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

Production_ScheduleSchema.plugin(mongoosePaginate);
var Production_ScheduleModel = mongoose.model('FPRD04Production_Schedule', Production_ScheduleSchema);
module.exports = Production_ScheduleModel