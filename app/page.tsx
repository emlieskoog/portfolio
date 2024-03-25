import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">Hello I&apos;m <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Emelie!</span></h1>
      <p className="mt-5 text-xl text-gray-600"><span className="italic">Välkommen</span> everyone! Chekout my projects below.</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="border-2 border-gray-500 rounded-lg p-1">

            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={100}
                className="mt-2 object-cover rounded-lg border border-gray-500"
              />
            )}

            <div className="font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {project.name}
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
