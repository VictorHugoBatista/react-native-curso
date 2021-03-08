import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import Header from './src/components/Header';
import MineField from './src/components/MineField';
import params from './src/params';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
  toggleFlag,
  flagsUsed,
} from './src/gameLogic';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.createState();
    this.state = this.createState();
  }

  createState = () => {
    const rows = params.getRowsAmount();
    const cols = params.getColumnsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    };
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  onOpenField = (row, col) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, col);
    const lost = hasExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Fim de jogo', 'Perdeu');
    }

    if (won) {
      Alert.alert('Parabéns!', 'Você venceu');
    }

    this.setState({board, won, lost});
  }

  onSelectField = (row, col) => {
    const board = cloneBoard(this.state.board);
    toggleFlag(board, row, col);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns!', 'Você venceu');
    }

    this.setState({board, won});
  }

  render() {
    return (
      <View style={styles.container}>
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())} />

        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField}
            onSelectField={this.onSelectField} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  initialText: {
    fontSize: 18,
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#aaa',
  },
});
