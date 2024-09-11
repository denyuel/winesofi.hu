const post = {
  title: 'Blogpost',
  name: 'post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 80,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'imageGallery',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

export default post
