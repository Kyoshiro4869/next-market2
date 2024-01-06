import {NextResponse} from "next/server";
import connectDB from "../../../utils/database";
import {UserModel} from "../../../utils/schemeModels";


export async function POST(request){
  const reqBody = await request.json()

  try{
      await connectDB();
      await UserModel.create(reqBody);
      return NextResponse.json({message:"ユーザー作成成功"});
  } catch (err) {
      
      return NextResponse.json({message:"ユーザー作成失敗"});
  }
}