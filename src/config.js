
/* IMPORT */

const _ = require ( 'lodash' ),
      argv = require ( 'minimist' )( process.argv.slice ( 2 ) ),
      path = require ( 'path' );

/* CONFIG */

const Config = {
  path: {
    src: argv.src ? _.castArray ( argv.src ) : [],
    dst: argv.dst ? path.resolve ( argv.dst ) : path.join ( process.cwd (), 'dump' )
  },
  dump: {
    attachments: argv.hasOwnProperty ( 'attachments' ) ? argv.attachments : true,
    notes: argv.hasOwnProperty ( 'notes' ) ? argv.notes : true,
    metadata: argv.hasOwnProperty ( 'metadata' ) ? argv.metadata : true,
    sourceUrl: argv.hasOwnProperty ( 'source-url' ) ? argv.sourceUrl : true,
    tags: argv.hasOwnProperty ( 'tag' ) ? _.castArray ( argv.tag ) : [],
    formats: ['html', 'markdown'],
    format: argv.format || 'markdown',
    extension: argv.extension || 'md'
  },
  attachments: {
    get path () {
      return path.join ( Config.path.dst, 'attachments' );
    }
  },
  notes: {
    get path () {
      return path.join ( Config.path.dst, 'notes' );
    }
  }
};

/* EXPORT */

module.exports = Config;
