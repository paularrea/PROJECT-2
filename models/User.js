const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}, 
  haveList: [{ type: Schema.Types.ObjectId, ref: "Have"} ],
  wantList: [{ type: Schema.Types.ObjectId, ref: "Want"} ],
  isUser: { type: Boolean, default: false } 
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;