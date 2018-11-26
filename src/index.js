const program = require('commander');

program
    .command('init')
    .alias('i')
    .description('create a new project')
    .action(init)

program.parse(process.argv)