const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const lineClearanceAfterPackingSchema = new Schema(
  {
    isProtectiveClothingProcedure:{
      type:Object,
      default:{
        isOk:{
          type:Boolean          
        },
        remark:{
          type:String,
          default:''          
        },
      }
    },
    isLabelAffixed:{
      type:Object,
      default:{
        isOk:{
          type:Boolean          
        },
        remark:{
          type:String,
          default:''          
        },
      }
    },
    isAreaDevoid:{
      type:Object,
      default:{
        isOk:{
          type:Boolean          
        },
        remark:{
          type:String,
          default:''          
        },
      }
    },
    isAreaWastedbinEmpty:{
      type:Object,
      default:{
        isOk:{
          type:Boolean          
        },
        remark:{
          type:String,
          default:''          
        },
      }
    },
    isConveyourCleaned:{
      type:Object,
      default:{
        isOk:{
          type:Boolean          
        },
        remark:{
          type:String,
          default:''          
        },
      }
    },
    isHouseKeepingOk:{
      type:Object,
      default:{
        isOk:{
          type:Boolean          
        },
        remark:{
          type:String,
          default:''          
        },
      }
    },
    verifiedBy: {
      type: String,
      default: ''
    },
    checkedBy: {
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
lineClearanceAfterPackingSchema.plugin(mongoosePaginate);
var lineClearanceAfterPackingModel = mongoose.model('FPRD12_Line_Clearance_Record_After_Packing', lineClearanceAfterPackingSchema);
module.exports = lineClearanceAfterPackingModel