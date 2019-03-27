
$(document).ready(function() {

    $("#generateButton").click(function() {

        let lotteryType = $("input[name='lotteryType']:checked").val();
        let ticketAmount = isNaN(parseFloat($("#ticketQuantity").val())) ? 0 : parseFloat($("#ticketQuantity").val());

        let listOfTickets = [];
        
        for(let counter = 0; counter < ticketAmount; counter++) {
            if(lotteryType == "powerball") {
                listOfTickets.push(powerballGenerator());
            } else if(lotteryType == "megaMillions") {
                listOfTickets.push(megaGenerator());
            }
        }

        populateScreen(listOfTickets);
    });

});

function populateScreen(listOfTickets) {
    if(listOfTickets.length > 0) {
        let listHtml = "";
        for(let ticket in listOfTickets) {
            listHtml = listHtml +
            "<ul>"
            + "<li>"+ listOfTickets[ticket][0] +"</li>"
            + "<li>"+ listOfTickets[ticket][1] +"</li>"
            + "<li>"+ listOfTickets[ticket][2] +"</li>"
            + "<li>"+ listOfTickets[ticket][3] +"</li>"
            + "<li>"+ listOfTickets[ticket][4] +"</li>"
            + "<li class='powerball-number'>"+ listOfTickets[ticket][5] +"</li>"
            + "</ul>"
        }
        $("#generated-numbers-container").html(listHtml);
    }
}

function powerballGenerator() {

    let listOfNumbers = [];

    for(let currentNumber = 0; currentNumber < 6; currentNumber++) {
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

    return listOfNumbers;
}

function megaGenerator() {

    let listOfNumbers = [];

    for(let currentNumber = 0; currentNumber < 6; currentNumber++) {
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

    return listOfNumbers;
}