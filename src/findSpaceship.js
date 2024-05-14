// src/findSpaceship.js
function FindSpaceship() {}

FindSpaceship.prototype.searchmap = function (map) {
  // Check if the map is empty
  if (!map || map.trim() === "") {
    return "Map is empty!";
  }

  // Process the map to find the spaceship
  const rows = map.split('\n');
  for (let y = 0; y < rows.length; y++) {
    const x = rows[y].indexOf('X');
    if (x !== -1) {
      // Coordinates are found, return them in the format [x, height-y-1]
      // to adjust for the coordinate system with the bottom left as [0, 0]
      return [x, rows.length - y - 1];
    }
  }

  // If no spaceship is found
  return "Spaceship lost forever.";
};
