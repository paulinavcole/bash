const fs = require('fs');

module.exports = function() {
    const params = cmd.split(' ')
    fs.readFile(params[1]), (err, result) => {
        if(err) {
            process.stdout.write(err)
            process.stdout.write('\nprompt >')
        }
        else {
            process.stdout.write(result)
            process.stdout.write('\nprompt >')
        }
    }
}