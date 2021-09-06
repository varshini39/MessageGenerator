//This program generates random messages for the user
const messages = 
{
    "first_set": 
    [
        "You can do it", "You need to wait for it to happen",
        "It will never happen", "It is going to happen",
        "You will meet someone who's gonna change your life", "Move on",
        "You need to work harder for it", "Cannot predict it",
        "Luck is in your favour", "Luck is not in your favour",
        "Good things are on your way", "Take sometime off",
        "You need to be careful", "Things will get better"
    ],
    "second_set": 
    [
        "in the future", "in 5 minutes",
        "in one hour", "forever",
        "always", "in 3 years",
        "in a decade", "soon",
        "after 90 days", "in few seconds"
    ],
    "third_set":
    [
        "here", "at your favourite city",
        "at your hometown", "in your dreams",
        "at your home", "in space",
        "at the airport", "at the dining hall"
    ]
};

console.log("Welcome to the decision maker!");
console.log("Here you can get answers to all your lingering thoughts!");
console.log("========================================================");

const fetchRandomMessage = () => {
    let firstSetMsg = messages.first_set [Math.floor(Math.random() * messages.first_set.length)];
    let secondSetMsg = messages.second_set[Math.floor(Math.random() * messages.second_set.length)];
    let thirdSetMsg = messages.third_set[Math.floor(Math.random() * messages.second_set.length)];
    return `${firstSetMsg} ${secondSetMsg} ${thirdSetMsg}`;
}

const generateMessage = (userName) => {
    return {
        name: userName,
        messageGen: function() {
            console.log(`${this.name}, Think of any question for which you need answers`);
            console.log("---------------------------------------------------------");
            setTimeout(() => {
                console.log("Analyzing your question...");
                setTimeout(() => {
                    console.log(fetchRandomMessage());
                    setTimeout(() => {
                        console.log("_______________________________________________________");
                        console.log("Thank you! You can try again if you have another question");
                    }, 2000);
                }, 2000);
            }, 5000);
        }
    }
}

let userOne = generateMessage("John");
userOne.messageGen();
