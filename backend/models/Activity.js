import mongoose from "mongoose";
const activitySchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  date: { type: Date, required: true },
  activityCount: { type: Number, default: 0 } // e.g., actions this day/week
}, { timestamps: true });

const Activity = mongoose.model("Activity", activitySchema);
export default Activity;
