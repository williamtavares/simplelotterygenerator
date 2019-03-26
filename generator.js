function powerballGenerator() {

    let listOfNumbers = [];

    for(var currentNumber = 0; currentNumber < 6; currentNumber++) {
        let randomNumber;

        if(currentNumber == 5) {
            randomNumber = Math.floor((Math.random() * 26) + 1);
            while(listOfNumbers.includes(randomNumber)) {
                randomNumber = Math.floor((Math.random() * 26) + 1);
            }
        } else {
            randomNumber = Math.floor((Math.random() * 69) + 1);
            while(listOfNumbers.includes(randomNumber)) {
                randomNumber = Math.floor((Math.random() * 69) + 1);
            }            
        }
        listOfNumbers.push(randomNumber);
    }

    console.log("Powerball: " + listOfNumbers);
}

function megaGenerator() {

    let listOfNumbers = [];

    for(var currentNumber = 0; currentNumber < 6; currentNumber++) {
        let randomNumber;

        if(currentNumber == 5) {
            randomNumber = Math.floor((Math.random() * 25) + 1);
            while(listOfNumbers.includes(randomNumber)) {
                randomNumber = Math.floor((Math.random() * 25) + 1);
            }
        } else {
            randomNumber = Math.floor((Math.random() * 70) + 1);
            while(listOfNumbers.includes(randomNumber)) {
                randomNumber = Math.floor((Math.random() * 70) + 1);
            }            
        }
        listOfNumbers.push(randomNumber);
    }

    console.log("Mega Millions: " + listOfNumbers);
}

megaGenerator();
powerballGenerator();