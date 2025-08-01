export const GET = async (req, { params }) => {
    const p = await params;
    const serviceCollection = dbConnect("services");
    const service = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
}