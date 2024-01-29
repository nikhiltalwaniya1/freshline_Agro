const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const workProcessReportForBeltDryerSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    shift: {
      type: Date,
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
    capMaskGloves: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    rmPreWashing: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    gradingOrShorting: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    washingWithnaocl: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    washerconveyor: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    dicer: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    vibrator: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    conveyor1: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    preDryer: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    conveyor2_3: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    feederBelt: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    beltDryer1_3_5: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    beltDryer2_4: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    finalBelt1: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    inalBelt2: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    Moisture: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    electricityConsumptionBeltDryer: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    Electricity_GasConsumptionBoiler: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    loddedInBinDryer: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    weight: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
    },
    finishedGoodsMoistureCheck: {
      type: Object,
      default: {
        speed:{
          type:String,
          default:''
        },
        yesOrNo:{
          type:Boolean,
          default:false
        },
        ifNoReason:{
          type:String,
          default:''
        },
        sortedMaterailUsedInProcess:{
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
        NC:{
          type:String,
          default:''
        },
      }
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
workProcessReportForBeltDryerSchema.plugin(mongoosePaginate);
var workProcessReportForBeltDryerModel = mongoose.model('FPRD02_Work_in_Process_Report_for_Belt_Dryer', workProcessReportForBeltDryerSchema);
module.exports = workProcessReportForBeltDryerModel