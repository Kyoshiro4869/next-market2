import connectDB from "../../../utils/database";
import {UserModel} from "../../../utils/schemeModels";
import {NextResponse} from "next/server";
import { SignJWT } from "jose";


export async function POST(request){
  const reqBody = await request.json()

  try{
      await connectDB();
      const savedUserData = await UserModel.findOne({email:reqBody.email});
      console.log(savedUserData);
      if(savedUserData){
         if(savedUserData.password === reqBody.password){
            const secretKey = new TextEncoder().encode("next-market-app-book");

            const payload = {
               email: savedUserData.email,
            };

            const token = await new SignJWT(payload).setProtectedHeader({alg:"HS256",typ:"JWT"}).setExpirationTime("14d").sign(secretKey);

            console.log(token);

            return NextResponse.json({message:"ログイン成功",token:token});
         } else{
            return NextResponse.json({message:"ログイン失敗:パスワードが違います"});
         }

      } else{
          return NextResponse.json({message:"ログイン失敗:ユーザーが存在しません"});        
      }

  } catch (err) {
      return NextResponse.json({message:"ユーザーログイン失敗"});
  }
}