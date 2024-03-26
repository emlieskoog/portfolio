import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import { PortableTextBlock, PortableTextChild } from "sanity"

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: 'kko74km7',
        dataset: 'production',
        apiVersion: '2024-02-09',
    })

    return client.fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content
        }`
    )
}

export function toPlainText(blocks: PortableTextBlock[] | null | undefined): string {
    if (!blocks) {
        return '';
    }

    return blocks
        .map((block: PortableTextBlock) => {
            if (block._type !== 'block' || !block.children) {
                return '';
            }
            return (block.children as PortableTextChild[])
                .map((child) => child.text)
                .join('');
        })
        .join('\n\n');
}
