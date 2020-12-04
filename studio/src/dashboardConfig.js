export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fca8c4ae11b5a1748d53a80',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-po89hfkh',
                  apiId: '54c0bd0f-4361-436f-aa54-db3285d7cc8b'
                },
                {
                  buildHookId: '5fca8c4a9dc7eb0119573d5f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dk3qsqdz',
                  apiId: '632b6fd7-4be2-4cd1-bbfa-18465503873e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ilKhr/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dk3qsqdz.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
