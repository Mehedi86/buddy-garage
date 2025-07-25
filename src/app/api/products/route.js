import dbConnect from "@/lib/dbConnect";

export async function GET() {
    try {
        const productsCollection = dbConnect("products");
        const products = await productsCollection.find({}).toArray();
        return Response.json(products)
    } catch {
        return new Response(JSON.stringify({ error: "Failed to fetch testimonials" }),
            { status: 500 })
    }
}