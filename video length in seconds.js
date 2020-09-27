function minutesToSeconds(time) {
	var hms = time;   // your input string
var a = hms.split(':'); // split it at the colons

// minutes are worth 60 seconds. Hours are worth 60 minutes.
var seconds = (+a[0]) * 60  + (+a[1]) ; 
if(a[1] >= 60){return false}
	else {return seconds;}

}