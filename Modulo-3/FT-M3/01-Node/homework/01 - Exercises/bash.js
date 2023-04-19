const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

const bash = () => {
   process.stdout.write('prompt >')

   process.stdin.on('data', (data) => {
      let args = data.toString().trim().split('');
      let cmd = args[0]

      commands[cmd]
      ? commands[cmd](print, args.join(' '))
      : print(`command not found ${cmd}`)
   })
}

const print = (output) => {
   process.stdout.write(output) //nos permite escribir y que se muestre en la consola
   process.stdout.write('\nprompt > ')
}

bash();
module.exports = {
   print,
   bash,
};
