'use server'

import dbConnect from "@/lib/dbConnect"

export const registerUser = async (payload) => {
    const userCOllection = dbConnect('user');
    // validation
    const { name, email, password } = payload;
    if (!name || !email || !password) {
        return { status: false }
    }
    const user = await userCOllection.findOne({ email: payload.email });
    if (!user) {

        const result = await userCOllection.insertOne(payload);
        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString(),
        };
        ;
    }
    return { status: false };
}