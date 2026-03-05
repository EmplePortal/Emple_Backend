import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  descopeId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String
  }
});

export default mongoose.model("User", userSchema);