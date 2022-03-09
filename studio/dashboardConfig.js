export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6228beb8824e6000625a27bd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-123-studio',
                  apiId: '42229b9d-23b7-4212-975d-4aafb8a3fa57'
                },
                {
                  buildHookId: '6228beb89557f9007e82bad9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-123',
                  apiId: '40787956-e136-4f28-a906-eedb380c0e6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/readikus/sanity-nextjs-landing-page123',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-page-123.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
