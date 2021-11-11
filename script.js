
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const botDoorPath = "./images/robot_door.svg";
const beachDoorPath = "./images/beach_door.svg";
const spaceDoorPath = "./images/space_door.svg";
const closedDoorPath = "./images/close_door.svg"
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const startButton = document.getElementById("start");
let title = document.getElementById("instructions_title");
let currentlyPlaying = true;

// isBot reports if the robot appeared
const isBot = (door) => {
  if(door.src.slice(-22) === botDoorPath.slice(-22)){
    return true;
       
  }else{
        return false;}
}

// isClicked informs if the door has already been clicked. 
const isClicked = (door) => {
  if (door.src.slice(-22) === closedDoorPath.slice(-22)){
    return false;
  }else{return true;}
  
}

const playDoor = (door) => {
  numClosedDoors -= 1;
    if (numClosedDoors === 0){
    gameOver('win');
  }else{
      if (isBot(door)){
    gameOver();
  } }
}

const gameOver = (status)=>{
  if (status==='win'){
    startButton.innerHTML="You win, Play again?"
  }else{
    startButton.innerHTML="Game over! Play again?"
  }
  currentlyPlaying = false;
}


//randomChoreDoorGenerator randomly assigns the robot`s door
const randomChoreDoorGenerator = () => {
let choreDoor = Math.floor(Math.random()*numClosedDoors);
if(choreDoor === 0){
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor1=beachDoorPath;
    openDoor2=botDoorPath;
    openDoor3=spaceDoorPath;
  }else{
    openDoor1=beachDoorPath;
    openDoor2=spaceDoorPath;
    openDoor3=botDoorPath;
  }

}

//Event handlers
doorImage1.onclick = () => {
if (!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  } 
  
}
doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  } 
}
doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);   
  }
}

//startRound function initializes variables
startRound = () => {
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  numClosedDoors=3;
  startButton.innerHTML="Buena Suerte!";
  currentlyPlaying=true;
  randomChoreDoorGenerator();
}


startButton.onclick = () => {
  if (!currentlyPlaying){
    startRound();
  }
}

//The game begins
startRound();
