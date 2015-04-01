//To make sure your screens won't overlap at start page;



function tbo(){
	document.getElementById('begin').innerHTML = "";
}



var coin= {
		amount: 0,
		mp: 1
};


var building= {
		'0': 0, //paperround
		'1': 0, //constore
		'2': 0, //carwash
		'3': 0, //badbroker
		'4': 0 //motel
};

var price= {
		'0': 10 //paperround
}

var level= {
		level: 1,
		abilitypoints: 1,
		xp: 0,
		xpNext: 127
};

var ability= {
		constore: false,
		carwash: false,
		badbroker: false,
		motel: false
};

$(coinplus).click(function coinClick(number) {
	alert(daosjdoasjld);
	coin.amount += number * coin.mp;
	$(coin).innerHTML = coin.amount;
});



/*function buyBuilding(number, what){
	console.log(price[what]);
	console.log(building[what]);
	if(coin.amount >= price[what]){
		coin.amount = coin.amount - price[what];
		building[what] = building[what] + 1;
		coin.amount;
		document.getElementById('paper').innerHTML = building[what];
	}
	else
	{
		document.getElementById('text').innerHTML += "insuficient money </br>";
	}


}*/






