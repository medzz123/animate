module.exports.setGenerator = function (plop) {
  plop.setGenerator('controller', {
    description: 'Generates Equals Money Page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of the Page?",
        validate: function (value) {
          let message = true;
          if (!/.+/.test(value)) {
            message = console.log('Missing', 'you must define a page name');
          }
          return message;
        },
      },
    ],
    actions: function () {
      return [
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}/index.ts',
          templateFile: 'generate/page/templates/index.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'generate/page/templates/page.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'generate/page/templates/styles.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'generate/page/templates/story.hbs',
        },
        {
          type: 'add',
          path: 'pages/{{kebabCase name}}.ts',
          templateFile: 'generate/page/templates/next-page.hbs',
        },
      ];
    },
  });
};
