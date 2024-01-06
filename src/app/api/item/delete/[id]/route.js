import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemeModels";

export async function DELETE(request,context) {

  try{
    await connectDB();
    await ItemModel.findByIdAndDelete(context.params.id);
    return NextResponse.json({message:"アイテム削除成功(シングル)"});
  } catch (err) {
    return NextResponse.json({message:"アイテム削除失敗(シングル)"});
  }
};  