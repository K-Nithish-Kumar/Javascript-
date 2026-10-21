const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;
const movementsUSD = movements.map(function(mov) {
    return mov * euroToUSD;
})

console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map((mov, i) => 
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited': 'withdrew'} ${Math.abs(mov)}`
    // if(mov > 0) {
    //     return `Movement ${i+1}: You deposited ${mov}`;
    // } else {
    //     return `Movement ${i+1}: You withdrew ${Math.abs(mov)}`;
    // }
)

console.log(movementsDescription);

