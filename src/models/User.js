import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  descopeId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  email: String,
  coins: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("User", userSchema);