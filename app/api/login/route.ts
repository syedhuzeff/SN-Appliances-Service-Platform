import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const admin = await prisma.admin.findUnique({
    where: { email },
  });

  if (!admin) {
    return NextResponse.json(
      { message: "Admin not found" },
      { status: 401 }
    );
  }

  const match = await bcrypt.compare(password, admin.password);

  if (!match) {
    return NextResponse.json(
      { message: "Wrong password" },
      { status:401 }
    );
  }

  const token = jwt.sign(
    {
      id: admin.id,
      email: admin.email,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "7d",
    }
  );

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set({
    name: "adminToken",
    value: token,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  console.log("Cookie created successfully");

  return response;
}