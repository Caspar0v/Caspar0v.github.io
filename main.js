//////////////////////////////////////
//			Basic Syntax			//
//////////////////////////////////////

function updateInnerHTML(){
	
	//Updating amounts of currencies you have.
	document.getElementById('coin').innerHTML = coin;
	document.getElementById("power").innerHTML = power;
	document.getElementById("experience").innerHTML = experience;
	document.getElementById("abilityPoints").innerHTML = abilityPoints;

	
	//Calling your machines
	document.getElementById('paper').innerHTML = paper;
	document.getElementById('supermarket').innerHTML = supermarket;
	document.getElementById('carwash').innerHTML = carwash;
	document.getElementById('badbroker').innerHTML = badbroker;
	document.getElementById('motel').innerHTML = motel;
	
	//Calculating next costs based on your machines.
	var nextPaperCost = Math.floor(10 * Math.pow(1.3, paper));
	var nextSupermarketCost = Math.floor(50 * Math.pow(1.5, supermarket));
	var nextCarwashCost = Math.floor(250 * Math.pow(1.4, carwash));
	var nextBadbrokerCost = Math.floor(500 * Math.pow(1.5, badbroker));
	var nextMotelCost = Math.floor(1200 * Math.pow(1.4, motel));
	
	//Calculating next currencies related cost.
	var nextPowerCost = Math.floor(16 * Math.pow(2, power));
	var nextLevelCost = Math.floor(116 * Math.pow(1.1, level));

	
	//Calling the price of you machines.
    document.getElementById('paperCost').innerHTML = nextPaperCost;
	document.getElementById('supermarketCost').innerHTML = nextSupermarketCost;
	document.getElementById("powerCost").innerHTML = nextPowerCost;
	document.getElementById('carwashCost').innerHTML = nextCarwashCost;
	document.getElementById('badbrokerCost').innerHTML = nextBadbrokerCost;
	document.getElementById('motelCost').innerHTML = nextMotelCost;
	
	//Calling the price of currency related things
	document.getElementById("levelCost").innerHTML = nextLevelCost;
	
	
	//Calling abilities
	if(abilitySupermarket){
		document.getElementById('unlockSupermarket').style.display = "block";
		document.getElementById('lockedSupermarket').style.display = "none";
	}
	if(abilityCarwash){
		document.getElementById('unlockCarwash').style.display = "block";
		document.getElementById('lockedCarwash').style.display = "none";
	}
	if(abilityBadbroker){
		document.getElementById('unlockBadbroker').style.display = "block";
		document.getElementById('lockedBadbroker').style.display = "none";
	}
	if(abilityMotel){
		document.getElementById('unlockMotel').style.display = "block";
		document.getElementById('lockedMotel').style.display = "none";
	}
}

var currentdate = new Date();
var datetime =  "[" +	currentdate.getHours() + ":"  
				+ currentdate.getMinutes() + "]";

var MAX_LOG_MESSAGES = 10;
//set this to true for new messages to be added at the top, false to be added at the bottom
var prepend = true;

function addMsg(message) {
    var x = document.getElementById("messageBox");
    if(prepend) {
        x.innerHTML = message + x.innerHTML; 
    } else {
        x.innerHTML += message; 
    };
    
    // split up the contents of the messageBox div based on line breaks, <br>
    var logContents = x.innerHTML.split("<br>");
    var numMessages = logContents.length;
    
    if(numMessages > MAX_LOG_MESSAGES) {
        // we've gone over the limit, remove the oldest message 
        // (first message in the array)
        // because the array is made from the string, the order of the string is _vital_
        if(prepend) {
            // first message is at the bottom, ergo last element in the array   
            logContents.pop();
        } else {
            // first element is at the top, ergo first element in the array
            logContents.shift();
        }
        // make the array back into a single string
        // and update the html contents of the messageBox div
        var messageBoxContents = logContents.join("<br>");        
        x.innerHTML = messageBoxContents;
    }
}



//////////////////////////////////////
//			Base Currency			//
//////////////////////////////////////
var coin = 0;
var xpNumber = 0;


//The Manual Click
function coinClick(number){
    coin = coin + (number * power);
    document.getElementById("coin").innerHTML = coin;
};

//The autocoins function
function coinAuto(number){
	coin = coin + number;
	xpNumber = xpNumber + number;
    document.getElementById("coin").innerHTML = coin;
};



//////////////////////////////////////////
//			Automatic Things			//
//////////////////////////////////////////

// ---------------- Base variables
var paper = 0;
var supermarket = 0;
var carwash = 0;
var badbroker = 0;
var motel = 0;

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

//---------------- Car washing !
function buyCarwash(number) {
	var carwashCost = Math.floor(250 * Math.pow(1.4, carwash));
	if(coin >= carwashCost){
		carwash = carwash + 1;
		coin = coin - carwashCost;
		document.getElementById('carwash').innerHTML = carwash;
		document.getElementById('coin').innerHTML = coin;
	};
	var nextCarwashCost = Math.floor(250 * Math.pow(1.4, carwash));
	document.getElementById('carwashCost').innerHTML = nextCarwashCost;
};

//---------------- Bad Broker !
function buyBadbroker(number) {
	var badbrokerCost = Math.floor(500 * Math.pow(1.5, badbroker));
	if(coin >= badbrokerCost){
		badbroker = badbroker + 1;
		coin = coin - badbrokerCost;
		document.getElementById('badbroker').innerHTML = badbroker;
		document.getElementById('coin').innerHTML = coin;
	};
	var nextBadbrokerCost = Math.floor(500 * Math.pow(1.5, badbroker));
	document.getElementById('badbrokerCost').innerHTML = nextBadbrokerCost;
}

//---------------- Motel !
function buyMotel(number) {
	var motelCost = Math.floor(1200 * Math.pow(1.4, motel));
	if(coin >= motelCost){
		motel = motel + 1;
		coin = coin - motelCost;
		document.getElementById('motel').innerHTML = motel;
		document.getElementById('coin').innerHTML = coin;
	};
	var nextMotelCost = Math.floor(1200 * Math.pow(1.4, motel));
	document.getElementById('motelCost').innerHTML = nextMotelCost;
}


/*Things to add
 * good broker
 * hotel
 * real estate
 * pimp (don't mind the dead hookers) (rival the kissing company from across town)
 * Drugs
 * Corrupt police
 * lawyer
 */

//////////////////////////////////////////////
//			Clicking Power (Pro)			//
//////////////////////////////////////////////
var power = 1;

function clickPower(number){
	var powerCost = Math.floor(16 * Math.pow(2, power));
	if (coin >= powerCost) {
		power = power + number;
		coin = coin - powerCost;
		document.getElementById("power").innerHTML = power;
		document.getElementById("coin").innerHTML = coin;
		};
	var nextPowerCost = Math.floor(16 * Math.pow(2, power));
	document.getElementById("powerCost").innerHTML = nextPowerCost;
}

//////////////////////////////////
//			  Experience		//
//////////////////////////////////
var experience = 0;
var levelCost = 127;
var abilityPoints = 1;
var level = 1;

addExperience = setInterval(function(){
		for (xpNumber; xpNumber >= 10 ; xpNumber -= 10){
			experience = experience + 1;
			document.getElementById("experience").innerHTML = experience;
			if(experience > levelCost){
				experience = levelCost;
			}
		}	
	}
, 1000);

levelUp = setInterval(function(){
		if(experience >= levelCost){
			experience = 0;
			abilityPoints = abilityPoints + 1;
			level = level + 1;
			var nextLevelCost = Math.floor(116 * Math.pow(1.1, level));
			document.getElementById("experience").innerHTML = experience;
			document.getElementById("levelCost").innerHTML = nextLevelCost;
			document.getElementById("abilityPoints").innerHTML = abilityPoints;
			levelCost = nextLevelCost;
		}
	}
, 1000);

//////////////////////////////////
//			Abilities			//
//////////////////////////////////

//To unlock supermarkets
var abilitySupermarketCost = 1;
var abilitySupermarket = false;
//To unlock Carwash
var abilityCarwashCost = 2;
var abilityCarwash = false;
//To unlock Badbroker
var abilityBadbrokerCost = 4;
var abilityBadbroker = false;
//To unlock Motel
var abilityMotelCost = 7;
var abilityMotel = false;

function unlockSupermarket(){
	if(abilityPoints >= abilitySupermarketCost){
		abilityPoints = abilityPoints - abilitySupermarketCost;
		document.getElementById('unlockSupermarket').style.display = "block";
		document.getElementById('lockedSupermarket').style.display = "none";
		document.getElementById('abilityPoints').innerHTML = abilityPoints;
		addMsg("Unlocked Convenience Store.<br />");
		abilitySupermarket = true;
	}
}

function unlockCarwash(){
	if(abilityPoints >= abilityCarwashCost){
		abilityPoints = abilityPoints - abilityCarwashCost;
		document.getElementById('unlockCarwash').style.display = "block";
		document.getElementById('lockedCarwash').style.display = "none";
		document.getElementById('abilityPoints').innerHTML = abilityPoints;
		addMsg("Unlocked Carwash.<br />");
		abilityCarwash = true;
	}
}
function unlockBadbroker(){
	if(abilityPoints >= abilityBadbrokerCost){
		abilityPoints = abilityPoints - abilityBadbrokerCost;
		document.getElementById('unlockBadbroker').style.display = "block";
		document.getElementById('lockedBadbroker').style.display = "none";
		document.getElementById('abilityPoints').innerHTML = abilityPoints;
		addMsg("Unlocked Pennystock Broker.<br />");
		abilityBadbroker = true;
	}
}
function unlockMotel(){
	if(abilityPoints >= abilityMotelCost){
		abilityPoints = abilityPoints - abilityMotelCost;
		document.getElementById('unlockMotel').style.display = "block";
		document.getElementById('lockedMotel').style.display = "none";
		document.getElementById('abilityPoints').innerHTML = abilityPoints;
		addMsg("Unlocked the Motel.<br />");
		abilityMotel = true;
	}
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
	    //currencies
		coin: coin,
	    power: power,
	    experience: experience,
	    abilityPoints: abilityPoints,
	    level: level,
	    
	    //machines
	    paper: paper,
	    supermarket: supermarket,
	    carwash: carwash,
	    badbroker: badbroker,
	    motel: motel,
	    
	    //abilities
	    abilitySupermarket: abilitySupermarket,
	    abilityCarwash: abilityCarwash,
	    abilityBadbroker: abilityBadbroker,
	    abilityMotel: abilityMotel
	};
	localStorage.setItem("save",JSON.stringify(save));
	console.log("Save local (This is just to make sure it works)");
	addMsg(datetime + " Saved !</br>");
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
	//currencies
	if (typeof loadgame.coin !== "undefined") coin = loadgame.coin;
	if (typeof loadgame.power !== "undefined") power = loadgame.power;
	if (typeof loadgame.experience !== "undefined") experience = loadgame.experience;
	if (typeof loadgame.abilityPoints !== "undefined") abilityPoints = loadgame.abilityPoints;
	if (typeof loadgame.level !== "undefined") level = loadgame.level;
	
	//machines
	if (typeof loadgame.paper !== "undefined") paper = loadgame.paper;
	if (typeof loadgame.supermarket !== "undefined") supermarket = loadgame.supermarket;
	if (typeof loadgame.carwash !== "undefined") carwash = loadgame.carwash;
	if (typeof loadgame.badbroker !== "undefined") badbroker = loadgame.badbroker;
	if (typeof loadgame.motel !== "undefined") motel = loadgame.motel;
 	
	//abilities
	if (typeof loadgame.abilitySupermarket !== "undefined") abilitySupermarket = loadgame.abilitySupermarket;
	if (typeof loadgame.abilityCarwash !== "undefined") abilityCarwash = loadgame.abilityCarwash;
	if (typeof loadgame.abilityBadbroker !== "undefined") abilityBadbroker = loadgame.abilityBadbroker;
	if (typeof loadgame.abilityMotel !== "undefined") abilityMotel = loadgame.abilityMotel;
	
	//update all
	updateInnerHTML();
}

//////////////////////////////////////
//			Timer Interval			//
//////////////////////////////////////

//Interval for the automatic coin thingies. 
//1000ms so 1 second.

window.setInterval(function(){

	coinAuto(paper);
	coinAuto(supermarket * 2);
	coinAuto(carwash * 5);
	coinAuto(badbroker * 8);
	coinAuto(motel * 15);
	
	datetime
}, 1000);



/*
 * To Do:
 * Ability powers etc.
 * More buildings/jobs.
 * TextLog (pop ups)
 * random events !
 * design website
 * interactive visuals and art
 * 
 */

