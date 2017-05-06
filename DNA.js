function Individual(x,y,diameter){

	this.x = x
	this.y = y
	this.diameter=diameter
	this.DNA = int_to_bin(x) + int_to_bin(y) + int_to_bin(diameter);

	this.fitness = function(environment = 'None'){
		if(environment != 'None'){
			//console.log('?')
			for(k = 0;k<environment.length;k = k+1)
				if (isColliding(this, environment[k])){
					//console.log('Yup')
					return 0
				}
		}
		if(this.y + this.diameter/2 > 255)
			return 0
		else if(this.x + this.diameter/2 > 255)
			return 0
		else if(this.y - this.diameter/2 < 0)
			return 0
		else if(this.x - this.diameter/2 < 0)
			return 0
		else
			return this.diameter
	}

	this.crossover = function(partner){
		split_point = randInt(0,22)
		child1_DNA = this.DNA.substr(0, split_point) + partner.DNA.substr(split_point, 21 - split_point)
		//child2_DNA = partner.DNA.substr(0, split_point) + this.DNA.substr(split_point, 21 - split_point)
		child1 = new Individual(bin_to_int(child1_DNA.substr(0,7)), bin_to_int(child1_DNA.substr(7,7)), bin_to_int(child1_DNA.substr(14,7)))
		//child2 = new Individual(bin_to_int(child2_DNA.substr(0,7)), bin_to_int(child2_DNA.substr(7,7)), bin_to_int(child2_DNA.substr(14,7)))
		return child1
	}

	this.mutate = function(mutation_rate){
		for(j=0;j<this.DNA.length; j = j+1){
			if(random(1)<mutation_rate){
				if(this.DNA[j] == '0')
				    this.DNA[j] = '1'
				else
					this.DNA[j] = '0'

			}
		}
	}
};