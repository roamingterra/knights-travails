// NODE FACTORY FUNCTION
function Node(position) {
  const input = position;
  const regex = /^([a-h])([1-8])$/;
  const match = input.match(regex);
  let x, y;
  if (match) {
    x = match[1];
    y = Number(match[2]);
  } else {
    throw new Error("Position is out of bounds");
  }

  return {
    currentPosition: function () {
      return x + y;
    },
    move1: function () {
      const asciiCode = x.charCodeAt(0);
      const newAsciiCode = asciiCode + 2;
      const newLetter = String.fromCharCode(newAsciiCode);
      const x1 = newLetter;
      const y1 = y + 1;
      if (x1 < "a" || x1 > "h" || y1 < 1 || y1 > 8) {
        return null;
      }
      return x1 + y1;
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
      return x2 + y2;
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
      return x3 + y3;
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
      return x4 + y4;
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
      return x5 + y5;
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
      return x6 + y6;
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
      return x7 + y7;
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
      return x8 + y8;
    },
  };
}

const knight = Node("d4");
console.log(knight.currentPosition());
console.log(knight.move1());
console.log(knight.move2());
console.log(knight.move3());
console.log(knight.move4());
console.log(knight.move5());
console.log(knight.move6());
console.log(knight.move7());
console.log(knight.move8());
