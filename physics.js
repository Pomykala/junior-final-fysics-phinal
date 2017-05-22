const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');

function unknown(){
  console.log("Input not recognized. Just google it!");
}

function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");
}

function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let i=0;i<strcma.length;i++){
        strcma[i] = Number(strcma[i]);
    }
    return strcma;
}

function getinput(){

const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function end(){
    terminal.close();
}

  terminal.question("What type of equation are you looking for? ",function(str){
    str.toLowerCase();
    if (str=="motion") {
      terminal.question("Which variables are you looking for? ",function(str){
        str.toLowerCase();
        if (str=="d") {
          printOptions();
          terminal.question("",function(str){
            let arr = convertToArray(str);
            console.log(motion.distance_a(arr[2],arr[1],arr[3]));
            end();
          });
        }
        else if (str=="t") {
          printOptions();
          terminal.question("",function(str){
            let arr = convertToArray(str);
            console.log(motion.time_a(arr[0],arr[1],arr[2]));
            end();
          });
        }
        else if (str=="v") {
          printOptions();
          terminal.question("",function(str){
            let arr = convertToArray(str);

          });
        }
        else if (str=="a") {
          printOptions();
          terminal.question("",function(str){
            let arr = convertToArray(str);

          });
        }
        else {
          unknown();
        }
      });
    }
    else if (str=="energy") {
      terminal.question("Which variables are you looking for? ",function(str){

      });
    }
  });

}

getinput();
