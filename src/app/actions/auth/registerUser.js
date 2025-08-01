'use server'
import bcrypt from 'bcrypt'
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

        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        const result = await userCOllection.insertOne(payload);
        const { acknowledged, insertedId } = result;
        return { acknowledged, insertedId: insertedId.toString() };
        ;
    }
    return { status: false };
}