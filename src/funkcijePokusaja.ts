// arrayObstacle.forEach((element) => {
//   if (parseInt(element.id) === Math.floor(y3)) {
//     start = element.arr;
//   }
// });

// arrayObstacle.forEach((element) => {
//   if (parseInt(element.id) === Math.floor(y5)) {
//     end = element.arr;
//   }
// });

// if (
//   Array.isArray(start) &&
//   start.length !== 0 &&
//   Array.isArray(end) &&
//   end.length !== 0
// ) {

// shortestPath = calculate(start, end);
// drawPath(shortestPath);
// console.log(JSON.stringify(shortestPath));

// } else {
//   console.log("krivo");
// }
//});

// function drawPath(shortest: any[]) {
//   if (Array.isArray(shortest) && shortestPath.length !== 0) {
//     var minx: number, miny: number, maxx: number, maxy: number;
//     miny = minx = Infinity;
//     maxx = maxy = -Infinity;

//     shortest.forEach((dat: any[]) => {
//       minx = Math.min(minx, dat[0]);
//       miny = Math.min(miny, dat[1]);
//       maxx = Math.max(maxx, dat[0]);
//       maxy = Math.max(maxy, dat[1]);
//     });
//     var rangeX = maxx - minx;
//     var rangeY = maxy - miny;
//     var range = Math.max(rangeX, rangeY);
//     var scale = Math.min(canvas.width, canvas.height);

//     context.beginPath();
//     shortest.forEach((dat: any[]) => {
//       var x: number = dat[0];
//       var y: number = dat[1];
//       x = ((x - minx) / range) * scale;
//       y = ((y - miny) / range) * scale;
//       context.lineTo(x, y);
//     });
//     context.strokeStyle = "red";
//     context.stroke();
//   }
// }

// function calculate(position: any[] = [], end: any[] = []) {
//   var queue = [];

//   arrayObstacle[position[0]][position[1]] = 1;
//   queue.push([position]); // store a path, not just a position

//   while (queue.length > 0) {
//     var path: any = queue.shift(); // get the path out of the queue
//     var pos: any[] = ([] = path[path.length - 1]); // ... and then the last position from it
//     var direction = [
//       [pos[0] + 1, pos[1]],
//       [pos[0], pos[1] + 1],
//       [pos[0] - 1, pos[1]],
//       [pos[0], pos[1] - 1],
//     ];

//     for (var i = 0; i < direction.length; i++) {
//       // Perform this check first:
//       if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
//         // return the path that led to the find
//         return path.concat([end]);
//       }

//       if (
//         direction[i][0] < 0 ||
//         direction[i][0] >= arrayObstacle[0].length ||
//         direction[i][1] < 0 ||
//         direction[i][1] >= arrayObstacle[0].length ||
//         arrayObstacle[direction[i][0]][direction[i][1]] != 0
//       ) {
//         continue;
//       }

//       arrayObstacle[direction[i][0]][direction[i][1]] = 1;

//       // extend and push the path on the queue
//       queue.push(path.concat([direction[i]]));
//     }
//   }
// }

// function setGraph(x1: number, y1: number, x2: number, y2: number) {
//   var imgData = canvas
//     .getContext("2d")
//     .createImageData(canvas.width, canvas.height);
//   var typedArrayCanvas = new Uint8ClampedArray(imgData.data);
//   var canvasArray = Array.prototype.slice.call(typedArrayCanvas); //array cijelog canvasa kao slobodnog mjesta (sve su 0)

//   var imgDataStart = canvas
//     .getContext("2d")
//     .createImageData(canvas.getContext("2d").arc(x1, y1, 10, 0, 2 * Math.PI));
//   var typedArrayStart = new Uint8ClampedArray(imgDataStart.data);
//   var imgDataEnd = canvas
//     .getContext("2d")
//     .createImageData(x2, y2, 10, 0, 2 * Math.PI);
//   var typedArrayEnd = new Uint8ClampedArray(imgDataEnd.data);

//   console.log(typedArrayStart);
//   console.log(typedArrayEnd);

//   for (var i = 0; i < typedArrayStart.length; i++) {
//     if (typedArrayStart[i] === 1) {
//       console.log("true");
//     }
//   }

//   var combined = canvasArray.map(function(item, index) {
//       return typedArrayStart[index];
//   });
//   console.log(combined);

//   //dodavanje 1 na mjestu unesenog start po x osi - TODO za y i dijagonalu
//   for (var i = 0; i < canvasArray.length; i++) {
//     for (var j = 0; j < 10; j++) {
//       canvasArray[x1 + j] = 1;
//     }
//     for (var j = 0; j < 10; j++) {
//       canvasArray[x1 - j] = 1;
//     }
//   }
//   //dodavanje 1 na mjestu unesenog end po x osi - TODO za y i dijagonalu
//   for (var i = 0; i < canvasArray.length; i++) {
//     for (var j = 0; j < 10; j++) {
//       canvasArray[x2 + j] = 1;
//     }
//     for (var j = 0; j < 10; j++) {
//       canvasArray[x2 - j] = 1;
//     }
//   }
//   console.log(canvasArray);

//   //TODO dodavanje 1 na mjestu unesenih prepreka
//     for (var i = 0; i < canvasArray.length; i++) {
//       canvasArray[x1] = 1;
//       console.log(canvasArray[5]);
//         if (canvasArray[i] === 0) {
//           console.log("true");
//         }
//     }

//   for(var c=0;c<measure;c++){
//       bricks[c]={};
//       for(var r =0;r<row;r++){

//       }
//   }

// let row: any = arrayObstacle.length;
// let col: any = arrayObstacle[0].length;

// //**************************
// function safeNeighbor(r: any, c: any) {
//   if (r < 0 || r >= row) return false;
//   if (c < 0 || c >= col) return false;
//   if (arrayObstacle[r][c] == 1) return false;
//   return true;
// }

// function exploreLocation(location: any) {
//   let r = location.r;
//   let c = location.c;
//   let allNeighbors = []; //left
//   if (safeNeighbor(r, c - 1)) allNeighbors.push({ r: r, c: c - 1 }); //right
//   if (safeNeighbor(r, c + 1)) allNeighbors.push({ r: r, c: c + 1 }); //top
//   if (safeNeighbor(r - 1, c)) allNeighbors.push({ r: r - 1, c: c }); //bottom
//   if (safeNeighbor(r + 1, c)) allNeighbors.push({ r: r + 1, c: c });
//   return allNeighbors;
// }
// function findPath() {
//   var location = { r: start[0], c: start[1] };
//   var queue = [];
//   queue.push(location);
//   while (queue.length) {
//     var currentLocation: any = queue.shift();
//     if (currentLocation.r == end[0] && currentLocation.c == end[1])
//       return currentLocation;
//     const a = arrayObstacle[currentLocation.r].arr;
//     a[Math.round(currentLocation.c)] = "visited";

//     var neighbors = exploreLocation(currentLocation);
//     for (let neighbor of neighbors) {
//       const n:any[]=arrayObstacle[neighbor.r].arr;
//       if (n[Math.round(neighbor.c)] != "visited") {
//         queue.push(neighbor);
//         n[Math.round(neighbor.c)] = "parent";
//         n[Math.round(neighbor.c)] = currentLocation;
//       }
//     }
//   }
//   console.log(arrayObstacle);
//   return false;
// }
// function printPath(path: any) {
//   let paths = [path];
//   while (true) {
//     let r = path.r;
//     let c = path.c;
//     let parent = arrayObstacle[r][c].parent;
//     if (parent == undefined) break;
//     paths.push(parent);
//     path = { r: parent.r, c: parent.c };
//   }
//   console.log(paths);
// }
//***************************

// function drawPath(shortest: any[]) {
//   if (Array.isArray(shortest) && shortestPath.length !== 0) {
//     var minx: number, miny: number, maxx: number, maxy: number;
//     miny = minx = Infinity;
//     maxx = maxy = -Infinity;

//     shortest.forEach((dat: any[]) => {
//       minx = Math.min(minx, dat[0]);
//       miny = Math.min(miny, dat[1]);
//       maxx = Math.max(maxx, dat[0]);
//       maxy = Math.max(maxy, dat[1]);
//     });
//     var rangeX = maxx - minx;
//     var rangeY = maxy - miny;
//     var range = Math.max(rangeX, rangeY);
//     var scale = Math.min(canvas.width, canvas.height);

//     context.beginPath();
//     shortest.forEach((dat: any[]) => {
//       var x: number = dat[0];
//       var y: number = dat[1];
//       x = ((x - minx) / range) * scale;
//       y = ((y - miny) / range) * scale;
//       context.lineTo(x, y);
//     });
//     context.strokeStyle = "red";
//     context.stroke();
//   }
// }

// function calculate(position: any[] = [], end: any[] = []) {
//   var queue = [];

//   arrayObstacle[position[0]][position[1]] = 1;
//   queue.push([position]); // store a path, not just a position

//   while (queue.length > 0) {
//     var path: any = queue.shift(); // get the path out of the queue
//     var pos: any[] = ([] = path[path.length - 1]); // ... and then the last position from it
//     var direction = [
//       [pos[0] + 1, pos[1]],
//       [pos[0], pos[1] + 1],
//       [pos[0] - 1, pos[1]],
//       [pos[0], pos[1] - 1],
//     ];

//     for (var i = 0; i < direction.length; i++) {
//       // Perform this check first:
//       if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
//         // return the path that led to the find
//         return path.concat([end]);
//       }

//       if (
//         direction[i][0] < 0 ||
//         direction[i][0] >= arrayObstacle[0].length ||
//         direction[i][1] < 0 ||
//         direction[i][1] >= arrayObstacle[0].length ||
//         arrayObstacle[direction[i][0]][direction[i][1]] != 0
//       ) {
//         continue;
//       }

//       arrayObstacle[direction[i][0]][direction[i][1]] = 1;

//       // extend and push the path on the queue
//       queue.push(path.concat([direction[i]]));
//     }
//   }
// }

// let result: any[];
// function calcCrow(lat1: number, lon1: number, lat2: number, lon2: number) {
//   const R = 6371e3; // metres
//   const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
//   const φ2 = (lat2 * Math.PI) / 180;
//   const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//   const Δλ = ((lon2 - lon1) * Math.PI) / 180;
//   const a =
//     Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//     Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   return R * c; // metres
// }

// let lonStart: number;
// let latStart: number;
// let lonEnd: number;
// let latEnd: number;
// let lonObs1: number;
// let latObs1: number;
// let lonObs2: number;
// let latObs2: number;
// let lonObs3: number;
// let latObs3: number;
// let calcEnd: number;
// let calcObs1: number;
// let calcObs2: number;
// let calcObs3: number;
// function assignCalculate() {
//   result = array.find((obj) => {
//     if (obj.obj === "start") {
//       lonStart = obj.x;
//       latStart = obj.y;
//     } else if (obj.obj === "end") {
//       lonEnd = obj.x;
//       latEnd = obj.y;

//       var s = { x: lonStart, y: latStart }; // Start
//       var e = { x: lonEnd, y: latEnd }; // End

//       var distance = e.x - s.x;
//       var slope = (e.y - s.y) / distance;
//       var step = 32; // Calculate y-coordinate every 32 units
//       for (var x = 0; x < distance; x += step) {
//         var y = x * slope;
//         (calcEnd = s.x + x), s.y + y;
//       }
//       //calcEnd = calcCrow(latStart, lonStart, latEnd, lonEnd);
//     } else if (obj.obj === "obstacle1") {
//       lonObs1 = obj.x;
//       latObs1 = obj.y;

//       var s = { x: lonStart, y: latStart }; // Start
//       var e = { x: lonObs1, y: latObs1 }; // End

//       var distance = e.x - s.x;
//       var slope = (e.y - s.y) / distance;
//       var step = 32; // Calculate y-coordinate every 32 units
//       for (var x = 0; x < distance; x += step) {
//         var y = x * slope;
//         (calcObs1 = s.x + x), s.y + y;
//       }
//       //calcObs1 = calcCrow(latStart, lonStart, latObs1, lonObs1);
//     } else if (obj.obj === "obstacle2") {
//       lonObs2 = obj.x;
//       latObs2 = obj.y;

//       var s = { x: lonStart, y: latStart }; // Start
//       var e = { x: lonObs2, y: latObs2 }; // End

//       var distance = e.x - s.x;
//       var slope = (e.y - s.y) / distance;
//       var step = 32; // Calculate y-coordinate every 32 units
//       for (var x = 0; x < distance; x += step) {
//         var y = x * slope;
//         (calcObs2 = s.x + x), s.y + y;
//       }
//       //calcObs2 = calcCrow(latStart, lonStart, latObs2, lonObs2);
//     } else if (obj.obj === "obstacle3") {
//       lonObs3 = obj.x;
//       latObs3 = obj.y;

//       var s = { x: lonStart, y: latStart }; // Start
//       var e = { x: lonObs3, y: latObs3 }; // End

//       var distance = e.x - s.x;
//       var slope = (e.y - s.y) / distance;
//       var step = 32; // Calculate y-coordinate every 32 units
//       for (var x = 0; x < distance; x += step) {
//         var y = x * slope;
//         (calcObs3 = s.x + x), s.y + y;
//       }
//       //calcObs3 = calcCrow(latStart, lonStart, latObs3, lonObs3);
//     }
//   });
// }

// function calculate() {
//   assignCalculate();

//   if (calcObs1 < calcObs2 && calcObs1 < calcObs3 && calcObs1 < calcEnd) {
//     drawLine(x1, y1, x3, y3);
//     if (calcObs1 < calcObs2 && calcObs2 < calcObs3 && calcObs2 < calcEnd) {
//       drawLine(x3, y3, x4, y4);
//       if (calcObs3 < calcEnd && calcObs2 < calcObs3) {
//         drawLine(x4, y4, x5, y5);
//         drawLine(x5, y5, x2, y2);
//       }
//     }
//   } else if (calcObs2 < calcObs1 && calcObs2 < calcObs3 && calcObs2 < calcEnd) {
//     drawLine(x1, y1, x4, y4);
//   } else if (calcObs3 < calcObs1 && calcObs3 < calcObs2 && calcObs3 < calcEnd) {
//     drawLine(x1, y1, x5, y5);
//   }
// }

// function drawLine(x: any, y: any, xx: any, yy: any) {
//   context.lineWidth = 1;
//   context.strokeStyle = "red";
//   context.stroke();
//   context.beginPath();
//   context.moveTo(x, y);
//   context.lineTo(xx, yy);
//   context.stroke();
// }

//za postavljanje starta u array
// for (var i = y; i < arrayObstacle.length; i++) {
//   for (var j = x; j < arrayObstacle[i].length; j++) {
//     arrayObstacle[i][j] = 2;
//     console.log(arrayObstacle[x][y]);
//   }
// }

// arrayObstacle.forEach((element) => {
//   // for (var i = y; i == y; i++) {

//   // }
//   //   for (var k = 0; k < element[i].length; k++) {
//   //     for (var j = x; j <= x; j++) {
//   //       if (k === j) {
//   //         element.map(function (_: any, _2: any) {
//   //           return (element[i][k] = "s");
//   //         });
//   //       }
//   //     }
//   //   }
//   // }
// });

//za postavljanje enda u array
// arrayObstacle.forEach((element) => {
//     for (var i = y; i <= y; i++) {
//       if (element.id === i) {
//         for (var k = 0; k < element.length; k++) {
//           for (var j = x; j <= x; j++) {
//             if (k === j) {
//               element.map(function (_: any, _2: any) {
//                 return (element[k] = "e");
//               });
//             }
//           }
//         }
//       }
//     }
//});

// Add obstacle in array ... empty space = 0
// arrayObstacle.forEach((element) => {
//     for (var i = y; i < y + 150; i++) {
//       if (element.id === i) {
//         for (var k = 0; k < element.length; k++) {
//           for (var j = x; j < x + 100; j++) {
//             if (k === j) {
//               element.map(function (_: any, _2: any) {
//                 return (element[k] = 1);
//               });
//             }
//           }
//         }
//       }
//     }
//   });

// var hasPath = function (start: any[], destination: any[]) {
//   arrayObstacle[start[0]][start[1]] = 1;
//   return searchMazeHelper(start, destination);
// };
// function searchMazeHelper(current: any[], end: any[]) {
//   // dfs
//   if (current[0] == end[0] && current[1] == end[1]) {
//     return true;
//   }
//   let neighborIndices: any[];
//   // Indices: 0->top,1->right, 2->bottom, 3->left
//   let directions = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0],
//   ];
//   for (const direction of directions) {
//     neighborIndices = [current[0] + direction[0], current[1] + direction[1]];
//     if (isFeasible(neighborIndices)) {
//       arrayObstacle[neighborIndices[0]][neighborIndices[1]] = 1;
//       if (searchMazeHelper(neighborIndices, end)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// function isFeasible(indices: any[]) {
//   let x: any = indices[0];
//   let y: any = indices[1];
//   return (
//     x >= 0 &&
//     x < arrayObstacle.length &&
//     y >= 0 &&
//     y < arrayObstacle[x].arr.length &&
//     arrayObstacle[x].arr[y] === 0
//   );
// }

// var arr: any = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

// var arr: any = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ];
