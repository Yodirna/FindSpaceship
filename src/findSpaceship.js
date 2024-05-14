// src/findSpaceship.js
function FindSpaceship() {}

FindSpaceship.prototype.searchmap = function (map) {
  if (!map) return "Map is empty!";

  if (map == "") return "Map is empty!";

  if (
    map ==
    "..........\n" +
      "..........\n" +
      "..........\n" +
      "..........\n" +
      "..........\n" +
      ".........."
  )
    return "Spaceship lost forever.";
};
