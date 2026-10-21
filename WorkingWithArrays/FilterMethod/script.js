const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
    // Only filter out deposits
    return mov > 0; 
})

console.log(deposits);

const withdrawal = movements.filter(function (mov) {
    return mov < 0;
})

console.log(withdrawal);

