const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const Inward_Vehicle_ChecklistSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    transportername: {
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
    rawMaterialCondition: {
      type: Object,
      default: {}
    },
    properlyCleaned: {
      type: Object,
      default: {}
    },
    freeFromAbnormalOdor: {
      type: Object,
      default: {}
    },
    insetFree: {
      type: Object,
      default: {}
    },
    tarapulinCondition: {
      type: Object,
      default: {}
    },
    breaksAndSteering: {
      type: Object,
      default: {}
    },
    operationid: {
      type: Number,
      default: {}
    },
    status:{
      type:Boolean,
      default:false
    },
    formateNumber: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

Inward_Vehicle_ChecklistSchema.plugin(mongoosePaginate);
var Inward_Vehicle_ChecklistModel = mongoose.model('FQC01Inward_Vehicle_Checklist', Inward_Vehicle_ChecklistSchema);
module.exports = Inward_Vehicle_ChecklistModel