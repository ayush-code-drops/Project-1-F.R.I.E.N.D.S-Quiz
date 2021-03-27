var readlineSync=require('readline-sync');
const chalk = require('chalk');
var username=readlineSync.question(chalk.bgBlue("Hey What's Your Name "));
console.log(chalk.green("Welcome " +username) + " to the "+chalk.bgRed(' F.R.I.E.N.D.S ') + ' Quiz')
var score=0;

// console.log( chalk.pink("**You must answer by writing a/b/c**"))
function play(question,answer){
var ans=readlineSync.question(question)
if(ans===answer){
  console.log(chalk.green("Right!"));
  score=score+1
  console.log("Your Score: "+chalk.bgBlue(score))
}
else{
  console.log(chalk.red("Wrong!"));
  console.log("Your Score: "+chalk.bgBlue(score))
}
}



let questions=[
  play ("Q1: In which city is Friends set? \n a:Los Angeles   b:NewYork  c:Singapore ","b"),

  play ("Q2: How many times was Ross legally divorced? \n a:3   b:2  c:4 ","a"),

  play("Q3: What's the name of the grumpy person who works at the coffee shop? \n a:Felix   b:Kevin c:Gunther ","c"),

  play ("Q4: What were Ben's first words? \n a:Hi   b:Mom  c:Dumb ","a"),

  play ("Q5: What was the name of the first restaurant Monica was head chef at? \n a:Iridium   b:Alexandro  c:Juava ","b"),

  play ("Q6: Who was briefly roommates with Australian dancer Janine Lacroix? \n a:Ross   b:Chandler  c:Joey ","c"),
  
  play ("Q7: Before they were friends, who did Phoebe mug as a kid? \n a:Joey   b:Monica  c:Ross ","c"),

  play ("Q8: Who got hit with a tranquilizer dart while trying to save Ross's monkey Marcel? \n a:Phoebe  b:Monica  c:Rahcael ","a"),

  play ("Q9: What does Monica's dad, Jack, give her because her childhood belongings were ruined in a flood? \n a:Her own restaurant   b:His porsche  c:$10000 ","b"),

  play ("Q10: How many sisters did Joey Tribbiani have? \n a:7   b:9  c:5 ","a"),
  

]

for(i=0;i<questions.length;i++){
  var currentAnswer=questions[i]
  console.log(currentAnswer);
}

console.log("YOUR FINAL SCORE IS "+score)

