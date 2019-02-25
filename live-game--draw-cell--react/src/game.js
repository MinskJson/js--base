class Game {
  constructor(arena) {
    /**
     * Y
     * [
     *  X[]
     * ]
     */
    this.__arena = arena;
  }

  getArena() {
    return this.__arena;
  }
  
  step() {
    let newArena = [];

    this.__arena.forEach((osX, y) => {
      newArena[y] = newArena[y] || [].concat(osX);

      osX.forEach((val, x) => {
        const life = this.lifeCellCount(x, y);
        const isLive = this.isLive(x, y);

        if (isLive && (life === 2 || life === 3)) {
          newArena[y][x] = 1;
        }

        if (isLive && (life < 2 || life > 3)) {
          newArena[y][x] = 0;
        }

        if (!isLive && life === 3) {
          newArena[y][x] = 1;
        }
      });
    });

    this.__arena = newArena;
  }

  isEnded() {
    const count = this.__arena.reduce((result, val, y) => {
      return val.reduce((result, val, x) => {
        if (this.isLive(x, y)) {
          result += 1;
        }
        return result;
      }, 0);
    });

    return count === 0;
  }

  isLive(x, y) {
    if (y === this.__arena.length || y < 0) return false;
    if (x === this.__arena[y].length || x < 0) return false;
    
    return this.__arena[y][x] === 1;
  }

  lifeCellCount(x, y) {
    const osY = [y - 1, y, y + 1];
    const osX = [x - 1, x, x + 1];
    return osY.reduce((result, y) => {
      return osX.reduce((result, x) => {
        if (this.isLive(x, y)) {
          result += 1;
        }
        return result;
      }, result);
    }, this.isLive(x, y) ? -1 : 0);
  }
}

export {
  Game,
}