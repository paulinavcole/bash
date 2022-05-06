//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data, fileName) => {
  const cmd = data.toString().trim(); //remove the newline
  if(cmd === 'pwd') {
    const pwd= require('./pwd');
    return pwd()
  }
  if (cmd === 'ls') {
    const ls = require('./ls');
    return ls()
  }
  if (cmd.startsWith('cat')) {
    const cat = require('./cat')
    return cat(cmd)
  }
  else {
      process.stdout.write('You typed: ' + cmd);
  }
      process.stdout.write('\nprompt > ');
  
});

