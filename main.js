//To make sure your screens won't overlap at start page;
function tbo(){
	document.getElementById('begin').innerHTML = "";
	
}


var coin = {
		amount: 0,
		mp: 1
};


var building = {
		'0': 0, //paperround
		'1': 0, //constore
		'2': 0, //carwash
		'3': 0, //badbroker
		'4': 0 //motel
};

var buildingmp = {
		'0': 1, //paperround
		'1': 1, //constore
		'2': 1, //carwash
		'3': 1, //badbroker
		'4': 1 //motel
};

var price = {
		'0': 10, //paperround
		'1': 25,
		'2': 100
};

var level = {
		level: 1,
		abilitypoints: 1,
		xp: 0,
		xpNext: 127
};

var ability = {
		constore: false,
		carwash: false,
		badbroker: false,
		motel: false
};

$(document).ready(function (){
	$("#coinplus").on('click', function () {
		coin.amount = coin.amount + (1 * coin.mp);
		$("#coin").html(coin.amount);
	});
});

function coinAuto(number){
	coin.amount += number;
	$('#coin').html(coin.amount);
};

function calculatePrice(id){
	console.log("calculating...");
	console.log(price[id]);
	console.log(String(id));
	switch(String(id)){
	case "0":
	price['0'] += Math.floor(10 * Math.pow(1.1, building['0']));
	break
	case "1":
	price['1'] += Math.floor(25 * Math.pow(1.3, building['1']));
	break
	case "2":
	price['2'] += Math.floor(100 * Math.pow(1.2, building['2']));
	break
	default: alert("You probably found a bug")};
};

$(document).ready(function() {
    $(".building").click(function() {
    	var o = $(this).attr("id");
    	var p = price[$(this).attr("id")];
        if (coin.amount >= p) {
        	coin.amount = coin.amount - p;
			building[$(this).attr("id")] += 1;
			$("#coin").html(coin.amount);
			var updateSpan = $("#Span" + o);
			$("#Span" + o).html(building[$(this).attr("id")]);
			calculatePrice(o);
			$("#Cost" + o).html(price[$(this).attr("id")]);
        } else{
        	$("#text").append("insuficient money </br>");
        };

        //$(this).attr("id")
    });
});


setInterval(function(){
	coinAuto((building['0'] * 1) * buildingmp['0'])
	coinAuto((building['1'] * 3) * buildingmp['1'])
	coinAuto((building['2'] * 5) * buildingmp['2'])

}, 1000)










