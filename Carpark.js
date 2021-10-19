export default class CarPark {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  bus = (direct) => {
    switch (direct) {
      case "NORTH":
        return "⬆";
      case "SOUTH":
        return "⬇";
      case "WEST":
        return "⬅";
      case "EAST":
        return "⮕";
    }
  };

  printPark = (x, y) => {
    let borderX = ["- ".repeat(26)];
    let borderY = [("|" + " ".repeat(9)).repeat(5) + "|"];
    let busLine = Array(
      [("|" + " ".repeat(9)).repeat(5) + "|"],
      [("|" + " ".repeat(9)).repeat(5) + "|"],
      [("|" + " ".repeat(9)).repeat(5) + "|"],
      [("|" + " ".repeat(9)).repeat(5) + "|"],
      [("|" + " ".repeat(9)).repeat(5) + "|"]
    );
    
    String.prototype.replaceAt = function (index, replacement) {
      if (index >= this.length) {
        return this.valueOf();
      }
      return this.substring(0, index) + replacement + this.substring(index + 1);
    };
    
    // busLine[y][0].replaceAt(5,"⮕" )
    // console.log(busLine[y][0]);

    busLine.forEach((element) => {
      console.log(`${borderX}`);
      console.log(`${borderY}`);
      console.log(`${element}`);
      console.log(`${borderY}`);
    });
    console.log(`${borderX}`);
  };
}
