function getAlerted(){
	var person1 = {name:'Eldor',age:23,location:'San Francisco',graduated: true};
	var person2 = {name:'Medina',age:31,location:'Las Vegas',graduated: false };
	var person3 = {name:'Alex',age:25,location:'Los Angles',graduated: true};
	var people= [person1,person2,person3];
	for(var i=0; i < people.length;i++) {
		if(people[i].graduated == true){
			document.getElementById('demo').innerHTML += people[i].name +' '+"is graduated" + "<br>";
		}else{
			document.getElementById('demo').innerHTML += people[i].name +' '+"is not graduated" + "<br>";
		}
	}
}
    //document.getElementById('demo').innerHTML += people[i].name + '<br>';
	//console.log(people);
	//document.getElementById('demo').innerHTML=
	//person2.name +" is " + person2.age + "years old";

