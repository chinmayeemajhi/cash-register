var readLineSync = require("readline-sync");
var chalk = require("chalk");
var currencySet = [1, 5, 10, 20, 100, 500, 2000];


function countOfNotes(numSmall,numBig){
  var count = 0;
   while(numSmall<=numBig){
     numBig = numBig-numSmall;
     count++;  
    }
   //console.log(count + "\n");
   return count;
}

var question= "enter the bill amount : ";
var billAmount = readLineSync.question(question);

if(billAmount != null){

  var question2 = "enter the cash amount paid : ";
  var cashPaid = readLineSync.question(question2);
  var cashToReturn = cashPaid - billAmount;

}
console.log("\n");

if(cashToReturn >= 0){

  console.log("you will get : ₹"+cashToReturn+'\n');
  var count = 0;
  //console.log("you need to return "+cashToReturn );
  for(i=currencySet.length-1; i>=0; i--){
    //console.log(currencySet[i] + '\n');
    if(currencySet[i]<=cashToReturn){
      var count = countOfNotes(currencySet[i],cashToReturn );
    }
    cashToReturn = cashToReturn - count*currencySet[i];
    if(count>0){
      console.log("no of ₹"+currencySet[i]+" notes = "+count);
    }
  
    if(cashToReturn <= 0){
      break;
    }
  } 

}else{
  console.log(chalk.red("you need to give ₹"+Math.abs(cashToReturn)+" more "))
}