import {NextResponse} from "next/server"
import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemeModels"




export async function POST(request){
  const reqbody = await request.json()

  try{
  await connectDB();
  await ItemModel.create(reqbody);
  return NextResponse.json({message:"アイテム作成成功"});

  } catch (err) {
  console.error(err)
  return NextResponse.json({message:"アイテム作成失敗"});
  }
}
  

