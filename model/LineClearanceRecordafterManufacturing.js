const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const lineClearanceSchema = new Schema(
  {
    currentDate: {
      type: Date,
      default: ''
    },
    previousDate: {
      type: Date,
      default: ''
    },
    currentProductName: {
      type: String,
      default: ''
    },
    previousProductName: {
      type: String,
      default: ''
    },
    currentBatchNo: {
      type: String,
      default: ''
    },
    previousBatchNo: {
      type: String,
      default: ''
    },
    checkProperClothing: {
      type: Boolean,
    },
    remark: {
      type: String,
      default: ''
    },
    cleanProperly: {
      type: Object,
      default: {
        washer:{
          type:String,
          default:''
        },
        dicer:{
          type:String,
          default:''
        },
        vibrator:{
          type:String,
          default:''
        },
        conveyorBelt:{
          type:String,
          default:''
        },
        dryer:{
          type:String,
          default:''
        },
        finishedProductRecevingBelt:{
          type:String,
          default:''
        },
        reworkinbindryer:{
          type:String,
          default:''
        },
        metalDetectorSortigConBelt:{
          type:String,
          default:''
        },
        metalDetector:{
          type:String,
          default:''
        },
        uvLight:{
          type:String,
          default:''
        },
        floorandwalldryer1:{
          type:String,
          default:''
        },
        floorandwalldryer2:{
          type:String,
          default:''
        },
        floorandwalldryer3:{
          type:String,
          default:''
        },
        palletsandcrates:{
          type:String,
          default:''
        },
      }
    },
    checkUnwantedMaterial: {
      type: Object,
      default: {
        washer:{
          type:String,
          default:''
        },
        dicer:{
          type:String,
          default:''
        },
        vibrator:{
          type:String,
          default:''
        },
        conveyorBelt:{
          type:String,
          default:''
        },
        dryer:{
          type:String,
          default:''
        },
        finishedProductRecevingBelt:{
          type:String,
          default:''
        },
        reworkinbindryer:{
          type:String,
          default:''
        },
        metalDetectorSortigConBelt:{
          type:String,
          default:''
        },
        metalDetector:{
          type:String,
          default:''
        },
        uvLight:{
          type:String,
          default:''
        },
        floorandwalldryer1:{
          type:String,
          default:''
        },
        floorandwalldryer2:{
          type:String,
          default:''
        },
        floorandwalldryer3:{
          type:String,
          default:''
        },
        palletsandcrates:{
          type:String,
          default:''
        },
      }
    },
    isSanitize: {
      type: Object,
      default: {
        washer:{
          type:String,
          default:''
        },
        dicer:{
          type:String,
          default:''
        },
        vibrator:{
          type:String,
          default:''
        },
        conveyorBelt:{
          type:String,
          default:''
        },
        dryer:{
          type:String,
          default:''
        },
        finishedProductRecevingBelt:{
          type:String,
          default:''
        },
        reworkinbindryer:{
          type:String,
          default:''
        },
        metalDetectorSortigConBelt:{
          type:String,
          default:''
        },
        metalDetector:{
          type:String,
          default:''
        },
        uvLight:{
          type:String,
          default:''
        },
        floorandwalldryer1:{
          type:String,
          default:''
        },
        floorandwalldryer2:{
          type:String,
          default:''
        },
        floorandwalldryer3:{
          type:String,
          default:''
        },
        palletsandcrates:{
          type:String,
          default:''
        },
      }
    },
    bladesareclean: {
      type: Object,
      default: {
        washer:{
          type:String,
          default:''
        },
        dicer:{
          type:String,
          default:''
        },
        vibrator:{
          type:String,
          default:''
        },
        conveyorBelt:{
          type:String,
          default:''
        },
        dryer:{
          type:String,
          default:''
        },
        finishedProductRecevingBelt:{
          type:String,
          default:''
        },
        reworkinbindryer:{
          type:String,
          default:''
        },
        metalDetectorSortigConBelt:{
          type:String,
          default:''
        },
        metalDetector:{
          type:String,
          default:''
        },
        uvLight:{
          type:String,
          default:''
        },
        floorandwalldryer1:{
          type:String,
          default:''
        },
        floorandwalldryer2:{
          type:String,
          default:''
        },
        floorandwalldryer3:{
          type:String,
          default:''
        },
        palletsandcrates:{
          type:String,
          default:''
        },
      }
    },
    checkedBy: {
      type: String,
      default: ''
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

lineClearanceSchema.plugin(mongoosePaginate);
var lineClearanceModel = mongoose.model('FPRD13_Line_Clearance_Record_after_Manufacturing', lineClearanceSchema);
module.exports = lineClearanceModel