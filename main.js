//currency ---------------------------------------------
var coin = 0;

function coinClick(number){
    coin = coin + number;
    document.getElementById("coin").innerHTML = coin;
};

//paperrounds ---------------------------------------------
var paper = 0;


function buyPaper(number) {
var paperCost = Math.floor(10 * Math.pow(1.3, paper));     //works out the cost of this cursor
    if(coin >= paperCost){                             //checks that the player can afford the cursor
        paper = paper + 1;                                   //increases number of cursors
    	coin = coin - paperCost;                          //removes the cookies spent
        document.getElementById('paper').innerHTML = paper;  //updates the number of cursors for the user
        document.getElementById('coin').innerHTML = coin;  //updates the number of cookies for the user
    };
    var nextPaperCost = Math.floor(10 * Math.pow(1.3, paper));
    document.getElementById('paperCost').innerHTML = nextPaperCost;  //updates the cursor cost for the user
};

//supermarket---------------------------------------------
var supermarket = 0;

function buySupermarket(number) {
var supermarketCost = Math.floor(50 * Math.pow(1.5, supermarket));
	if(coin >= supermarketCost){
		supermarket = supermarket + 1;
		coin = coin - supermarketCost;
		document.getElementById('supermarket').innerHTML = supermarket;
		document.getElementById('coin').innerHTML = coin;
	};
	var nextSupermarketCost = Math.floor(50 * Math.pow(1.5, supermarket));
	document.getElementById('supermarketCost').innerHTML = nextSupermarketCost;
	
};

//SaveGame ---------------------------------------------

function saveGame() {
	var save = {
	    coin: coin,
	    paper: paper,
	    supermarket: supermarket,
	}
	localStorage.setItem("save",JSON.stringify(save));
}

//LoadGame ---------------------------------------------

function loadGame(){
	var loadgame = JSON.parse(localStorage.getItem("save"));
	if (typeof loadgame.coin !== "undefined") coin = loadgame.coin;
	if (typeof loadgame.paper !== "undefined") paper = loadgame.paper;
	if (typeof loadgame.supermarket !== "undefined") supermarket = loadgame.supermarket;
	document.getElementById('coin').innerHTML = coin;
	document.getElementById('paper').innerHTML = paper;
	document.getElementById('supermarket').innerHTML = supermarket;
	var nextPaperCost = Math.floor(10 * Math.pow(1.3, paper));
    document.getElementById('paperCost').innerHTML = nextPaperCost;
	var nextSupermarketCost = Math.floor(50 * Math.pow(1.5, supermarket));
	document.getElementById('supermarketCost').innerHTML = nextSupermarketCost;
}

function delSave(){
	localStorage.removeItem("save")
}


//interval ---------------------------------------------
window.setInterval(function(){

	coinClick(paper);
	coinClick(supermarket * 5);
	
}, 1000);







