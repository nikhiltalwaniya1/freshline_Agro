const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const user = new Schema(
  {
    name: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: '',
      unique: true
    },
    password: {
      type: String,
      default: ''
    },
    roleid: {
      type: String,
      default: '',
      ref: "role",
    },
    username: {
      type: String,
      default: '',
    },
    roletype: {
      type: String,
      default: '',
    },
    details: {
      type: Array
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

user.plugin(mongoosePaginate);
var userModel = mongoose.model('user', user);
module.exports = userModel