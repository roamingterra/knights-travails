// NODE FACTORY FUNCTION
function Node(position = null, parent = null) {
  if (position === null) return;
  const input = position;
  const regex = /^([a-h])([1-8])$/;
  const match = input.match(regex);
  let x, y;
  if (match) {
    x = match[1];
    y = Number(match[2]);
  } else {
    return null;
  }

  return {
    currentPosition: function () {
      return String(x + y);
    },

    parent: parent,

    move1: function () {
      const asciiCode = x.charCodeAt(0);
      const newAsciiCode = asciiCode + 2;
      const newLetter = String.fromCharCode(newAsciiCode);
      const x1 = newLetter;
      const y1 = y + 1;
      if (x1 < "a" || x1 > "h" || y1 < 1 || y1 > 8) {
        return null;
      }
      return String(x1 + y1);
    },
    move2: function () {
      const asciiCode = x.charCodeAt(0);
      const newAsciiCode = asciiCode + 2;
      const newLetter = String.fromCharCode(newAsciiCode);
      const x2 = newLetter;
      const y2 = y - 1;
      if (x2 < "a" || x2 > "h" || y2 < 1 || y2 > 8) {
        return null;
      }
      return String(x2 + y2);
    },
    move3: function () {
      const asciiCode = x.charCodeAt(0);
      const newAsciiCode = asciiCode - 2;
      const newLetter = String.fromCharCode(newAsciiCode);
      const x3 = newLetter;
      const y3 = y + 1;
      if (x3 < "a" || x3 > "h" || y3 < 1 || y3 > 8) {
        return null;
      }
      return String(x3 + y3);
    },
    move4: function () {
      const asciiCode = x.charCodeAt(0);
      const newAsciiCode = asciiCode - 2;
      const newLetter = String.fromCharCode(newAsciiCode);
      const x4 = newLetter;
      const y4 = y - 1;
      if (x4 < "a" || x4 > "h" || y4 < 1 || y4 > 8) {
        return null;
      }
      return String(x4 + y4);
    },
    move5: function () {
      const asciiCode = x.charCodeAt(0);
      const newAsciiCode = asciiCode + 1;
      const newLetter = String.fromCharCode(newAsciiCode);
      const x5 = newLetter;
      const y5 = y + 2;
      if (x5 < "a" || x5 > "h" || y5 < 1 || y5 > 8) {
        return null;
      }
      return String(x5 + y5);
    },
    move6: function () {
      const asciiCode = x.charCodeAt(0);
      const newAsciiCode = asciiCode + 1;
      const newLetter = String.fromCharCode(newAsciiCode);
      const x6 = newLetter;
      const y6 = y - 2;
      if (x6 < "a" || x6 > "h" || y6 < 1 || y6 > 8) {
        return null;
      }
      return String(x6 + y6);
    },
    move7: function () {
      const asciiCode = x.charCodeAt(0);
      const newAsciiCode = asciiCode - 1;
      const newLetter = String.fromCharCode(newAsciiCode);
      const x7 = newLetter;
      const y7 = y + 2;
      if (x7 < "a" || x7 > "h" || y7 < 1 || y7 > 8) {
        return null;
      }
      return String(x7 + y7);
    },
    move8: function () {
      const asciiCode = x.charCodeAt(0);
      const newAsciiCode = asciiCode - 1;
      const newLetter = String.fromCharCode(newAsciiCode);
      const x8 = newLetter;
      const y8 = y - 2;
      if (x8 < "a" || x8 > "h" || y8 < 1 || y8 > 8) {
        return null;
      }
      return String(x8 + y8);
    },

    // Method for creating new nodes
    newNodes: function () {
      const currentNodeNames = [];
      const newNodes = [];

      // Fill array currentNodeNames with all possible moves
      for (let i = 0; i < 8; i++) {
        const methodName = `move${i + 1}`;
        const method = this[methodName];
        const newNode = method();
        if (newNode !== null) currentNodeNames.push(newNode);
      }

      // Create objects based on new nodes and store their references in newNodes array
      if (currentNodeNames.length !== 0) {
        for (let i = 0; i < currentNodeNames.length; i++) {
          const childPosition = currentNodeNames[i];
          const childNode = Node(childPosition, this);
          if (childNode !== null) {
            childNode.parent = this; // Child points back to parent
          }
          newNodes.push(childNode);
        }
        return newNodes;
      } else return;
    },
  };
}

function KnightMoves(startPosition, endPosition) {
  // Initialization of some key components
  const chessBoard = [];

  // Create array of chess positions
  for (let i = 0; i < 8; i++) {
    const asciiCode = i + 97;
    const positionXAxis = String.fromCharCode(asciiCode);
    for (let j = 0; j < 8; j++) {
      const positionYAxis = j + 1;
      const boardPosition = positionXAxis + positionYAxis;
      chessBoard.push(boardPosition);
    }
  }

  // GRAPH FACTORY FUNCTION (BREADTH FIRST APPROACH FOR CREATING THE TREE)
  function Graph() {
    const root = Node(startPosition);
    let endPositionObject;
    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      //   const currentNodeObject = Node(currentNode);
      if (currentNode.currentPosition() === endPosition) {
        endPositionObject = currentNode;
        return endPositionObject;
      }

      const newNodes = currentNode.newNodes(); // returns array of child node objects
      queue.push(...newNodes);
    }
  }

  // TRACE SHORTEST PATH FUNCTION
  function tracePath(endPositionObject) {
    const path = [];
    let numOfSteps;
    let currentObject = endPositionObject;
    path.unshift(currentObject.currentPosition());

    // Trace back path from end node to root
    while (currentObject.parent !== null) {
      path.unshift(currentObject.parent.currentPosition());
      currentObject = currentObject.parent;
    }
    numOfSteps = path.length - 1;

    // Show user the path
    console.log(`You made it in ${numOfSteps} moves! Here's your path:`);

    for (let i = 0; i < path.length; i++) {
      console.log(`${path[i]}`);
    }
  }

  // Flow control
  const endPositionObject = Graph();
  tracePath(endPositionObject);
  return;
}

let startingPosition = "d4";
let endPosition = "d5";

console.log("\nKnight moves from d4 to d5.\n");

KnightMoves(startingPosition, endPosition);
