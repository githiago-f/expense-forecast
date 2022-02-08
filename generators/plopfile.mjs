export default function (plop) {
  plop.setGenerator('co', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
      },
    ],
  });

  plop.setGenerator('te', {
    description: 'create a template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your template name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/template.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/{{pascalCase name}}.module.css',
      },
    ],
  });

  plop.setGenerator('mo', {
    description: 'create a model',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your model?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/model/{{snakeCase name}}.ts',
      },
    ],
  });
}
