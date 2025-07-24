import SectionTitle from '@/components/SectionTitle';
import React from 'react'

export default function Features() {
    const features = [
        {
            id: 1,
            title: "Expert Team",
            img: "/assets/icons/group.svg",
        },
        {
            id: 3,
            title: "24/7 Support",
            img: "/assets/icons/person.svg",
        },
        {
            id: 4,
            title: "Best Equipment",
            img: "/assets/icons/Wrench.svg",
        },
        {
            id: 5,
            title: "100% Guaranty",
            img: "/assets/icons/check.svg",
        },
        {
            id: 6,
            title: "Timely Delivery",
            img: "/assets/icons/deliveryt.svg",
        }
    ];

    const featureBox = (feature) => {
        const {title, img, id} = feature;
        return (

            <div key={id} className='rounded border border-neutral-200 p-4 space-y-4'>
                <img src={img} className='w-[120px] h-[100px] mx-auto' alt="" />
                <h1 className='text-center text-lg font-bold'>{title}</h1>
            </div>

        )
    }
    return (
        <div>
            <SectionTitle
                title="Why Choose Us"
                subTitle="Core Features"
                details="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />

            <div className='grid grid-cols-5 gap-6'>
                {features.map(feature => featureBox(feature))}
            </div>
        </div>
    )
}
