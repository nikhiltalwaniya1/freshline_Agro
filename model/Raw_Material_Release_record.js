const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const Raw_Material_Release_recordSchema = new Schema(
  {
    materialName: {
      type: String,
      default: ''
    },
    doneBy: {
      type: String,
      default: '',
      ref:"user"
    },
    dates: {
      type: Date,
      default: ''
    },
    materialId: {
      type: String,
      default: ''
    },
    qualityAcceptance: {
      type: String,
      default: ''
    },
    analytical: {
      type: String,
      default: ''
    },
    microBiological: {
      type: String,
      default: ''
    },
    sensory: {
      type: String,
      default: ''
    },
    Other: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: {}
    },
    operationId: {
      type: String,
      default: {}
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

Raw_Material_Release_recordSchema.plugin(mongoosePaginate);
var Raw_Material_Release_recordModel = mongoose.model('FQC06Raw_Material_Release_record', Raw_Material_Release_recordSchema);
module.exports = Raw_Material_Release_recordModel