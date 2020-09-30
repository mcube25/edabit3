function trackRobot(...steps) {
	var r = [0,0];
	for (var i in steps) {
		var d = i % 4;
	  if (d == 0) r[1] += steps[i];
	  if (d == 1) r[0] += steps[i];
	  if (d == 2) r[1] -= steps[i];
	  if (d == 3) r[0] -= steps[i];
	}
	return r;
}