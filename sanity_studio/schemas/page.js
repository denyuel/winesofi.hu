const page = {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 80
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'include_in_navigation',
      title: 'Include in main navigation?',
      type: 'boolean',
      initialValue: false
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
            hotspot: true
          },
        }
      ],
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};

export default page;
