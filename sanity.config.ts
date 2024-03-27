import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId: 'kko74km7',
    dataset: 'production',
    title: 'My Personal Portfolio',
    apiVersion: '2024-02-09',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: { types: schemas },
    useCdn: false,
})

export default config