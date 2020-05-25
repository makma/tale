module.exports = {
  plugins: [
    {
      module: require('@kentico/sourcebit-source-kontent'),
      options: {
        projectId: 'df5972ac-794e-00af-9a90-555c0fa81d4c',
        languageCodenames: [
          'default'
        ]
      }
    },
    {
      module: require('sourcebit-target-jekyll'),
      options: {
        writeFile: function(entry,utils) {
        // This function is invoked for each entry and its return value determines
        // whether the entry will be written to a file. When an object with `content`,
        // `format` and `path` properties is returned, a file will be written with
        // those parameters. If a falsy value is returned, no file will be created.
        const { __metadata: meta, ...fields } = entry;
        if (!meta) return;
        const { createdAt = '', modelName, projectId, source } = meta;
        if (modelName === 'page' && projectId === 'df5972ac-794e-00af-9a90-555c0fa81d4c' && source === '@kentico/sourcebit-source-kontent') {
          const { __metadata, 'content': content, layout, ...frontmatterFields } = entry;
          return {
            content: {
              body: fields['content'],
              frontmatter: { ...frontmatterFields, layout: fields['layout'] },
            },
            format: 'frontmatter-md',
            path: '_pages/' + createdAt.substring(0, 10) + '-' + utils.slugify(fields['title']) + '.md'
          };
        }
        if (modelName === 'post' && projectId === 'df5972ac-794e-00af-9a90-555c0fa81d4c' && source === '@kentico/sourcebit-source-kontent') {
          const { __metadata, 'content': content, layout, ...frontmatterFields } = entry;
          return {
            content: {
              body: fields['content'],
              frontmatter: { ...frontmatterFields, layout: fields['layout'] },
            },
            format: 'frontmatter-md',
            path: '_posts/' + createdAt.substring(0, 10) + '-' + utils.slugify(fields['title']) + '.md'
          };
        }
        }
      }
    }
  ]
}
