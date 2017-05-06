function setup() {
  	
  	createCanvas(256,256);
    totalPopulation = 150
    crossover_rate = 0.8
    generation = 0
    obstacleCount = 10
    obstacleMin = 20
    obstacleMax = 40
    population = []
    fitness = []
    environment = []
    for(i=0;i<totalPopulation;i=i+1){
      population.push(new Individual(randInt(0,256), randInt(0,256), randInt(0,256)))
      fitness.push(0)
    }
    for(i = 0;i<obstacleCount;i = i+1){
      obst = new Individual(randInt(11,246), randInt(11,246), randInt(obstacleMin, obstacleMax+1))
      environment.push(obst)
    }
    
}

function draw() {
  background(255, 0, 0)
  fill(0,0,0)
  for(i =0; i<environment.length;i = i+1)
    ellipse(environment[i].x, environment[i].y, environment[i].diameter)
  fill(255,255,255)
  console.log(generation)
  if(generation == 1){
    /*console.log(fitness)
    console.log(fitness_frequency)
    console.log(temp)
    console.log(fitness_probability)
    console.log(mating_pool)*/
  }
  for(i = 0; i<totalPopulation; i=i+1)
    fitness[i] = population[i].fitness(environment)

  fittest_ind = findMax(fitness, type = 'index')
  //console.log(fitness[fittest_ind])
  ellipse(population[fittest_ind].x, population[fittest_ind].y, population[fittest_ind].diameter)

  mating_pool = []
  fitness_frequency = {}
  temp = []
  fitness_probability = {}

  for(i = 0; i<totalPopulation; i =i+1){

    if(fitness[i] in fitness_frequency){
      fitness_frequency[fitness[i]] = fitness_frequency[fitness[i]] + 1
    } 

    else
      fitness_frequency[fitness[i]] = 1
  }

  for(i in fitness_frequency)
    temp.push(parseInt(i))

  length_sum = temp.length*(temp.length+1)/2

  for(i=0; i<temp.length; i = i+1){
    fitness_probability[temp[i]] = (i+1)/length_sum
  }

  for(i = 0; i<totalPopulation; i = i+1){
    n = Math.floor(1000*fitness_probability[fitness[i]]/fitness_frequency[fitness[i]])
    for(j = 0; j<n; j = j+1)
      mating_pool.push(population[i])
  }

  for(i = 0; i<totalPopulation; i = i+1){

    if(i==0)
      population[i] = population[fittest_ind]
    else if(crossover_rate > random(1))
      population[i] = new Individual(randInt(0,256), randInt(0,256), randInt(0,256))
    else{
      parent_A = mating_pool[randInt(0, mating_pool.length)]
      parent_B = mating_pool[randInt(0, mating_pool.length)]
      child = parent_A.crossover(parent_B)

      child.mutate(0.05)

      population[i] = child
    }
  }

    



  /*for(i = 0; i<totalPopulation; i = i+1){
    for(j = 0; j<totalPopulation; j = j+1){
      isColliding(population[i], population[j])
    }
  }*/

  generation = generation+1
}