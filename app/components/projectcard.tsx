'use client'
import { useState } from 'react';
import Image from "next/image"
import { Project } from '@/types/Project';
import { toPlainText } from '@/sanity/sanity-utils';

export default function ProjectCard({ project }: { project: Project }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <div className={`w-[300px] h-[300px] ${isFlipped ? 'transform rotate-y-180' : ''}`} onClick={handleClick} style={{ transition: 'transform 5s ease' }}>
            <div className={`front w-full h-full relative overflow-hidden ${isFlipped ? 'hidden' : ''}`}>
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.name}
                        layout="fill"
                        className="object-cover rounded-lg "
                    />
                )}

            </div>
            <div className={`back w-full h-full rounded-lg bg-pink-100 relative overflow-y-auto border-pink-400 ${isFlipped ? '' : 'hidden'}`}>
                <div className='h-full flex flex-col justify-center'>
                    <div className="text-pink-500 font-bold text-2xl bg-clip-text w-full p-5 text-center ">
                        {project.name}
                    </div>
                    <div className="text-pink-500 font-bold bg-clip-text w-full p-5 text-center ">
                        {toPlainText(project.content)}
                    </div>
                </div>

            </div>
        </div>


    )
}


