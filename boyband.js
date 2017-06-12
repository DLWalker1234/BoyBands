console.log('start');

var bandsLength = band.length;
var vegetablesLength = vegetables.length;

function arrayPlay() {
	var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
	var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
	
	for (let i = 0; i < vegetablesLength; i++) {
		document.getElementById("vg").innerHTML = vegetables[i];
		console.log('working');
	}
	for (let k = 0; k < bandsLength; k++) {
		document.getElementById("bb").innerHTML = bands[i];
		console.log("still Wokring");
	}
		
};

arrayPlay();




