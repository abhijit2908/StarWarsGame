var attackNum=0;
var enemyCount;
var superHeroes={
superman:{
	Name:'Superman',
	healthPoints:180,
	attackPower:10,
	counterattackPower:20,

},

batman:{
	Name:'BatMan',
	healthPoints:160,
	attackPower:8,
	counterattackPower:15,

},

spiderman:{
	Name:'SpiderMan',
	healthPoints:140,
	attackPower:7,
	counterattackPower:15,

},

wonderwoman:{
	Name:'WonderWoman',
	healthPoints:120,
	attackPower:10,
	counterattackPower:15,

},
catwoman:{
	Name:'CatWoman',
	healthPoints:100,
	attackPower:15,
	counterattackPower:10,

},

joker:{
	Name:'Joker',
	healthPoints:90,
	attackPower:20,
	counterattackPower:15,
}
};


$(document).ready (function(){
	
	//$("body").ready(".healthpoint")
	$

	$("body").on("click",".character",function(){
    	//var ops=$(this);
    	//console.log(ops);
    	 $(this).detach().appendTo("#yourCharacter").removeClass("character").addClass("yourCharacter");
    	 console.log(this);
    	//$ (this)
    	$("#Charcontain>div").appendTo('#enemies').addClass("enemiesArea").removeClass("character yourCharacter");
    	//var myDiv2Para =
    	console.log("detaching");
    	//myDiv2Para;
    	console.log("removingclass");
    	//console.log(superHeroes.superman.Name);
		//console.log(superHeroes[0].healthPoints);
		 enemyCount=$(".enemiesArea>div").length-1;
		console.log(enemyCount);
   
    	$("body").on("click",".enemiesArea",function(){
   			//var ops1=$(this)
   			//console.log(ops1);
   		//$('#enemiesArea>button').detach();
   		$("#Resulttext").empty();
   		console.log();
   		$(this).not("#enemies").removeClass("enemiesArea").detach().appendTo("#defenderArea");
   		//console.log(this);
   		
   		//$("#enemies>button").appendTo('#enemies').removeClass("defenderArea");
   		//.append(ops1)
   		$(".enemiesArea>div").prop("disabled",true);
		$("Resulttext").empty();
		
   	});

	});

	$("#Attack").on("click",function(){
		//($("#yourCharacter").text());

		var superheroName=$("#yourCharacter").clone().children().end().text().trim().toLowerCase();
		//console.log(superheroName);

		//var superheroName=$("#yourCharacter").text().toLowerCase();
		var defenderName=$("#defenderArea>div:visible").clone().children().end().text().trim().toLowerCase();
		//console.log(superheroName);
		//console.log(defenderName);

		//console.log(superHeroes[1]);
		//console.log(superHeroes[superheroName].healthPoints);

		//console.log(superHeroes[defenderName].healthPoints);
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
		//console.log(typeof superHeroes[superheroName].healthPoints);
		
	
		if((superHeroes[defenderName].healthPoints <= 0) && (superHeroes[superheroName].healthPoints > 0)){
			$("#Resulttext").html("<p>" +superHeroes[superheroName].Name + " Wins!!!!!!. Please choose another Character to Fight</p>");
			console.log("yourcharacter" + superHeroes[superheroName].healthPoints);
			$("#defenderArea>div").hide();
			$(".enemiesArea>div").prop("disabled",false);
			$("#Attacktext1").empty();
			$("#Attacktext2").empty();
			enemyCount--;
   			console.log(enemyCount);
   				if (enemyCount<0){
		$("#Resulttext").html("<p>You have killed all your opponents.You are the strongest!!!!. Please Reset and Choose a new character and opponent </p>");
		var btn =document.createElement("BUTTON");
			btn.id = 'Reset';
			var t = document.createTextNode("Reset");
			btn.appendChild(t)
			document.body.appendChild(btn);
			$("#Reset").on("click",function(){
			$("#defenderArea>div").show();
			$("#yourCharacter>div").appendTo("#Charcontain").removeClass("yourCharacter").addClass("character");
			$("#enemies>div").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
			$("#defenderArea>div").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
			$("#Charcontain>div").prop("disabled",false);
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
	});
		}

			//$ (document.createElement('<button>Reset</button'));


			//defenderName=$("#defenderArea>button").html().toLowerCase();
			//console.log(defenderName);
			
			//defenderName=$("#defenderArea>button").html().toLowerCase();
			//console.log(defenderName);
			//console.log(superHeroes[defenderName].healthPoints);

			//superHeroes[defenderName].healthPoints;
		}
		 else if ( (superHeroes[superheroName].healthPoints <= 0) && (superHeroes[defenderName].healthPoints > 0)){
		 	$("#Resulttext").html("<p>" +superHeroes[superheroName].Name + " has been defeated by "+superHeroes[defenderName].Name+". Please Reset </p>");
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
			$("#defenderArea>div").show();
			$("#yourCharacter>div").appendTo("#Charcontain").removeClass("yourCharacter").addClass("character");
			$("#enemies>div").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
			$("#defenderArea>div").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
			$("#Charcontain>div").prop("disabled",false);
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
		 }
/*if (enemyCount<0){
		$("#Resulttext").html("<p>You have killed all your opponents.You are the strongest!!!!. Please Reset and Choose a new character and opponent </p>");
		var btn =document.createElement("BUTTON");
			btn.id = 'Reset';
			var t = document.createTextNode("Reset");
			btn.appendChild(t)
			document.body.appendChild(btn);
			$("#Reset").on("click",function(){
			$("#defenderArea>div").show();
			$("#yourCharacter>div").appendTo("#Charcontain").removeClass("yourCharacter").addClass("character");
			$("#enemies>div").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
			$("#defenderArea>div").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
			$("#Charcontain>div").prop("disabled",false);
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
	});
		}*/

	else if ((superHeroes[superheroName].healthPoints <= 0) && (superHeroes[defenderName].healthPoints <= 0)){
			$("#Resulttext").html("<p>Both Killed each other. Please Reset and Choose a new character and opponent </p>");
			var btn =document.createElement("BUTTON");
			btn.id = 'Reset';
			var t = document.createTextNode("Reset");
			btn.appendChild(t)
			document.body.appendChild(btn);
			$("#Reset").on("click",function(){
			$("#defenderArea>div").show();
			$("#yourCharacter>div").appendTo("#Charcontain").removeClass("yourCharacter").addClass("character");
			$("#enemies>div").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
			$("#defenderArea>div").appendTo("#Charcontain").removeClass("enemiesArea").addClass("character");
			$("#Charcontain>div").prop("disabled",false);
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

	});
	}


	});
	
	});



