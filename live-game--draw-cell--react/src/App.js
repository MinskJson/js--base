import React, { Component } from 'react';
import { Game } from './game';

import './App.css';

const GameRow = ({row, y, onClick}) => {
  return <div className="game-row">{
    row.map((number, index) => <Cell key={y + index} col={number} x={index} y={y} onClick={onClick} />)
  }</div>
}

const Cell = ({col, onClick, x, y}) => {
  return <span className={`game-cell game-cell--${col}`} onClick={()=> onClick && onClick(x, y)}>{col}</span>;
}

const GameComponent = ({arr, onCellClick}) => {
  return <div className="game">
    {
      arr.map((row, index) => <GameRow key={index} row={row} y={index} onClick={onCellClick} />)
    }
  </div>
}

class App extends Component {
  state = {
    x: 0,
    y: 0,
    arr: [],
    isPlaying: false,
  }

  onXInputChange = (e) => {
    this.setState({
      x: parseInt(e.target.value),
      arr: this.createArray(parseInt(e.target.value), this.state.y),
    })
  }

  onYInputChange = (e) => {
    this.setState({
      y: parseInt(e.target.value),
      arr: this.createArray(this.state.x, parseInt(e.target.value)),
    });
  }

  createArray(x, y) {
    const xLvlArr = new Array(x).fill(0);
    const yLvlArr = new Array(y).fill(0).map(() => xLvlArr.slice());

    return yLvlArr;
  }

  onCellClick = (x, y) => {
    const { arr } = this.state;
    arr[y][x] =  arr[y][x] === 0 ? 1 : 0;

    const newArr = arr.map(e => e.slice());

    this.setState({
      arr: newArr,
    })
  }

  onPlay = () => {
    const { arr } = this.state;
    this.game = new Game(arr);

    this.setState({
      isPlaying: true
    })

    setInterval(() => {
      this.game.step();
      const newArr = this.game.getArena().map(e => e.slice());

      this.setState({
        arr: newArr,
      });
    }, 1000);
  }

  render() {
    const{ x, y, arr, isPlaying } = this.state;
    

    return (<div>
      <label>
        <div>x:{x}</div>
        <input type="number" min="0" onInput={this.onXInputChange} />
      </label>
      <label>
        <div>y:{y}</div>
        <input type="number" min="0" onInput={this.onYInputChange}/>
      </label>
      <div>
        <GameComponent arr={arr} onCellClick={isPlaying ? undefined : this.onCellClick} />
      </div>
      <div>
        <button onClick={this.onPlay}>Play</button>
      </div>
      </div>
    );
  }
}

export default App;
