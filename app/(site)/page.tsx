import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import ProjectCard from "../components/projectcard"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="max-w-5xl mx-auto py-20 px-10">
      <h1 className="text-7xl font-extrabold">Hello, I&apos;m <span className="bg-gradient-to-r from-pink-600 to-pink-200 bg-clip-text text-transparent">Emelie!</span></h1>
      <p className="mt-5 text-xl text-gray-600">Chekout some of my projects below.</p>
      <h2 className="mt-24 font-bold text-gray-600 text-3xl">My Projects</h2>

      <div className="mt-5 flex flex-wrap gap-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </div>

    </div>
  )
}
