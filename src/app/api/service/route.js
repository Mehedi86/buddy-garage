import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"


export const DELETE = async ({ params }) => {

    const p = await params;
    const bookingCollection = dbConnect('bookingCollection');
    const query = { _id: new Object(p.id) }

    // validation
    const session = getServerSession(authOptions);
    const currentBooking = await bookingCollection.findOne(query)

    const isOwnerOk = session?.user?.email == currentBooking.email;

    if (isOwnerOk) {
        const deleteResponse = await bookingCollection.deleteOne(query);
        return NextResponse.json(deleteResponse);
    }
    return NextResponse.json({success: false, message: "Forbidden Action"}, {status: 401})
}



export const GET = async (req) => {
    const session = await getServerSession(authOptions);
    if (session) {
        const email = session?.user?.email;
        const bookingCollection = dbConnect('bookingCollection');
        const result = await bookingCollection.find({ email }).toArray();
        return NextResponse.json(result)
    }

    return NextResponse.json({})
}

export const POST = async (req) => {
    const body = await req.json();
    const bookingCollection = dbConnect('bookingCollection');
    const result = await bookingCollection.insertOne(body);
    return NextResponse.json(result);
}