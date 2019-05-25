var questions = [{
    ques: "What does Atari mean?",
    ans: ["Enjoy", "Future", "Success", "Gamer Juice"],
    name: "atari",
    correct: "Success",
    divClass: ".atari",
},
{
    ques: "What Game was the character Master Hands in?",
    ans: ["Super Smash Bros", "Star Fox", "Kirby", "Cooking Mama"],
    name: "hands",
    correct: "Super Smash Bros",
    divClass: ".hands",
},
{
    ques: "Which game was delayed because of a hidden pictures of a devs ass?",
    ans: ["Bioshock", "Mortal Kombat 9", "Metal Gear Solid", "Halo 2"],
    name: "halo",
    correct: "Halo 2",
    divClass: ".halo",
},
{
    ques: "Who is the brother of Liquid Snake in the Metal Gear series?",
    ans: ["Revolver Ocelot", "Big Boss", "Liquid Snake", "Super Mario"],
    name: "snake",
    correct: "Liquid Snake",
    divClass: ".snake",
},
{
    ques: "What color were Spyros wings ?",
    ans: ["Purple", "Yellow", "Red", "Blue"],
    name: "spyro",
    correct: "Yellow",
    divClass: ".spyro",
},
{
    ques: "To trade in pokemon Red, blue, and yellow what did players need to use?",
    ans: ["A cable", "A fax machine", "A wireless connection", "A car battery"],
    name: "pokemon",
    correct: "A cable",
    divClass: ".pokemon",
},
{
    ques: "In the original game, an old man gives Link a sword. In the new game an old man gives Link what?",
    ans: ["A bow and arrow", "Bad advice", "Breakable armor", "Baked apples"],
    name: "link",
    correct: "Baked apples",
    divClass: ".link",
},
{
    ques: "Where did the fairy Navi get her name?",
    ans: ["Navigate", "North American Vampire Inc.", "Navel", "Navy"],
    name: "navi",
    correct: "Navigate",
    divClass: ".navi",
},
{
    ques: "What video game engine does quake 2 run in?",
    ans: ["Unity", "iD Tech 2", "Unreal Engine 4", "Frostbyte"],
    name: "quake",
    correct: "iD Tech 2",
    divClass: ".quake",
},
{
    ques:"What was the code name for the Nintendo Gamecube?",
    ans: ["Cube", "Square Boi", "Chonky", "Dolphin"],
    name: "cube",
    correct: "Dolphin",
    divClass: ".cube",
},
] //ends question array of objects

var labels = ["first", "second", "third", "fourth"];

//game starts question displayed
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

//displaying question
var questionDisplay = function() {
    $(".questions".not('#sub-but')).empty();
    for(var i = 0; i < 10; i++) {
        $('.questions').prepend
    }
}