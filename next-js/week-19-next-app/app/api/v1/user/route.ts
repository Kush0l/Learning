import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prisma from "@/app/lib/db"

export async function POST(req: NextRequest){

  const data = await req.json();

  await prisma.user.create({
    data:{
      username:data.username,
      password:data.password
    }
  })

  return NextResponse.json({
    username: data.username,
    password : data.password
  })
}