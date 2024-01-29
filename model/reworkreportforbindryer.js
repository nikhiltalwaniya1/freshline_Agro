const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const reWorkReportForBinDryerSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    shift: {
      type: String,
      default: ''
    },
    materialQuantity: {
      type: String,
      default: ''
    },
    supervisorName: {
      type: String,
      default: ''
    },
    machineName: {
      type: String,
      default: ''
    },
    materialId: {
      type: String,
      default: ''
    },
    productionName: {
      type: String,
      default: ''
    },
    batchNo: {
      type: String,
      default: ''
    },
    PPE: {
      type: Object,
      default: {
        yesOrNo:{
          type:Boolean,
          default:''
        },
        ifNoReason:{
          type:String,
          default:''
        },
        inPut:{
          type:String,
          default:''
        },
        wastage:{
          type:String,
          default:''
        },
        loss:{
          type:String,
          default:''
        },
        lossPercent:{
          type:String,
          default:''
        },
        NC:{
          type:String,
          default:''
        },
      }
    },
    inputWeight: {
      type: Object,
      default: {
        yesOrNo:{
          type:Boolean,
          default:''
        },
        ifNoReason:{
          type:String,
          default:''
        },
        inPut:{
          type:String,
          default:''
        },
        wastage:{
          type:String,
          default:''
        },
        loss:{
          type:String,
          default:''
        },
        lossPercent:{
          type:String,
          default:''
        },
        NC:{
          type:String,
          default:''
        },
      }
    },
    loadedinBinDryer: {
      type: Object,
      default: {
        yesOrNo:{
          type:Boolean,
          default:''
        },
        ifNoReason:{
          type:String,
          default:''
        },
        inPut:{
          type:String,
          default:''
        },
        wastage:{
          type:String,
          default:''
        },
        loss:{
          type:String,
          default:''
        },
        lossPercent:{
          type:String,
          default:''
        },
        NC:{
          type:String,
          default:''
        },
      }
    },
    temp: {
      type: Object,
      default: {
        yesOrNo:{
          type:Boolean,
          default:''
        },
        ifNoReason:{
          type:String,
          default:''
        },
        inPut:{
          type:String,
          default:''
        },
        wastage:{
          type:String,
          default:''
        },
        loss:{
          type:String,
          default:''
        },
        lossPercent:{
          type:String,
          default:''
        },
        NC:{
          type:String,
          default:''
        },
      }
    },
    processTime: {
      type: Object,
      default: {
        yesOrNo:{
          type:Boolean,
          default:''
        },
        ifNoReason:{
          type:String,
          default:''
        },
        inPut:{
          type:String,
          default:''
        },
        wastage:{
          type:String,
          default:''
        },
        loss:{
          type:String,
          default:''
        },
        lossPercent:{
          type:String,
          default:''
        },
        NC:{
          type:String,
          default:''
        },
      }
    },
    weigthAfterProcess: {
      type: Object,
      default: {
        yesOrNo:{
          type:Boolean,
          default:''
        },
        ifNoReason:{
          type:String,
          default:''
        },
        inPut:{
          type:String,
          default:''
        },
        wastage:{
          type:String,
          default:''
        },
        loss:{
          type:String,
          default:''
        },
        lossPercent:{
          type:String,
          default:''
        },
        NC:{
          type:String,
          default:''
        },
      }
    },
    moistureCheck: {
      type: Object,
      default: {
        yesOrNo:{
          type:Boolean,
          default:''
        },
        ifNoReason:{
          type:String,
          default:''
        },
        inPut:{
          type:String,
          default:''
        },
        wastage:{
          type:String,
          default:''
        },
        loss:{
          type:String,
          default:''
        },
        lossPercent:{
          type:String,
          default:''
        },
        NC:{
          type:String,
          default:''
        },
      }
    },
    electricityConsumption: {
      type: Object,
      default: {
        yesOrNo:{
          type:Boolean,
          default:''
        },
        ifNoReason:{
          type:String,
          default:''
        },
        inPut:{
          type:String,
          default:''
        },
        wastage:{
          type:String,
          default:''
        },
        loss:{
          type:String,
          default:''
        },
        lossPercent:{
          type:String,
          default:''
        },
        NC:{
          type:String,
          default:''
        },
      }
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
    remark: {
      type: String,
      default: ''
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
reWorkReportForBinDryerSchema.plugin(mongoosePaginate);
var reWorkReportForBinDryerModel = mongoose.model('FPRD02_RW_ReworkforDehydration', reWorkReportForBinDryerSchema);
module.exports = reWorkReportForBinDryerModel