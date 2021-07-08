// // class Obstacle {
// //   counter: number;
// //   canvas: any;
// //   array: any[] = [];
// //   arrayObstacle: any[] = [];

// //   count: number;

// //   constructor(
// //     canvas: any,
// //     counter: number,
// //     array: any[] = [],
// //     arrayObstacle: any[] = []
// //   ) {
// //     this.counter = counter;
// //     this.canvas = canvas;
// //     this.array = array;
// //     this.arrayObstacle = arrayObstacle;

// //     this.count = 0;

// //     for (var i = 0; i < 500; i++) {
// //       arrayObstacle.push(new Array(1300).join("0").split("").map(parseFloat));
// //     }
// //   }

// //   //TODO add start and end in obstacle array
// //   getStartEndPosition(canvas: any, event: MouseEvent, context: any) {
// //     let rect = canvas.getBoundingClientRect();
// //     let x = Math.round(event.clientX - rect.left);
// //     let y = Math.round(event.clientY - rect.top);

// //     var context = canvas.getContext("2d");

// //     if (counter < 2) {
// //       if (counter < 1) {
// //         var obj1 = { obj: "start", x: x, y: y };
// //         this.array.push(obj1);
// //         // Add start/end in array ... empty space = 0

// //         arrayObstacle[y][x] = "s";
// //       } else {
// //         var obj1 = { obj: "end", x: x, y: y };
// //         this.array.push(obj1);
// //         // Add start/end in array ... empty space = 0

// //         arrayObstacle[y][x] = "e";
// //       }

// //       context.beginPath();
// //       context.arc(x, y, 10, 0, 2 * Math.PI);
// //       context.strokeStyle = "red";
// //       context.stroke();
// //       context.fillStyle = "red";
// //       context.fill();
// //     } else {
// //       this.getObstaclePosition(canvas, event, context);
// //     }

// //     counter++;
// //   }

// //   getObstaclePosition(canvas: any, event: MouseEvent, context: any) {
// //     this.count++;

// //     let rect = canvas.getBoundingClientRect();
// //     let x: number = Math.round(event.clientX - rect.left);
// //     let y: number = Math.round(event.clientY - rect.top);

// //     const arr = new Uint8ClampedArray(50000);

// //     if (counter < 5) {
// //       var obj2 = {
// //         obj: "obstacle" + this.count,
// //         x: x,
// //         y: y,
// //         max: x + 150 + " " + (y + 100),
// //       };
// //       this.array.push(obj2);

// //       // Iterate through every pixel
// //       for (let i = 0; i < arr.length; i += 4) {
// //         arr[i + 0] = 0; // R value
// //         arr[i + 1] = 100; // G value
// //         arr[i + 2] = 0; // B value
// //         arr[i + 3] = 255; // A value
// //       }

// //       // Initialize a new ImageData object
// //       let imageData = new ImageData(arr, 100);

// //       // Draw image data to the canvas
// //       context.putImageData(imageData, x, y);

// //       for (var i = y; i < y + 150; i++) {
// //         for (var j = x; j < x + 100; j++) {
// //           arrayObstacle[i][j] = 1;
// //         }
// //       }
// //     }
// //   }

// //   getCursorPosition(canvas: any, event: MouseEvent, cw: any, context: any) {
// //     var rect: any = canvas.getBoundingClientRect();
// //     var x: any = event.clientX - rect.left;
// //     var y: any = event.clientY - rect.top;
// //     var cy: any = (y + (cw - (y % cw))) / cw;
// //     var cx: any = (x + (cw - (x % cw))) / cw;
// //     //console.log("x: " + cx + " y: " + cy, (cx*40) - 40, (cy*40) -40)
// //     if (cx === 1 || cx === 12 || cy === 1 || cy === 12) {
// //       context.beginPath();
// //       context.fillStyle = "red";
// //       if (cx === 1 && cy === 1) {
// //         context.fillRect(0, 0, 3 * cw, 6 * cw);
// //       }
// //       if (cx === 12 && cy === 1) {
// //         context.fillRect(9 * cw, 0, 3 * cw, 6 * cw);
// //       }
// //       if (cx === 1 && cy === 12) {
// //         context.fillRect(0, 6 * cw, 3 * cw, 6 * cw);
// //       }
// //       if (cx === 12 && cy === 12) {
// //         context.fillRect(9 * cw, 6 * cw, 3 * cw, 6 * cw);
// //       }
// //     }
// //   }
// // }

// class App {
//     counter: number;
//     canvas: any;

//     count: number;

//     constructor(canvas: any, counter: number) {
//       this.counter = counter;
//       this.canvas = canvas;

//       this.count = 0;
//     }

//     handleClickObstacle(e: MouseEvent) {
//       context.fillStyle = "black";

//       context.fillRect(
//         Math.floor(e.offsetX / boxSize) * boxSize,
//         Math.floor(e.offsetY / boxSize) * boxSize,
//         boxSize,
//         boxSize
//       );
//     }

//     handleClickStartEnd(e: MouseEvent) {
//       context.fillStyle = "red";

//       if (counter < 2) {
//         context.fillRect(
//           Math.floor(e.offsetX / boxSize) * boxSize,
//           Math.floor(e.offsetY / boxSize) * boxSize,
//           boxSize,
//           boxSize
//         );
//         counter = counter + 1;
//       } else {
//         this.handleClickObstacle(e);
//       }
//     }
//   }

//   var bw = 480;
//   var bh = 480;
//   var p = 0;
//   var cw = 40;
//   const canvas: any = document.getElementById("canvas")!;
//   var context = canvas.getContext("2d");
//   var counter: number = 0;
//   const array: any[] = [];
//   var arrayObstacle: any[] = [];

//   const app = new App(canvas, counter);

//   //const obst = new Obstacle(canvas, counter, array, arrayObstacle);

//   function drawBoard() {
//     for (var x = 0; x <= bw; x += cw) {
//       context.moveTo(0.5 + x + p, p);
//       context.lineTo(0.5 + x + p, bh + p);
//     }

//     for (var x = 0; x <= bh; x += cw) {
//       context.moveTo(p, 0.5 + x + p);
//       context.lineTo(bw + p, 0.5 + x + p);
//     }

//     context.strokeStyle = "black";
//     context.stroke();
//   }

//   drawBoard();

//   function drawBox() {
//     context.beginPath();
//     context.fillStyle = "white";
//     context.lineWidth = 3;
//     context.strokeStyle = "black";
//     for (var row = 0; row < boxes; row++) {
//       for (var column = 0; column < boxes; column++) {
//         var x = column * boxSize;
//         var y = row * boxSize;
//         context.rect(x, y, boxSize, boxSize);
//         context.fill();
//         context.stroke();
//       }
//     }
//     context.closePath();
//   }

//   drawBox();

//   var boxSize = 40,
//     boxes = Math.floor(600 / boxSize);

//   canvas.addEventListener("mousedown", function (e: any) {
//     app.handleClickStartEnd(e);
//   });

//   // canvas.addEventListener("mousedown", function (e: any) {
//   //   obst.getCursorPosition(canvas, e, cw, context);
//   // });

//   //alert("Označite početnu i krajnju točku te 3 prepreke.");

//   // canvas.addEventListener("mousedown", function (e: any) {
//   //   obst.getStartEndPosition(canvas, e, context);
//   // });

//   const cleanButton = document.getElementById("clean")!;
//   cleanButton.addEventListener("click", () => {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     window.location.reload();
//   });

//   //start coord
//   var x1: any;
//   var y1: any;
//   //end coord
//   var x2: any;
//   var y2: any;
//   //obst1 coord
//   var x3: any;
//   var y3: any;
//   //obst2 coord
//   var x4: any;
//   var y4: any;
//   //obst3 coord
//   var x5: any;
//   var y5: any;

//   //let shortestPath: any[] = [];
//   var start: any[] = [];
//   var end: any[] = [];
//   const startButton = document.getElementById("start")!;
//   startButton.addEventListener("click", () => {
//     array.forEach(function (value) {
//       if (value.obj === "start") {
//         x1 = value.x;
//         y1 = value.y;
//       } else if (value.obj === "end") {
//         x2 = value.x;
//         y2 = value.y;
//       } else if (value.obj === "obstacle1") {
//         x3 = value.x;
//         y3 = value.y;
//       } else if (value.obj === "obstacle2") {
//         x4 = value.x;
//         y4 = value.y;
//       } else if (value.obj === "obstacle3") {
//         x5 = value.x;
//         y5 = value.y;
//       }
//     });

//     start = [y1, x1];
//     end = [y2, x2];

//     console.log(start);
//     console.log(end);

//     if (start.length !== 0 && end.length !== 0) {
//       path();
//     }
//   });

//   var arr: any[] = [];
//   function path() {
//     for (var i = 0; i < arrayObstacle.length; i++) {
//       for (var j = 0; j < arrayObstacle[i].length; j++) {
//         //i = y and j = x

//         if (j < end[1] && j > start[1]) {
//           if (arrayObstacle[i][j] === 0) {
//             var a: any[] = [i, j];
//             arr.push(a);
//           }
//         }
//       }
//     }

//     const distance = (coor1: any[], coor2: any[]) => {
//       const x = coor2[1] - coor1[1];
//       const y = coor2[0] - coor1[0];
//       return Math.sqrt(x * x + y * y);
//     };
//     const sortByDistance = (arr2: any[], point: any) => {
//       const sorter = (a: any[], b: any[]) =>
//         distance(a, point) - distance(b, point);
//       arr2.sort(sorter);
//     };
//     sortByDistance(arr, end);

//     var arr3: any[] = [];
//     for (var p = 0; p < arr.length; p++) {
//       if (arr3.length === 0) {
//         arr3.push(arr[p]);
//       } else {
//         for (var r = 0; r < arr3.length; r++) {
//           if (arr[p][1] === arr3[r][1]) {
//             if (arr3[r][0] < arr[p][0]) {
//               arr3
//                 .filter((e) => e[0] === arr3[r][0] && e[1] === arr3[r][1])
//                 .reduce((sum, record) => sum + record);

//               arr3.push(arr[p]);
//             }
//           } else {
//             // if (arr3[r][1] > arr[p][1]) {
//             //   arr3.reduce(arr3[r]);
//             //   arr3.push(arr[p]);
//             // }
//           }
//         }
//       }
//     }

//     console.log(arr3);
//     //console.log(arr);

//     // context.lineWidth = 1;
//     // context.strokeStyle = "red";
//     // context.beginPath();
//     // //context.moveTo(start[1], start[0]);
//     // for (var r = 0; r < arr.length; r++) {
//     //   context.lineTo(arr[r][1], arr[r][0]);
//     // }
//     // context.stroke();
//   }

//       [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//       [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
//       [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
//       [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
//       [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//       [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
//       [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
//       [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
//       [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//       [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
//       [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
//       [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
//       [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
//       [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
//       [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

//       [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
//       [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
//       [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
//       [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
