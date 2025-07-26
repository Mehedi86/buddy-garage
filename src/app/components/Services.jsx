
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import dbConnect from '@/lib/dbConnect';


export default async function Services() {
    
    const serviceCollection = dbConnect("services");
    const services = await serviceCollection.find({}).toArray();
    console.log(services)

    return (
        <div className='my-12'>
            <SectionTitle
                subTitle="Our Service Area"
                title="Service"
                details="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <div className='grid grid-cols-3 gap-6'>
                {services.map(service => <ServiceCard
                    key={service._id}
                    serviceData={service}
                />)}
            </div>
            <div className='flex justify-center my-12'>
                <button className="btn btn-xl btn-outline btn-error rounded">More Services</button>
            </div>
        </div>
    )
}


