function isColliding(one, two){
	centre_dist = Math.pow(one.x - two.x, 2) + Math.pow(one.y - two.y, 2)
	radii_sum = Math.pow(one.diameter/2 + two.diameter/2, 2)
	return radii_sum >= centre_dist
}

function isWall(one, canv_width = 255, canv_height = 255){
	if(one.y + one.diameter/2 > 255)
		return 0
	else if(one.x + one.diameter/2 > 255)
		return 0
	else if(one.y - one.diameter/2 < 0)
		return 0
	else if(one.x - one.diameter/2 < 0)
		return 0
}