'use client'

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
        <div>
            <div className='grid grid-cols-4'>
                {services.map(service => <ServiceCard
                    key={service._id}
                    serviceData={service}
                />)}
            </div>
        </div>
    )
}
