const {Game} = require("../live-game.js");
let game;
describe("game", () => {
  beforeEach(() => {
    game = new Game([
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ]);
  });

  it(`в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, 
      зарождается жизнь;`, () => {
    const x = 0;
    const y = 2;
    const life = game.lifeCellCount(x, y);
    let isLive = game.isLive(x, y);

    expect(life).toBe(3);
    expect(isLive).toBe(false);

    game.step();

    isLive = game.isLive(x, y);
    expect(isLive).toBe(true);
  });

  it(`если у живой клетки есть две или три живые соседки, 
      то эта клетка продолжает жить;`, () => {
    const x = 1;
    const y = 1;
    let isLive = game.isLive(x, y);
    const life = game.lifeCellCount(x, y);

    expect(isLive).toBe(true);
    expect(life).toBe(2);

    game.step();

    isLive = game.isLive(x, y);
    expect(isLive).toBe(true);
  });

  it(`если соседей меньше двух или больше трёх, клетка умирает 
  («от одиночества» или «от перенаселённости»)`, () => {
    const x = 1;
    const y = 3;
    let isLive = game.isLive(x, y);
    const life = game.lifeCellCount(x, y);

    expect(isLive).toBe(true);
    expect(life).toBe(1);

    game.step();

    isLive = game.isLive(x, y);
    expect(isLive).toBe(false);
  });

  it(`заканчивается если - на поле не останется ни одной «живой» клетки`, () => {
    let simpleGame = new Game([
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ]);

    let isEnded = simpleGame.isEnded();
    expect(isEnded).toBe(false);

    simpleGame.step();

    isEnded = simpleGame.isEnded();
    expect(isEnded).toBe(true);
  });
});
