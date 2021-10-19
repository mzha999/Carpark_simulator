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
  // replace = function (index, string1, replacement) {
  //   return substr(0, index) + replacement + substr(index + replacement.length);
  // };
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
    // this.replace(y, busLine[x], "⮕");
    

    String.prototype.replaceAt = function (index, replacement) {
      if (index >= this.length) {
        return this.valueOf();
      }
      return this.substring(0, index) + replacement + this.substring(index + 1);
    };
    let test= "Hellooo how are you"
    test.replace("how","⮕")
    console.log(test)
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
