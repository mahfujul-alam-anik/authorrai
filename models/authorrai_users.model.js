import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    image: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const AuthorraiUsers =
  mongoose.models.authorrai_users ||
  mongoose.model("authorrai_users", userSchema);

export default AuthorraiUsers;
