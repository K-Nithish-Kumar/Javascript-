function cutPieces(fruit) {
    return fruit * 4;
}

function juiceProcessor(noOfApples, noOfOranges) {
    const applePieces = cutPieces(noOfApples); // This is known as function calling other functions;
    const orangePieces = cutPieces(noOfOranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`

    return juice;
}

console.log(juiceProcessor(3, 4));
