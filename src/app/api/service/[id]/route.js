import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export const DELETE = async (req, { params }) => {
    const bookingCollection = dbConnect('bookingCollection');
    const p = await params;
    const query = { _id: new ObjectId(p.id) }

    const session = await getServerSession(authOptions);
    const currentBooking = await bookingCollection.findOne(query);

    const isOwnerOk = session?.user?.email == currentBooking.email;

    if (isOwnerOk) {
        const deleteResponse = await bookingCollection.deleteOne(query);
        return NextResponse.json(deleteResponse);
    }
    return NextResponse.json({ success: false });
}


export const GET = async (req, { params }) => {
    const p = await params;
    const serviceCollection = dbConnect("services");
    const service = await serviceCollection.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(service)
}


