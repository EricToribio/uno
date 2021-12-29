const colors = ["red", "blue", "yellow", "green"]
const values = [ "0","1","2","3","4","5","6","7","8","9","skip","Draw two","reverse"]
const specials = ["wild", "wild draw four"]


// export default class Deck{
//     constructor(cards = newDeck()){
//         console.log(cards)
//         this.cards = cards
//     }
//     get numOfCards(){
//         return this.cards.length
//     }
// }






export default function newDeck(){
    let unoDeck = []
    for (let i = 0; i < colors.length; i++){
        for (let j = 0; j < values.length; j++){
            unoDeck.push(colors[i] +" " + values[j])
            if(values[j] != "0"){
                unoDeck.push(colors[i] + " " + values[j])
            }
        }
    }
    for(let k = 0; k < 4; k++){
        unoDeck.push(specials[0])
        unoDeck.push(specials[1])
    }
    return unoDeck
}


