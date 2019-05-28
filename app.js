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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'Title of note to be deleted',
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'list a note',
  handler() {
    console.log('listing notes');
  },
});

yargs.command({
  command: 'read',
  describe: 'read note',
  builder: {
    title: {
      describe: 'Title of note to read',
      demandOption: true,
      type: 'string',
    },
  },
  handler() {
    console.log('reading notes');
  },
});

yargs.parse();
