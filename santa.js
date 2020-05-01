const fs = require('fs');



// 1- what floor does santa end up on
question1 = () =>{
    fs.readFile('./santa.txt', (err,data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
        },0) //start up with 0 floor
        console.log('floor', answer)
    })
}

question1();

// 2- when does santa first enter the basement
question2 = () => {
    fs.readFile('./santa.txt', (err,data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentValue) => {
            if (currentValue === '(') {
                 accumulator +=1
            }else if (currentValue === ')') {
                 accumulator -=1
            }
            counter ++
            return accumulator < 0;
        })
        console.log('basement entered at: ', counter)
    })
}

question2();