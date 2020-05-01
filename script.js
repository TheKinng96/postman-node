const fs = require('fs');

fs.readFile('./hello.txt', (err,data) => {
    if (err) {
        console.log('errrrrorrrr');
    }
    console.log('async', data.toString('utf8')); //program will keep reading the file 
})

const file = fs.readFileSync('./hello.txt');//program will prioritise reading the file before read through other codes
console.log('sync', file.toString())


//Append
// fs.appendFile('./hello.txt', 'This is so cool', err => {
//     if (err) {
//         console.log(err);
//     }
// })

//Write
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err)
//     }
// })

//delete
// fs.unlink('./bye.txt',err => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('Inception')
// })