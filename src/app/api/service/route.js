import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server"

export const POST = async (req) => {
    const body = await req.json();
    const bookingCollection = dbConnect('bookingCollection');
    const result = await bookingCollection.insertOne(body);
    return NextResponse.json(result);
}