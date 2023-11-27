import mongoose from "mongoose";

const membershipSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Packages",
      required: true,
    },
    purchaseDate: {
      type: Date,
      default: Date.now,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    repeat: {
      type: Boolean,
    },
    repeatCount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Memberships =
  mongoose.models.Memberships ||
  mongoose.model("Memberships", membershipSchema);

export default Memberships;
