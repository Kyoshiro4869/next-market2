import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemeModels";

export async function GET(request) {

  try{ 
  await connectDB();
  const allItems = await ItemModel.find({});
  return NextResponse.json({message:"アイテム取得成功",allItems:allItems});

  } catch (err) {
    return NextResponse.json({message:"アイテム取得失敗"});
  }
} 

export const revalidate = 0;
