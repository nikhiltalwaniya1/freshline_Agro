const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const roleSchema = new Schema(
  {
    rolename: {
      type: String,
      default: ''
    },
    roletype: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

roleSchema.plugin(mongoosePaginate);
var roleModel = mongoose.model('role', roleSchema);
module.exports = roleModel