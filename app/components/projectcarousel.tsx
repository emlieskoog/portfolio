'use client'
import { useState, useEffect } from 'react'
import { Project } from '@/types/Project'
import ProjectCard from './projectcard'

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [numCols, setNumCols] = useState(1)

    const nextProject = () => setCurrentIndex((prevIndex) => (prevIndex === projects.length - numCols ? 0 : prevIndex + 1))
    const prevProject = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - numCols : prevIndex - 1))

    const endIndex = currentIndex + numCols > projects.length ? projects.length : currentIndex + numCols

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024)
                setNumCols(3);
            else if (window.innerWidth >= 780)
                setNumCols(2);
            else
                setNumCols(1);
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="flex items-center">
            <div className="flex items-center pr-2" onClick={prevProject}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div className={`mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
                {projects.slice(currentIndex, endIndex).map((project) => (
                    <div key={project._id}>
                        <ProjectCard project={project} key={project._id} />
                    </div>
                ))}
            </div>
            <div className="cursor-pointer pl-2" onClick={nextProject}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    )
}
