//This program generates random messages for the user
const messages = 
    [
        "You can do it", "You need to wait for it to happen",
        "It will never happen", "It is going to happen soon",
        "You will meet someone who's gonna change your life", "Move on",
        "You need to work harder for it", "Cannot predict it",
        "Luck is in your favour", "Luck is not in your favour",
        "Good things are on your way", "Take sometime off",
        "You need to be careful", "Things will get better in the future"
    ];

console.log("Welcome to the decision maker!");
console.log("Here you can get answers to all your lingering thoughts!");
console.log("========================================================");

const fetchRandomMessage = () => {
    let messageLength = messages.length;
    return messages[Math.floor(Math.random() * messageLength)];
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
