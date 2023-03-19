//Roll a die with a passed side count
const dieRoll = dieType => {
    return Math.ceil(dieType*Math.random());    
}

//Set objects containing phrases for eacn piece of encounter message (setting, obstacle, attitude)

const encntrSetting = () => {
    const landscape = [ "The trail ahead turns left behind a stand of trees.", "A wide sandy bank along a coursing river lies to the right of your path.", "A glade opens up in the tree canopy with dappled light and knee high grass just ahead of you.", "A rocky incline rises on both sides of your path as you walk into a ravine.", "A copse of trees covers the path providing dense cover up ahead.", "A small pristine lake sits undisturbed surrounded by dense brush and cattails."]
    const temperature = ["Freezing","Cold","Chilly","Cool","Mild","Pleasent","Warm","Balmy","Sweltering","Boiling"];
    const perciptitation = ["Drizzle", "Mist", "Deluge", "Dense Fog", "Clear Skies"];
    const wind = ["Howling", "Blustery", "Light Breeze of", "Calm", "Intermittent Gusts"];
    const setting = landscape[dieRoll(6)-1] + " The air is " + temperature[dieRoll(10)-1] + ", with a " + wind[dieRoll(5)-1] + " wind and a " + perciptitation[dieRoll(5)-1];

    return setting 
} 
//Call for each part of the encounter and combine to create message

console.log(encntrSetting());
