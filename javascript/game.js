var attackNum=0;
var enemycount;
var superHeroes={
superman:{
	Name:'Superman',
	healthPoints:180,
	attackPower:3,
	counterattackPower:20,

},

batman:{
	Name:'BatMan',
	healthPoints:160,
	attackPower:4,
	counterattackPower:25,

},

spiderman:{
	Name:'SpiderMan',
	healthPoints:140,
	attackPower:5,
	counterattackPower:15,

},

wonderwoman:{
	Name:'WonderWoman',
	healthPoints:120,
	attackPower:4,
	counterattackPower:15,

},
catwoman:{
	Name:'CatWoman',
	healthPoints:100,
	attackPower:3,
	counterattackPower:10,

},

joker:{
	Name:'Joker',
	healthPoints:90,
	attackPower:5,
	counterattackPower:15,
}
};

$(document).ready (function(){


	$("body").on("click",".character",function(){
    	//var ops=$(this);
    	//console.log(ops);
    	 $(this).detach().appendTo("#yourCharacter").removeClass("character").addClass("yourCharacter");
    	 console.log(this);
    	//$ (this)
    	$("#Charcontain>button").appendTo('#enemies').addClass("enemiesArea").removeClass("character yourCharacter");
    	//var myDiv2Para =
    	console.log("detaching");
    	//myDiv2Para;
    	console.log("removingclass");

   
    	$("body").on("click",".enemiesArea",function(){
   			//var ops1=$(this)
   			//console.log(ops1);
   		//$('#enemiesArea>button').detach();

   		console.log();
   		$(this).not("div").detach().appendTo("#defenderArea");
   		//$("#enemies>button").appendTo('#enemies').removeClass("defenderArea");

   		//.append(ops1)
   		$(".enemiesArea>button").prop("disabled",true);
		$("Resulttext").empty();
   	});

	});

	$("#Attack").on("click",function(){

		var superheroName=$("#yourCharacter>button").html().toLowerCase();
		var defenderName=$("#defenderArea>button:visible").html().toLowerCase();
		console.log(superheroName);
		console.log(defenderName);

		console.log(superHeroes[superheroName].healthPoints);

		console.log(superHeroes[defenderName].healthPoints);
		attackNum++;
		
		console.log(attackNum);

		superHeroes[defenderName].healthPoints=superHeroes[defenderName].healthPoints - superHeroes[superheroName].attackPower * attackNum;
		$("#Attacktext1").html("<p>you attacked " +superHeroes[defenderName].Name +" for " +superHeroes[superheroName].attackPower * attackNum + " points</p>");
		

		console.log( "Villian health points " + superHeroes[defenderName].healthPoints);
		console.log("heroe attackPower " + superHeroes[superheroName].attackPower * attackNum );
		
		superHeroes[superheroName].healthPoints=superHeroes[superheroName].healthPoints - superHeroes[defenderName].counterattackPower;
		$("#Attacktext2").html("<p>"+superHeroes[defenderName].Name+ " attacked you for " +superHeroes[defenderName].counterattackPower+ " points</p>");
		

		console.log("yourcharacter healthpoints " + superHeroes[superheroName].healthPoints);
		console.log("Villian CAP " + superHeroes[defenderName].counterattackPower );
		console.log(typeof superHeroes[superheroName].healthPoints);
		console.log;
	
		if((superHeroes[defenderName].healthPoints <= 0) && (superHeroes[superheroName].healthPoints > 0)){
			$("#Resulttext").html("<p>" +superHeroes[superheroName].Name + " Wins!!!!!!. Please choose another Character to Fight</p>");
			console.log("yourcharacter" + superHeroes[superheroName].healthPoints);
			$("#defenderArea>button").hide();
			$(".enemiesArea>button").prop("disabled",false);
			$("#Attacktext1").empty();
			$("#Attacktext2").empty();
			//$ (document.createElement('<button>Reset</button'));


			//defenderName=$("#defenderArea>button").html().toLowerCase();
			//console.log(defenderName);
			
			//defenderName=$("#defenderArea>button").html().toLowerCase();
			//console.log(defenderName);
			//console.log(superHeroes[defenderName].healthPoints);

			//superHeroes[defenderName].healthPoints;
		}
		 else if ( (superHeroes[superheroName].healthPoints <= 0) && (superHeroes[defenderName].healthPoints > 0)){
		 	$("#Resulttext").html("<p>" +superHeroes[superheroName].Name + " has been defeated.please Reset </p>");
			$("#Attack").hide();
			console.log(superHeroes[superheroName].healthPoints);

				console.log(superHeroes[defenderName].healthPoints);
				console.log(superHeroes[defenderName].healthPoints);
			var btn =document.createElement("BUTTON");
			btn.id = 'Reset';
			var t = document.createTextNode("Reset");
			btn.appendChild(t)
			document.body.appendChild(btn);
			$("#Reset").on("click",function(){
			$("#defenderArea>button").show();
			$("#yourCharacter>button").appendTo("#Charcontain").removeClass("yourCharacter").addClass("character");
			$("#enemies>button").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
			$("#defenderArea>button").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
			$("#Charcontain>button").prop("disabled",false);
			$("#Attacktext1").empty();
			$("#Attacktext2").empty();
			$("#Resulttext").empty();
			$('#Reset').remove();
			$("#Attack").show();
			console.log(superHeroes[superheroName].healthPoints);
			console.log(superHeroes[defenderName].healthPoints);
			attackNum=0;
			superHeroes.superman.healthPoints=180;
			superHeroes.batman.healthPoints=160;	
			superHeroes.spiderman.healthPoints=140;
			superHeroes.wonderwoman.healthPoints=120;
			superHeroes.catwoman.healthPoints=100;
			superHeroes.joker.healthPoints=90;
		 	//$(document.createElement('button')).text("Reset").on("click",function(){
		//$("#defenderArea>button").show();
		//$("#yourCharacter>button").appendTo("#Charcontain");
		//$("#enemies>button").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
		//$("#defenderArea>button").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
		//$("#Attack").html("");

	});
		 };


	});
	
	});



