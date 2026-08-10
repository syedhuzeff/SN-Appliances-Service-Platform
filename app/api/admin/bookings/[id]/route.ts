import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Update Booking Status
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await req.json();

    const booking = await prisma.booking.update({
      where: {
        id: Number(id),
      },
      data: {
        status,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to update booking" },
      { status: 500 }
    );
  }
}

// Delete Booking
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.booking.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to delete booking" },
      { status: 500 }
    );
  }
}