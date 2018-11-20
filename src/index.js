const program = require('commander');

const list = require('./resources/list');
const order = require('./resources/order')


program
    .command('init')
    .description('create a new project')
    .action(init)

program.parse(process.argv)