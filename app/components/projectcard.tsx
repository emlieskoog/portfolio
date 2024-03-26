import Image from "next/image"
import { Project } from '@/types/Project';
import { toPlainText } from '@/sanity/sanity-utils';

export default function ProjectCard({ project }: { project: Project }) {

    return (
        <div className="w-[300px] h-[300px] p-2" >
            <div className="w-full h-full relative overflow-hidden">
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.name}
                        layout="fill"
                        className="object-cover rounded-lg "
                    />
                )}
                <div className="absolute inset-0 w-full h-full rounded-lg bg-pink-100 opacity-0 transition-opacity hover:opacity-90">
                    <div className="h-full flex flex-col justify-center">
                        <div className="text-pink-500 font-bold text-2xl bg-clip-text w-full p-5 text-center">
                            {project.name}
                        </div>
                        <div className="text-pink-500 font-bold bg-clip-text w-full p-5 text-center">
                            {toPlainText(project.content)}
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}


