// var playerName = "Fred";
// var playerScore = 10000;
// var playerRank = 1;
// est égal à
// var  player1 = new Object();
// player1.name = "Fred";
// player1.score = 10000;
// player1.rank = 1;
// est égal à 
var player1 =
{name:"Fred",score:10000,rank:1};
var player2 =
{name:"Sam",score:5000,rank:5};

function playerDetails(){
    console.log(this.name+" a un score de :"+this.score)
}

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

player1.logDetails();
player2.logDetails();

// console.log(player1);
// console.log(player1.name);
// console.log(player2.name);
