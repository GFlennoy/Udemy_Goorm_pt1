function average(scores){
// 	add all scores together
	var total = 0;
	scores.forEach(function(score){
		total += score;
	});
// 	divide by total number of scores
	var avg = total/scores.length
// 	round average
	return Math.round(avg)
		}

console.log("Average score for psy101");
var scores = [90, 98, 89, 100, 86, 94];
console.log(average(scores));

console.log("Average score for psy424");
var scores2 = [40, 65, 77, 82, 80, 94, 73, 63, 95, 49];
console.log(average(scores2)); 