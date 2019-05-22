const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// const notes = getNotes();

// Customize yargs version
yargs.version('1.1.0');

// create add command
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

// create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: () => {
    console.log('removing note');
  },
});

// create list command
yargs.command({
  command: 'list',
  describe: 'list a note',
  handler: () => {
    console.log('listing notes');
  },
});

// create read command
yargs.command({
  command: 'read',
  describe: 'read note',
  handler: () => {
    console.log('reading notes');
  },
});

yargs.parse();
//console.log(yargs.argv);
