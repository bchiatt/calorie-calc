//Resources

var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var cal = [], food = [], option = 'y', sum = 0;

//Prompts

var weight = prompt('weight in pounds: ');
weight = parseInt(weight);

var gender = prompt('(m)ale or (f)male: ');

while(gender != ('m' || 'f')){
  console.log("Please enter either 'm' or 'f'.");
  gender = prompt('(m)ale or (f)male: ');
}

while(option === 'y'){
  var foodAsk = prompt('food item you ate today: ');
  food.push(foodAsk);
  var calAsk = prompt('calories in this food: ');
  calAsk = parseInt(calAsk);
  cal.push(calAsk);
  option = prompt('Did you eat anything else today? (y/n) ');
}

//Calculations

for(i = 0; i < cal.length; i++){
  sum += cal[i];
}

switch(gender){
  case 'm':
    weight += (sum/4000);
    break;
  case 'f':
    weight += (sum/3000);
    break;
}

weight = parseFloat(weight).toFixed(1);

//Display

console.log('');
console.log(chalk.green('After eating', food, 'today, you consumed', sum, 'calories and now weigh', weight, 'lbs.'));
console.log('');
