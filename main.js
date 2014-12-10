//////////////////////////////////////
//			Basic Syntax			//
//////////////////////////////////////

function updateInnerHTML(){
	
	//Updating amounts of machines and coins you have.
	document.getElementById('coin').innerHTML = coin;
	document.getElementById('paper').innerHTML = paper;
	document.getElementById('supermarket').innerHTML = supermarket;
	document.getElementById("power").innerHTML = power;
	
	//Calculating next costs based on your machines.
	var nextPaperCost = Math.floor(10 * Math.pow(1.3, paper));
	var nextSupermarketCost = Math.floor(50 * Math.pow(1.5, supermarket));
	var powerCost = Math.floor(20 * Math.pow(1.25, power));
	
	//Calling the price of you machines.
    document.getElementById('paperCost').innerHTML = nextPaperCost;
	document.getElementById('supermarketCost').innerHTML = nextSupermarketCost;
	document.getElementById("powerCost").innerHTML = nextPowerCost;

}


//////////////////////////////////////
//			Base Currency			//
//////////////////////////////////////
var coin = 0;

//The Manual Click
function coinClick(number){
    coin = coin + (number * power);
    document.getElementById("coin").innerHTML = coin;
};

//The autocoins function
function coinAuto(number){
	coin = coin + number;
    document.getElementById("coin").innerHTML = coin;
};

//////////////////////////////////////////
//			Automatic Things			//
//////////////////////////////////////////

// ---------------- Base variables
var paper = 0;
var supermarket = 0;

// ---------------- Paperrounds !
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

//---------------- Supermarkets !
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

//////////////////////////////////////////////
//			Clicking Power (Pro)			//
//////////////////////////////////////////////
var power = 1;

function clickPower(number){
	var powerCost = Math.floor(20 * Math.pow(1.25, power));
	if (coin >= powerCost) {
		power = power + number;
		coin = coin - powerCost;
		document.getElementById("power").innerHTML = power;
		document.getElementById("coin").innerHTML = coin;
		};
	var nextPowerCost = Math.floor(20 * Math.pow(1.3, power));
	document.getElementById("powerCost").innerHTML = nextPowerCost;
}

//////////////////////////////////////////////////
//			  Experience & Abilities			//
//////////////////////////////////////////////////
var experience = 0;
var nextLevel = 100;

function addExperience(){
	
	
}

function levelUp(){
	
	
}


//////////////////////////////////
//			SaveGame			//
//////////////////////////////////
var autoSave = true;
var autoSaveTime = 10;
var autoState;


//If you want to delete you game, do it here or just click the button.
function delSave(){
	localStorage.removeItem("save")
}

//Interval of 10 seconds for autosave (probably making this configurible).
autoSaveInterval=setInterval(function() {
	autoSaveTime--;
	if(autoSaveTime == 0) {
		autoSaveTime = 10;
		console.log("saved auto");
		saveGame("local");
	}
},1000);

function saveGame(how) {
	//Local Save ============================
	if(how=="local"){
	var save = {
	    coin: coin,
	    paper: paper,
	    supermarket: supermarket,
	    power: power
	}
	localStorage.setItem("save",JSON.stringify(save));
	console.log("Save local (This is just to make sure it works)");
	}
	//Autosave ==============================
	else if(how=="auto"){
		console.log(autoSave);
		if(autoSave){
			autoSave = false;
			if(typeof autoSaveInterval !== "undefined")clearInterval(autoSaveInterval);
			autoState = "Off";
			document.getElementById("autoState").innerHTML = autoState;
		}
		else{
			autoSave = true;
			autoSaveInterval=setInterval(function() {
				autoSaveTime--;
				if(autoSaveTime == 0) {
					autoSaveTime = 10;
					console.log("Saved auto (Just to make sure autosave works)");
					saveGame("local");
				}
			},1000);
			autoState = "On";
			document.getElementById("autoState").innerHTML = autoState;
		}
	}
}

//////////////////////////////////
//			LoadGame			//
//////////////////////////////////
function loadGame(){
	var loadgame = JSON.parse(localStorage.getItem("save"));
	if (typeof loadgame.coin !== "undefined") coin = loadgame.coin;
	if (typeof loadgame.paper !== "undefined") paper = loadgame.paper;
	if (typeof loadgame.supermarket !== "undefined") supermarket = loadgame.supermarket;
	if (typeof loadgame.power !== "undefined") power = loadgame.power;
	
	
}

//////////////////////////////////////
//			Timer Interval			//
//////////////////////////////////////

//Interval for the automatic coin thingies. 
//1000ms so 1 second.
window.setInterval(function(){

	coinAuto(paper);
	coinAuto(supermarket * 5);
	console.log(coinAuto(number));
	
}, 1000);



/*
 * To Do:
 * Xperience ! Ability powers etc.
 * More buildings/jobs.
 * ART !
 * TextLog (pop ups)
 * random events !
 * design website
 * 
 */

