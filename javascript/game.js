var attackNum=0;
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
	healthPoints:12,
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
		

		console.log( "Villian health points " + superHeroes[defenderName].healthPoints);
		console.log("heroe attackPower " + superHeroes[superheroName].attackPower * attackNum );
		
		superHeroes[superheroName].healthPoints=superHeroes[superheroName].healthPoints - superHeroes[defenderName].counterattackPower;
		

		console.log("yourcharacter healthpoints " + superHeroes[superheroName].healthPoints);
		console.log("Villian CAP " + superHeroes[defenderName].counterattackPower );
		console.log(typeof superHeroes[superheroName].healthPoints);
		console.log;
	
		if((superHeroes[defenderName].healthPoints <= 0) && (superHeroes[superheroName].healthPoints > 0)){
			$("#Attack").after("<p>" +superHeroes[superheroName].Name + " Wins!!!!!!. Please choose another Character to Fight</p>");
			console.log("yourcharacter" + superHeroes[superheroName].healthPoints);
			$("#defenderArea>button").hide();
			$(".enemiesArea>button").prop("disabled",false);
			//$ (document.createElement('<button>Reset</button'));


			//defenderName=$("#defenderArea>button").html().toLowerCase();
			//console.log(defenderName);
			
			//defenderName=$("#defenderArea>button").html().toLowerCase();
			//console.log(defenderName);
			//console.log(superHeroes[defenderName].healthPoints);

			//superHeroes[defenderName].healthPoints;
		}
		 else if ( (superHeroes[superheroName].healthPoints <= 0) && (superHeroes[defenderName].healthPoints > 0)){
		 	$("#Attack").after("<p>" +superHeroes[superheroName].Name + " has been defeated.plase Reset </p>");
		 	$(document.createElement('button')).text("Reset").on("click",function(){
		$("#defenderArea>button").show();
		$("#yourCharacter>button").appendTo("#Charcontain");
		$("#enemies>button").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
		$("#defenderArea>button").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
		$("#Attack").html("");

	});
		 }


	});





});

