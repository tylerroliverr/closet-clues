export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'projectPosition',
      title: 'Project Position',
      type: 'number',
      description: 'Number to order projects on the frontend',
      validation: Rule => Rule.required().integer().positive()
    },
    {
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'projectDate',
      title: 'Project Date',
      type: 'string',
      description: 'Display date for the project (e.g., "2024", "Spring 2024")',
      validation: Rule => Rule.required()
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
      description: 'Description of the project',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainProjectImage',
      title: 'Main Project Image',
      type: 'image',
      description: 'Primary image for the project',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      description: 'Additional images for the project',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'projectVideos',
      title: 'Project Videos',
      type: 'array',
      description: 'Videos for the project',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Video Title',
              type: 'string'
            },
            {
              name: 'url',
              title: 'Video URL',
              type: 'url',
              description: 'Temporary: video URL until MUX is integrated'
            }
          ]
        }
      ]
    }
  ],
  orderings: [
    {
      title: 'Position, Asc',
      name: 'positionAsc',
      by: [
        { field: 'projectPosition', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'projectTitle',
      subtitle: 'projectDate',
      media: 'mainProjectImage'
    }
  }
}
