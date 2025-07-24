import SectionTitle from '@/components/SectionTitle'
import TeamCard from '@/components/TeamCard';
import React from 'react'

export default function Team() {
    const team = [
        {
            id: 1,
            name: "Faisal Khan",
            expertise: "Engine Repair",
            img: "/assets/images/team/1.jpg"
        },
        {
            id: 2,
            name: "Jabed Shah",
            expertise: "Brake & Suspension",
            img: "/assets/images/team/2.jpg"
        },
        {
            id: 3,
            name: "Firoz Morol",
            expertise: "Electrical Systems",
            img: "/assets/images/team/3.jpg"
        }
    ];

    return (
        <div>
            <SectionTitle
                subTitle="Meet Our Team"
                title="Team"
                details="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />

            <div className='grid grid-cols-3 gap-6'>
                {team.map(member => <TeamCard
                    key={member.id}
                    memberData={member}
                />)}
            </div>
            <div className='flex justify-center my-12'>
                <button className="btn btn-xl btn-outline btn-error rounded">More Members</button>
            </div>
        </div>
    )
}
