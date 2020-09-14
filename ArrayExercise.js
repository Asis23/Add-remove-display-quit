//create empty student roster array
var roster = []

//create the functions for the tasks


//add a new student
//create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(){
  var newName = prompt ("What name would you like to add?")
  roster.push(newName)
}

// remove student
//create a function called remove that takes in a name
// finds its index location, then removes that name from the roster

function remove(){
  var remName = prompt ("What name would you like to remove?")
  var index = roster.indexOf(remName);
  roster.splice (index,1)
}



//display roster
//create a function called display that prints out the roster to the console.
function display(){
  console.log(roster);
}

function quit(){
  alert(" You typed quit! Thanks for using the Web app! Please refresh to start over!")
}

//start by asking if they want to us e the web app
//Now create a while loop that keeps asking for an action (add, remove, display or quit)

//Use if and else if statements to execute the correct function for each command.
var start = prompt("Would you like to start the roster web app? y/n")
var request = "";
if (start === 'y') {
    while (request !== "quit"){
      request = prompt("Please select an action: add, remove,display, or quit.")
      if (request === 'add'){
        addNew()
      }else if (request === 'display'){
        display();
      }else if (request === 'remove'){
        remove();
      }else if (request === 'quit'){
        quit();
      }
      else {
        alert("you've entered a wrong action..... going back to action")
    }
  }
}
else if (start === 'n'){
  alert("You dont want to play :(")
}
else{
  alert("Invalid key!")
}
