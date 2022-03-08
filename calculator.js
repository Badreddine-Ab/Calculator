//---------------------------------- variables -----------------------//

var screen = document.getElementById("screen");
var numChar; //totoal of typed characters
var currentChar, previousChar; //store previous and current typed charchters
var operations = ['+', '-' , '*' , '/' ];
var errorMsg = 'la impossi 🤯🙅🏼‍♀️';


//-----------------------------functions -----------------------//

function clearScreen(){
    screen.value = "";
}

function display(c){
    screen.value += c;
    numChar = screen.value.length;
    currentChar = c;
    getPreviousChar();
}

function calculate(){
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = errorMsg ;
    }
}

function getPreviousChar(){
    previousChar = screen.value.substring(numChar-2,numChar-1);
    checkSyntax();
}

function checkSyntax(){
    if(operations.includes(currentChar) && numChar == 1 && currentChar != "-" ) {
        removeChar();
    }
    if(operations.includes(previousChar) && operations.includes(currentChar)){
        if(previousChar == currentChar){
            removeChar();
        }else{
            overwrite();
        }
        
    }
    
}

function overwrite(){
    screen.value = screen.value.slice(0,numChar-2)+screen.value.slice(numChar-1);
}

function removeChar(){
    screen.value = screen.value.substring(0,numChar-1);
}

