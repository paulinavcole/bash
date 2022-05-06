const fs = require('fs');

module.exports = function(cmd) {
    const params = cmd.split(' ')

    try{
    const markup = fs.readFileSync(params[1], {encoding: "utf8"});
    console.log(markup)


    } catch (error) {
        console.log("file doesn't exist")

    }

    // fs.readFileSync(params[1]), (err, result) => {
    // //     console.log('inside readfile')
    // //     // if(err) {
    // //     //     process.stdout.write(err.message)
    // //     //     process.stdout.write('\nprompt >')
    // //     // }
    // //     // else {
    // //     //     process.stdout.write(result)
    // //     //     process.stdout.write('\nprompt >')
    // //     // }
    // // }
}