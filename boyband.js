console.log('start');

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var vegs = document.getElementById("vg");
var band = document.getElementById("bb");

vegetables2 = [];
bands2 = []

	


vegetables.forEach(function(item){
  vegetables2.push(item);
  vegs.innerHTML = vegetables2;
})

bands.forEach(function(item) {
	bands2.push(item);
	band.innerHTML = bands2;
})



