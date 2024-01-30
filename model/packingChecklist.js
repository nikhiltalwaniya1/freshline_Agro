const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const packingChecklistSchema = new Schema(
  {
    packingMaterialIssue: {
      type: Object,
      default: {
        materialId:{
          type:Boolean,
        },
        isFollowFIFO:{
          type:Boolean,
        },
        isSufficentQuantity:{
          type:Boolean,
        },
        qualityOfMaterial:{
          type:Boolean,
        },
        isDamagePeaceIssue:{
          type:Boolean,
        },
        isFullFillRequirement:{
          type:Boolean,
        }
      }
    },
    midStagePacking: {
      type: Object,
      default: {
        isProtectiveWithCloths:{
          type:Boolean,
        },
        isPackingMaterialHandling:{
          type:Boolean,
        },
        isSufficentQuantity:{
          type:Boolean,
        },
        isWeighingBalance:{
          type:Boolean,
        },
        isBatchNoinOrder:{
          type:Boolean,
        },
        isFGReportMaintaing:{
          type:Boolean,
        }
      }
    },
    endStagePacking: {
      type: Object,
      default: {
        isPackedAsPerProcedure:{
          type:Boolean,
        },
        batchNoVerified:{
          type:Boolean,
        },
        qualityOfPacking:{
          type:Boolean,
        },
        isHyginClearance:{
          type:Boolean,
        }
      }
    },
    verifiedBy: {
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

packingChecklistSchema.plugin(mongoosePaginate);
var packingChecklistModel = mongoose.model('FQC10_Packing_checklist', packingChecklistSchema);
module.exports = packingChecklistModel