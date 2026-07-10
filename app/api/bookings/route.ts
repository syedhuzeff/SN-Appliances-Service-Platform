import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received Data:", body);

    const booking = await prisma.booking.create({
      data: {
        fullName: body.name,
        phoneNumber: body.phone,
        area: body.area,
        address: body.address,
        machineBrand: body.brand,
        problem: body.problem,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking submitted successfully!",
        booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit booking.",
      },
      { status: 500 }
    );
  }
}