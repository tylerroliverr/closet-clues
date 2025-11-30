import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'cke1b94j',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const query = `*[_type == "project"] | order(projectPosition asc) {
  _id,
  projectPosition,
  projectTitle,
  projectDate,
  projectDescription,
  mainProjectImage {
    asset-> {
      _id,
      url
    },
    hotspot,
    crop
  },
  projectImages[] {
    asset-> {
      _id,
      url
    },
    hotspot,
    crop
  },
  projectVideos[] {
    title,
    url
  }
}`

export async function getProjectData() {
  try {
    const projects = await client.fetch(query)
    return projects
  } catch (error) {
    console.error('Error fetching project data:', error)
    return []
  }
}