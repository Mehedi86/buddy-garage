import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const testimonialCollection = dbConnect("testimonials");
    const testimonials = await testimonialCollection.find({}).toArray();
    return Response.json(testimonials);
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch testimonials' }), {
      status: 500,
    });
  }
}