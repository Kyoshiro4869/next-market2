import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemeModels";

export async function PUT(request,context) {
  const reqbody = await request.json();
  try{
    await connectDB();
    const singleItem = await ItemModel.findById(context.params.id);

    if(singleItem.email = reqbody.email){
    await ItemModel.findByIdAndUpdate(context.params.id,reqbody);
    return NextResponse.json({message:"アイテム編集成功"});
    } else {
      return NextResponse.json({message:"他の人のアイテムです"});
    }  
  } catch (err) {
    return NextResponse.json({message:"アイテム更新失敗"});
  }  
}  