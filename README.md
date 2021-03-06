Description

- The application is a simulation of a robot operated bus moving in a carpark, of  dimensions 5 units x 5 units. 
- There are no other obstructions in the carpark. 
- The bus is free to roam around the carpark, but must be prevented from exiting the  carpark. Any movement that would result in the bus leaving the carpark must be  prevented, however further valid movement commands must still be allowed. 

The application should be able to read in any one of the following commands: 

- **PLACE** will put the bus in the carpark in position X,Y and facing NORTH, SOUTH,  EAST or WEST. 
- The origin (0,0) can be considered to be the SOUTH WEST most corner. - The first valid command to the bus is a PLACE command, after that, any sequence of  commands may be issued, in any order, including another PLACE command. The  application should discard all commands in the sequence until a valid PLACE  command has been executed. 
- **MOVE** will move the bus one unit forward in the direction it is currently facing. - **LEFT** and **RIGHT** will rotate the bus 90 degrees in the specified direction without  changing the position of the bus. 
- **REPORT** will announce the X,Y and F of the bus. This can be in any form, but  standard output is sufficient. 
- A bus that is not in the carpark should ignore the MOVE, LEFT, RIGHT and REPORT  commands. 
- Input can be from a file, or from standard input, as the developer chooses. - Provide test data to exercise the application.
Constraints: 
- The bus must not exit the carpark during movement. This also includes the initial  placement of the bus. 
- Any move that would cause the bus to exit the carpark must be ignored. 

### Note
- This car park simulator is running in node.js, please install node on the computer
- running terminal with commends seperated with ";", **exaple: place 2,3; move; move; left; report**

### Test cases
- PLACE 0,0,EAST; MOVE; LEFT; MOVE; LEFT; MOVE; LEFT; MOVE; REPORT  //Output: 0,0,SOUTH
- PLACE 0,0,NORTH; MOVE; REPORT   //Output: 0,1,NORTH
- PLACE 0,0,NORTH; LEFT; REPORT  //Output: 0,0,WEST
- PLACE 1,2,EAST; MOVE; MOVE; LEFT; MOVE; REPORT   //Output: 3,3,NORTH
- place 0,0,east; move; move ; move; move; move; move; move; report  //Output: 4,0,EAST


