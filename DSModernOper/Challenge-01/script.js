"use strict";

//  1. Create one player array for each team (variables 'players1' and 'players2')
//  2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
//  3. Create an array 'allPlayers' containing all players of both teams (22 players)
//  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
//  5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
//  6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals who were scored (number of player names passed in)
//  7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Sachin Tendulkar",
      "Virat Kohli",
      "MS Dhoni",
      "Rohit Sharma",
      "Jasprit Bumrah",
      "Ravindra Jadeja",
      "Hardik Pandya",
      "KL Rahul",
      "Rishabh Pant",
      "Shubman Gill",
    ],

    [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Kylian Mbappé",
      "Neymar Jr",
      "Erling Haaland",
      "Mohamed Salah",
      "Kevin De Bruyne",
      "Robert Lewandowski",
      "Luka Modrić",
      "Harry Kane",
    ],
  ],
  score: "4:0",
  scored: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Rohit Sharma"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//  1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

//  2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//  3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//  5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//  6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals who were scored (number of player names passed in)
const printGoals = function (...player) {
    console.log(`${player.length} goals were scored`);
    
};
printGoals("Hardik Pandya", "KL Rahul", "Rishabh Pant", "Shubman Gill");
printGoals("Hardik Pandya", "KL Rahul");
//  7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 is likely  to win');
