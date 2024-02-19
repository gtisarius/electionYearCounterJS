const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let electionCount = []

function getElections(startYear, term, elections) {
    electionCount.push(startYear)
    let currentElection = startYear + term
    for (let election = 1; election < elections; election++) {
        electionCount.push(currentElection)
        currentElection += term
    }
    return electionCount;
}

function mainMenu() {
    rl.question("Please insert the starting election year. Ex: 1788 for USA elections: ", (startingYear) => {
        rl.question("Please insert term limit years. Ex: USA has four year terms: ", (termLimit) => {
            rl.question("Finally, enter number of elections generated. Ex: There are sixty US presidential elections as of 2024: ", (numberOfElections) => {
                console.log("Starting year: " + startingYear)
                console.log("Term limit: " + termLimit)
                console.log("Total election count: " + numberOfElections)
                rl.question("Are these settings correct? Press y to confirm: ", (yesOrNo) => {
                    if (yesOrNo == 'y') {
                        console.log(getElections(Number(startingYear), Number(termLimit), Number(numberOfElections)))
                    } else {
                        mainMenu()
                    }
                })
            })
        })
    })
}

mainMenu()