describe("Find Spaceship", function () {
  var searchmap;

  beforeEach(function () {
    searchmap = new FindSpaceship();
  });

  it("should return correct coordinates when spaceship is present", function () {
    const map =
      "..........\n" +
      "..........\n" +
      "..........\n" +
      ".......X..\n" +
      "..........\n" +
      "..........";
    const result = searchmap.searchmap(map);
    expect(result).toEqual([7, 2]);
  });

  it('should return "Spaceship lost forever." when spaceship is not present', function () {
    const map =
      "..........\n" +
      "..........\n" +
      "..........\n" +
      "..........\n" +
      "..........\n" +
      "..........";
    const result = searchmap.searchmap(map);
    expect(result).toEqual("Spaceship lost forever.");
  });

  it('should return "map is empty" if map is empty', function () {
    const map = "";
    const result = searchmap.searchmap(map);
    expect(result).toEqual("Spaceship lost forever.");
  });
});
