const readline = require('readline-sync')

function splitter(anyString){
    let arrayChar = anyString.split('')
    let letter = arrayChar.splice(arrayChar.length - 1, 1)
    let number = arrayChar.join("")
    let data = []
    data.push(number); data.push(letter[0])
    return data
}

function CodeToChar(code){
    let char = String.fromCharCode(code)
    return char
}

function ChartoCode(character){
    let code = character.charCodeAt(0)
    return code
}

let rowArray = []

let userRows = readline.question('Define rows: ')
let userColumn = readline.question('Define columns: ')

for(let i = 0; i < userRows; i++){
    rowArray[i] = new Array(userColumn)
    for(let n = 0; n < userColumn; n++){
        rowArray[i][n] = "-"
    }
}

let userInput = ""
let letterCode
let seatData
let seatLetter
let seatNumber

let scanlines = ""

while(userInput !== "END"){
    userInput = readline.question("Enter Seat (eg. 10A, 16B): ")
        
        seatData = splitter(userInput)
        seatLetter = seatData[1]
        seatNumber = Number(seatData[0])
        letterCode = Number(ChartoCode(seatLetter)) - 65

        if(rowArray[letterCode][seatNumber-1] == "-"){
            rowArray[letterCode][seatNumber-1] = "x"
        }

        
        else if(userInput == "SC"){
            
            scanlines = ""
            for(let i = 0; i < userRows; i++){
                let gridLegend = CodeToChar(i+65)
                scanlines += "\t" + gridLegend
            }
            console.log(scanlines)
            
            scanlines = ""
            for(let i = 0; i < userColumn; i++){
                scanlines = i+1
                for(let n = 0; n < userRows; n++){
                    scanlines += "\t" + rowArray[n][i]
                }
                console.log(scanlines)
            }
        }
        
        else if(rowArray[letterCode][seatNumber-1] !== "-" && userInput!=="SC" && userInput!=="END"){
            console.log("Seat already taken.")
        }

        else if(userInput == "END"){
            console.clear()
            scanlines = ""

            for(let i = 0; i < userRows; i++){
                gridLegend = CodeToChar(i+65)
                scanlines += "\t" + gridLegend
            }
            console.log(scanlines)
            
            scanlines = ""
            for(let i = 0; i < userColumn; i++){
                scanlines = i+1
                for(let n = 0; n < userRows; n++){
                    scanlines += "\t" + rowArray[n][i]
                }
                console.log(scanlines)
            }
        }

        else{
            console.log("Error! Try again.")
        }
}  