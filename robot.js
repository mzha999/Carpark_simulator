// Carpark Simulator
import CarPark from "./Carpark.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

("use strict");

const Robot = (commends) => {
  const parkX = 5;
  const parkY = 5;
  const directs = ["NORTH", "EAST", "SOUTH", "WEST"];
  let directIndex = 0;
  let commend = [];

  let robotX = 0;
  let robotY = 0;
  let robotIsPlaced = false;
  let commendArray = [];

  for (let i = 0; i < commends.length; i++) {
    commend = commends[i].toUpperCase().split(" ");
    if (commend.length > 1) {
      commend[1] = commend[1].split(",");
    }
    commendArray.push(commend);
  }

  // Returns the index of the direction string
  const indexOfDirection = (direct) => directs.indexOf(direct);

  const checkPlaceCommend = (placeCommend) => {
    const x = +placeCommend[1][0];
    const y = +placeCommend[1][1];
    const dir = indexOfDirection(placeCommend[1][2]);
    return x >= 0 && x <= parkX && y >= 0 && y <= parkY && dir > -1;
  };
  // Set the placement
  const place = (placeCommend) => {
    if (checkPlaceCommend(placeCommend)) {
      robotIsPlaced = true;
      robotX = +placeCommend[1][0];
      robotY = +placeCommend[1][1];
      directIndex = indexOfDirection(placeCommend[1][2]);
    }
  };

  // bus turn left or turn right.
  const turn = (turn) => {
    directIndex = (directIndex + (turn == "LEFT" ? 3 : 1)) % 4;
  };
  // Checks to see if the robot can move in a certain direction
  const canMove = () => {
    switch (directIndex) {
      case 0:
        return robotY < parkY - 1;
      case 1:
        return robotX < parkX - 1;
      case 2:
        return robotY > 0;
      case 3:
        return robotX > 0;
      default:
        return false;
    }
  };

  const move = () => {
    if (directIndex % 2 == 1) {
      // x-axial
      if (directIndex == 1) {
        robotX++;
      } else {
        robotX--;
      }
    } else {
      // y-axial
      if (directIndex == 0) {
        robotY++;
      } else {
        robotY--;
      }
    }
  };

  const report = () => {
    console.log([robotX, robotY, directs[directIndex]].join(","));
  };

  // Go through commends order
  commendArray.forEach((commendItem) => {
    switch (commendItem[0]) {
      case "PLACE":
        place(commendItem);
        break;
      case "MOVE":
        robotIsPlaced && canMove()
          ? move()
          : console.log("Hit park border, cannot move this way, please turn.");
        break;
      case "LEFT": // fall-through case
      case "RIGHT":
        robotIsPlaced ? turn(commendItem[0]) : console.log("Invalid commend.");
        break;
      case "REPORT":
        robotIsPlaced ? report() : console.log("Invalid commend.");
        break;
      default:
        console.log(
          "INVALID COMMAND: '" + commendItem.join(" ") + "' Please try again."
        );
        break;
    }
  });
  console.log(commends);
};
// Robot([
//   "PLACE 0,4,SOUTH",
//   "MOVE",
//   "MOVE",
//   "MOVE",
//   "MOVE",
//   "MOVE",
//   "MOVE",
//   "MOVE",
//   "MOVE",
//   "MOVE",
//   "MOVE",
//   "REPORT",
// ]);
// let park = new CarPark(5, 5);
// park.printPark(x, y);

// Robot(["PLACE 1,2,EAST", "MOVE", "MOVE", "LEFT", "MOVE", "REPORT"]);
// Robot(["PLACE 0,0,EAST","MOVE","LEFT","MOVE","LEFT","MOVE","LEFT","MOVE", "REPORT"]);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Place your bus in the park and start move: `, (commend) => {
  let order = commend.split(";").map((value)=>{
      return value.trim()
  });
  Robot(order);
  readline.close();
});
