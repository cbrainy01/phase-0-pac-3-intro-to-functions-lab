function shout(string) {

return string.toUpperCase();    
}

function whisper(string) {

    return string.toLowerCase();
}

function logShout(string) {
string.toUpperCase();
console.log(string.toUpperCase());
}

function logWhisper(string) {
string.toLowerCase();
console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
const tooLow = "I can't hear you!";
const confirmed = "YES INDEED!";
    if (string.toLowerCase() === string) {
    return tooLow;
}
else if(string.toUpperCase() === string) {
return confirmed;
}
else if(string === "I love you, Grandma.") {
    return "I love you, too."
}

}