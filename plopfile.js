const config = plop => {
    plop.setGenerator("test", {
        description: 'Generate test file',
        prompts: [
{
    type: 'input',
    name: 'title',
    message: 'What do you want to title this post? \n'
},
{type: 'input',
name: 'path',
message: "Which path do you want to set? \n"
}
        ],
        actions: [{
            type: "add",
            path: "{{path}}/{{pascalCase title}}.test.tsx",
            templateFile: "src/templates/TemplateName.hbs",

        }]
    })
}
module.exports = config;