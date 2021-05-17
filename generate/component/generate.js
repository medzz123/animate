/**
 * Generates a new component in demand
 */
module.exports.setGenerator = function (plop) {
  plop.setGenerator('controller', {
    description: 'Generates Equals Money Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of the Component?",
        validate: function (value) {
          let message = true;
          if (!/.+/.test(value)) {
            message = console.log(
              'Missing',
              'you must define a component name'
            );
          }
          return message;
        },
      },
    ],
    actions: function () {
      return [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/index.ts',
          templateFile: 'generate/component/templates/index.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'generate/component/templates/component.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'generate/component/templates/styles.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'generate/component/templates/story.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{pascalCase name}}/{{pascalCase name}}.models.tsx',
          templateFile: 'generate/component/templates/models.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'generate/component/templates/test.hbs',
        },
      ];
    },
  });
};
