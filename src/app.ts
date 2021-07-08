class App {
  counter: number;
  canvas: any;
  arr: any[];

  xyS: any[];
  xyE: any[];

  constructor(
    canvas: any,
    counter: number,
    arr: any[],
    xyS: any[],
    xyE: any[]
  ) {
    this.counter = counter;
    this.canvas = canvas;
    this.arr = arr;

    this.xyS = xyS;
    this.xyE = xyE;
  }

  handleClickObstacle(e: MouseEvent) {
    context.fillStyle = "black";

    context.fillRect(
      Math.floor(e.offsetX / boxSize) * boxSize,
      Math.floor(e.offsetY / boxSize) * boxSize,
      boxSize,
      boxSize
    );

    arr[Math.floor(e.offsetX / boxSize)][
      Math.floor(e.offsetY / boxSize)
    ].state = "block";
  }

  handleClickStartEnd(e: MouseEvent) {
    context.fillStyle = "red";

    if (counter < 2) {
      context.fillRect(
        Math.floor(e.offsetX / boxSize) * boxSize,
        Math.floor(e.offsetY / boxSize) * boxSize,
        boxSize,
        boxSize
      );

      if (counter < 1) {
        arr[Math.floor(e.offsetX / boxSize)][
          Math.floor(e.offsetY / boxSize)
        ].state = "start";
        xyS = [
          Math.floor(e.offsetX / boxSize),
          Math.floor(e.offsetY / boxSize),
        ];
      } else {
        arr[Math.floor(e.offsetX / boxSize)][
          Math.floor(e.offsetY / boxSize)
        ].state = "goal";
        xyE = [
          Math.floor(e.offsetX / boxSize),
          Math.floor(e.offsetY / boxSize),
        ];
      }
      counter = counter + 1;
    } else {
      this.handleClickObstacle(e);
    }
  }
}

var arr: any = [
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
  [
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
    { state: "empty" },
  ],
];

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

var bw = 480; //120
var bh = 480;
var p = 0;
var cw = 40;

var xyS: any[] = [];
var xyE: any[] = [];

const canvas: any = document.getElementById("canvas")!;
var context = canvas.getContext("2d");

var counter: number = 0;

const app = new App(canvas, counter, arr, xyS, xyE);

function drawBoard() {
  for (var x = 0; x <= bw; x += cw) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, bh + p);
  }

  for (var x = 0; x <= bh; x += cw) {
    context.moveTo(p, 0.5 + x + p);
    context.lineTo(bw + p, 0.5 + x + p);
  }

  context.strokeStyle = "black";
  context.stroke();
}

drawBoard();

var boxSize = 40,
  boxes = Math.floor(600 / boxSize);

canvas.addEventListener("mousedown", function (e: any) {
  app.handleClickStartEnd(e);
});

const cleanButton = document.getElementById("clean")!;
cleanButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  window.location.reload();
});

const startButton = document.getElementById("start")!;
startButton.addEventListener("click", () => {
  let path = findPath();
  printPath(path);
});

let rowF = arr.length;
let colF = arr[0].length;
function safeNeighbor(r: any, c: any) {
  if (r < 0 || r >= rowF) return false;
  if (c < 0 || c >= colF) return false;
  if (arr[r][c].state == "block") return false;
  return true;
}
function exploreLocation(location: any) {
  let r: any = location.r;
  let c: any = location.c;
  let allNeighbors: any[] = [];
  if (safeNeighbor(r, c - 1)) {
    allNeighbors.push({ r: r, c: c - 1 });
  }
  if (safeNeighbor(r, c + 1)) {
    allNeighbors.push({ r: r, c: c + 1 });
  }
  if (safeNeighbor(r - 1, c)) {
    allNeighbors.push({ r: r - 1, c: c });
  }
  if (safeNeighbor(r + 1, c)) {
    allNeighbors.push({ r: r + 1, c: c });
  }
  return allNeighbors;
}

function findPath() {
  var location = { r: xyS[0], c: xyS[1] };
  var queue = [];
  queue.push(location);
  while (queue.length) {
    var currentLocation = queue.shift();
    if (currentLocation.r == xyE[0] && currentLocation.c == xyE[1])
      return currentLocation;
    arr[currentLocation.r][currentLocation.c].state = "visited";
    var neighbors = exploreLocation(currentLocation);
    for (var neighbor of neighbors) {
      if (arr[neighbor.r][neighbor.c].state != "visited") {
        queue.push(neighbor);
        arr[neighbor.r][neighbor.c]["parent"] = currentLocation;
      }
    }
  }
  return false;
}

function printPath(path: any) {
  let paths = [path];
  while (true) {
    let r = path.r;
    let c = path.c;
    if (arr[r] == undefined) {
      alert("Ne može se izračunati put");
      break;
    }
    let parent = arr[r][c].parent;
    if (parent == undefined) {
      break;
    }
    paths.push(parent);
    path = { r: parent.r, c: parent.c };
  }

  colorPath(paths);
}

function colorPath(paths: any[]) {
  var newArray: any[] = [];
  for (var i = 0; i < paths.length; i++) {
    newArray.push([paths[i].r, paths[i].c]);
  }

  for (var j = 0; j < newArray.length; j++) {
    context.fillStyle = "Green";
    context.fillRect(newArray[j][0] * 40, 40 * newArray[j][1], 40, 40);
    context.strokeStyle = "black";
    context.strokeRect(newArray[j][0] * 40, 40 * newArray[j][1], 40, 40);
  }
}
