//Roll a die with a passed side count
const dieRoll = dieType => {
    return Math.ceil(dieType*Math.random());    
}

console.log(dieRoll(20));