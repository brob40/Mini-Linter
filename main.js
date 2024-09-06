let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
//step 1 usin the split() method, I can seperate each word into an index of an arrary
let storyWords = story.split(' ')
// //step2 console log the words. 
// console.log(storyWords.length)
//step 3 filtered storyWords to return word(indexes) that are not in the unnecessaryWrods array
//.includes(word) checks to see if the index(word) exists in the unecessaryWords. ! returns words NOT in the unecessary Words Array 
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
// logged length of the new array to see if it took out the words
console.log(`There are ${betterWords.length} words in the paragraph.`)
//STEP 4: created the rcount, vcount, and bcount variables to 0. 
let rcount = 0
//ran a for loop with an if statement. if the index(words) = one of the overUsedWords, it add a number to the count. 
storyWords.forEach(words => {
    if (words === 'really') {
        return rcount += 1
    }
    
});
// Utilized the ${} to input new variables in a string. 
console.log(`"really" appears ${rcount} times.`)
let vcount = 0

storyWords.forEach(words => {
    if (words === 'very') {
        return vcount += 1
    }
    
});
console.log(`"very" appears ${vcount} times.`)

let bcount = 0

storyWords.forEach(words => {
    if (words === 'basically') {
        return bcount += 1
    }
    
});
console.log(`"basically" appears ${bcount} times.`)
//Step 5: utilized .endsWith() to find the end of the sentence and add to sentenceCounter
var sentenceCounter = 0; 
storyWords.forEach(ending => {
    if(ending.endsWith('!') || ending.endsWith('.')){
        return sentenceCounter += 1
    }
});


console.log(`There are ${sentenceCounter} sentences in the paragraph.`)

console.log(betterWords.join(' ')); 

