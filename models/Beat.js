import mongoose from "mongoose";

const BeatSchema=new mongoose.Schema({
  title:String,
  price:Number,
  url:String
});

export default mongoose.models.Beat || mongoose.model("Beat", BeatSchema);