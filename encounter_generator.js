//Roll a die with a passed side count
const dieRoll = dieType => {
    return Math.ceil(dieType*Math.random());    
}

//Initialize the string that will contain the final encounter description

const encounter = [];

//Set objects containing phrases for each piece of encounter message (setting, obstacle)

//Establish the setting for the encounter by randomly assigning the enviroment, temperature, wind, and percipitation
const encntrSetting = () => {
    const landscape = [ "The trail ahead turns left behind a stand of trees.", "A wide sandy bank along a coursing river lies to the right of your path.", "A glade opens up in the tree canopy with dappled light and knee high grass just ahead of you.", "A rocky incline rises on both sides of your path as you walk into a ravine.", "A copse of trees covers the path providing dense cover up ahead.", "A small pristine lake sits undisturbed surrounded by dense brush and cattails."]
    const temperature = ["freezing","cold","chilly","cool","mild","pleasent","warm","balmy","sweltering","boiling"];
    const percipitation = ["slight drizzle", "fine mist", "deluge of rain", "thick dense fog", "clear cloudless sky"];
    const wind = ["howling", "blustery", "light breeze of", "lack of", "intermittent gust of"];
    const setting = landscape[dieRoll(landscape.length)-1] + " The air is " + temperature[dieRoll(temperature.length)-1] + ", with a " + wind[dieRoll(wind.length)-1] + " wind and a " + percipitation[dieRoll(percipitation.length)-1] + ".";

    return setting 
} 

//Randomly choose a type of obstacle them randomly assign one of the chosen type to a string 
const encntrObstacle = () => {
    const trap = ["There is a campsite in the distance that appears abandoned.", "An overturned cart is just off the path with scattered belongings all around.", "A thick blanket of leaves covers the path ahead"];
    const creature = ["Low growling comes from the brush just off the path, a pack of wolves appear.","Suddenly shadowy figure jump out from the brush brandishing knives, axes, and clubs, Bandits!", "A small gnomish man sits on a rock under a tree with a walking stick laying across his knees."];
    const location = ["You see the mouth of a cave hidden behind a pile of boulders. An aracne hum eminates from within.","Temple ruins peek out in scattered points all around, overgrown with vegetation and covered in years of dirt.","Ethereal singing floats out from a intertwined stand of trees as a faint blue glow pulses from just inside."];
    const item = ["A group of felled trees lies around a clearing a rune covered axe is buried in one of the logs", "Churned up earth pitted and full of water and mud in small patches just to the side of the path. A string of irridescent black pearls lies strewn in a shallow pool of water.", "At the edge of the path a carved stone bench sits carved into its back is the phrase: Take time for a short rest."];
    let obstacle = "";
    switch (dieRoll(4)){
        case 1:
            obstacle = trap[dieRoll(trap.length)-1];
            break;
        case 2:
            obstacle = creature[dieRoll(creature.length)-1];
            break;
        case 3:
            obstacle = location[dieRoll(location.length)-1];
            break;
        case 4:
            obstacle = item[dieRoll(item.length)-1];
            break;
        default:
            obstacle = "There seems to be nothing out of the ordinary here."
            break;
    }

    return obstacle;
}
//Call for each part of the encounter and combine to create message

console.log(encntrSetting());
console.log(encntrObstacle());