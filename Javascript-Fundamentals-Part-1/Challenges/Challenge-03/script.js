const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
} else if(scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy") ;
} else if(scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
}