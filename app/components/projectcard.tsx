'use client'
import { useState } from 'react';
import Image from "next/image"
import { Project } from '@/types/Project';

export default function ProjectCard({ project }: { project: Project }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <div className={`w-[300px] h-[300px] max-w-[300px] ${isFlipped ? 'transform rotate-y-180' : ''}`} onClick={handleClick}>
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
            <div className={`back w-full h-full bg-white relative overflow-y-auto border-pink-400 ${isFlipped ? '' : 'hidden'}`}>
                <div className="text-pink-700 font-extrabold bg-clip-text absolute bottom-0 w-full p-2 text-center">
                    {project.name}
                </div>
            </div>
        </div>


    )
}


