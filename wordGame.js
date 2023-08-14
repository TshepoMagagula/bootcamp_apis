export function longestWord(sentence){
    const eachWord = sentence.split(" ");
    let longestWrd = 0;
    let longWordPosTracker = 0;
    for(let i = 0; i < eachWord.length; i++){  
        if(longestWrd <= eachWord[i].length){
            longestWrd = eachWord[i].length;
            longWordPosTracker = i;
        }
    }
    return eachWord[longWordPosTracker];
}

export function shortestWord(sentence){
    const eachWord = sentence.split(" ");
    let shortstWrd = eachWord[0];
    for(let i = 0; i < eachWord.length; i++){
        if(shortstWrd.length >= eachWord[i].length){
            shortstWrd = eachWord[i];   
        }
    }
    return shortstWrd;
}
    
export function wordLengths(sentence){
    const eachWord = sentence.split(" ");
    let sum = 0;
    for(let i = 0; i < eachWord.length; i++){
        sum += eachWord[i].length
    }
    return sum;
}
