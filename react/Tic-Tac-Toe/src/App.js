import "./App.css";
import "./css/game.css";

import React, { Component } from "react";

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuesArray: [],
      currentPlayer: "X",
      nextPlayer: "0"
    };
  }

  _caculateWinner() {
    const valuesArray = this.state.valuesArray.slice();

    const winCombination = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5]
    ];
    for (let combination of winCombination) {
      const [a, b, c] = combination;
      console.log(a);
      if (
        valuesArray[a] &&
        valuesArray[b] &&
        valuesArray[c] &&
        valuesArray[a] === valuesArray[b] &&
        valuesArray[a] === valuesArray[c]
      ) {
        return true;
      }
    }
    return false;
  }

  _handleClick(i) {
    const newValues = this.state.valuesArray.slice();

    if (newValues[i] || this.state.showWinnerName) {
      return;
    }
    let currentPlayer = this.state.nextPlayer;
    let nextPlayer = '';
    if (currentPlayer === "X") {
      newValues[i] = "X";
      nextPlayer = "O";
    } else {
      newValues[i] = "O";
      nextPlayer = "X";
    }
    this.setState(
      {
        valuesArray: newValues,
        currentPlayer: this.state.nextPlayer,
        nextPlayer: nextPlayer
      },
      () => {
        if (this._caculateWinner()) {
          this.setState({ showWinnerName: true });
        }
      }
    );
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.valuesArray[i]}
        onClick={() => this._handleClick(i)}
      />
    );
  }

  render() {
    const status = "Next player: " + this.state.nextPlayer;
    const winnerName = "Winner: " + this.state.currentPlayer + "!";
    return (
      <div>
        <div className="status">{status}</div>
        {this.state.showWinnerName && (
          <div className="winner">{winnerName}</div>
        )}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class App extends Component {
  _handleClick() {
    this.setState({});
  }

  render() {
    return (
      <div className="game">
        <div>
          <Board />
        </div>
        <div />
      </div>
    );
  }
}

export default App;
