import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  emailVerified: String,
});

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;
