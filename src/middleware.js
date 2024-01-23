//middleware.js

import { NextResponse } from 'next/server'
import {NextRequest} from 'next/server'
import {jwtVerify} from "jose";


export async function middleware(request,response){
  console.log(request);

  const token = await request.headers.get("Authorization")?.split(" ")[1];

  if(!token){
    return NextResponse.json({message:"認証失敗:トークンがありません"});
  } 

  try{
    const secretKey = new TextEncoder().encode("next-market-app-book");
    const decodedJwt = await jwtVerify(token,secretKey);
    console.log("decodedJwt",decodedJwt);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({message:"認証失敗:トークンが正しくないので、ログインしてください"});
  }

}


export const config = {
  matcher: ["/api/item/create","/api/item/update/:path*","/api/item/delete/:path*"],
}