// Program purpose: generate random responses
// define variables for pokemon
const starters = ['Bulbasaur', 'Squirtle', 'Charmander', 'Chikorita', 'Totodile', 'Cyndaquil', 'Treecko', 'Mudkip', 'Torchic', 'Turtwig', 'Piplup', 'Chimchar', 'Snivy', 'Oshawott', 'Tepig', 'Chespin', 'Froakie', 'Fennekin', 'Rowlet', 'Popplio', 'Litten', 'Grookey', 'Scorbunny', 'Sobble', 'Pikachu', 'Eevee'];
const natures = ['hardy', 'lonely', 'brave', 'adamant', 'naughty', 'bold', 'docile', 'relaxed', 'relaxed', 'impish', 'lax', 'timid', 'hasty', 'serious', 'jolly', 'naive', 'modest', 'mild', 'quiet', 'bashful', 'rash', 'calm', 'gentle', 'sassy', 'careful', 'quirky'];
const genders = ['male', 'female', 'nonbinary'];
const bestIV = ['health', 'attack', 'defense', 'special attack', 'special defense', 'speed'];

generateStarter = () => {
    const currentStarter = starters[Math.floor(Math.random() * starters.length)]; // randomly selects a starter
    const currentNature = natures[Math.floor(Math.random() * natures.length)]; // randomly selects a nature
    const currentGender = genders[Math.floor(Math.random() * genders.length)]; // randomly selects a gender
    const currentIV = bestIV[Math.floor(Math.random() * bestIV.length)]; // randomly selects a best IV

    return 'Your new starter pokemon is ' + currentStarter + '! ' + 'Your cute little ' + currentStarter + "'s nature is " + currentNature + '. Your ' + currentGender + ' PokeBaby has a great ' + currentIV + ' stat!';
}

console.log(generateStarter()); // outputs random text