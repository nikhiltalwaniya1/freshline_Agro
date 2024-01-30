const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const outwordVehicleCheckListSchema = new Schema(
  {
    date: {
      type: Date,
      default: ''
    },
    transporterName: {
      type: String,
      default: ''
    },
    vehicleName: {
      type: String,
      default: ''
    },
    driverName: {
      type: String,
      default: ''
    },
    batchNo: {
      type: String,
      default: ''
    },
    materialName: {
      type: String,
      default: ''
    },
    qualityandCOA: {
      type: String,
      default: ''
    },
    despatchTo: {
      type: String,
      default: ''
    },
    invoiceNo: {
      type: String,
      default: ''
    },
    poDetails: {
      type: String,
      default: ''
    },
    previousLoad: {
      type: Object,
      default: {
        isOK:{
          type:Boolean
        },
        remark:{
          type:Boolean
        }
      }
    },
    trapulinCondition: {
      type: Object,
      default: {
        isOK:{
          type:Boolean
        },
        remark:{
          type:Boolean
        }
      }
    },
    packingCondition: {
      type: Object,
      default: {
        isOK:{
          type:Boolean
        },
        remark:{
          type:Boolean
        }
      }
    },
    vehicleCondition: {
      type: Object,
      default: {
        isOK:{
          type:Boolean
        },
        remark:{
          type:Boolean
        }
      }
    },
    breaks: {
      type: Object,
      default: {
        isOK:{
          type:Boolean
        },
        remark:{
          type:Boolean
        }
      }
    },
    isFreeFormInsect: {
      type: Object,
      default: {
        isOK:{
          type:Boolean
        },
        remark:{
          type:Boolean
        }
      }
    },
    vehicleAccept: {
      type: Boolean,
    },
    vehicleReject: {
      type: Boolean,
    },
    isRejectReason: {
      type: String,
      default: ''
    },
    approvedBy: {
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
outwordVehicleCheckListSchema.plugin(mongoosePaginate);
var outwordVehicleCheckListModel = mongoose.model('FQC11_outward_Vehicle_Checklist', outwordVehicleCheckListSchema);
module.exports = outwordVehicleCheckListModel