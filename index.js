const tips = ["What really happened to Aaron Schwarz?", "undefined", "[Intentionally left blank]", "\"I\'ll worry about is later\"-every programmer", "NP=P?", "This cake isn\'t lying.", "The floor here is made of floor.", "Do not attempt to escape.", "Feeling stressed? Don\'t worry, you\'re only here forever."];
const getTips = (Amount = 1) => {
    if(Amount < 1) Amount = 1;
    if (Amount == 1) return Math.floor(Math.random() * tips.length + 1)
    else {
        let r=[];
        for(i=0;i<Amount+1;i++) {
            r.push(Math.floor(Math.random() * tips.length + 1))
        } return r;
    }
}
exports.getTips = getTips;