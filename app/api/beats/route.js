import { connectDB } from "@/lib/mongodb";
import Beat from "@/models/Beat";

export async function GET(){
  await connectDB();
  const beats=await Beat.find();
  return Response.json(beats);
}

export async function POST(req){
  await connectDB();
  const data=await req.json();
  const beat=await Beat.create(data);
  return Response.json(beat);
}