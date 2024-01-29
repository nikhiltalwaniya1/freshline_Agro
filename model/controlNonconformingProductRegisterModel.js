const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const nonConformingProductSchema = new Schema(
  {
    dates: {
      type: Date,
      default: ''
    },
    materialName: {
      type: String,
      default: ''
    },
    locationWhereNCFound: {
      type: String,
      default: ''
    },
    descriptionForNC: {
      type: String,
      default: ''
    },
    risk: {
      type: String,
      default: ''
    },
    CAPA: {
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

nonConformingProductSchema.plugin(mongoosePaginate);
var nonConformingProductModel = mongoose.model('RPRD04Control_of_Nonconforming_Product_Register', nonConformingProductSchema);
module.exports = nonConformingProductModel