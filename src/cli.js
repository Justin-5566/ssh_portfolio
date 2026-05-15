#!/usr/bin/env node

const { build } = require('./build');

/**
 * CLI entry point for npm scripts
 */
const args = process.argv.slice(2);
const command = args[0];

async function main() {
  switch (command) {
    case '--watch':
    case '-w':
      console.log('👀 Watch mode not yet implemented');
      console.log('Run "npm run build" to rebuild after changes');
      break;
    default:
      await build();
  }
}

main().catch((error) => {
  console.error('CLI Error:', error);
  process.exit(1);
});
