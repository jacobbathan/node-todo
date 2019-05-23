const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body)
  },
});

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: () => {
    console.log('removing note');
  },
});

yargs.command({
  command: 'list',
  describe: 'list a note',
  handler: () => {
    console.log('listing notes');
  },
});

yargs.command({
  command: 'read',
  describe: 'read note',
  handler: () => {
    console.log('reading notes');
  },
});

yargs.parse();
