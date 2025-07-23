'use client'

import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { useEffect, useState } from 'react';

export default function Services() {
    const [services, setServices] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/services.json');
                const data = await res.json();
                setServices(data);
            }
            catch (error) {
                console.log(error.message)
            }
        }
        fetchData();
    }, [])
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
        </div>
    )
}
