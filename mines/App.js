import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import MineField from './src/components/MineField';
import params from './src/params';
import { createMinedBoard } from './src/gameLogic';

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
    };
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.initialText}>
          Iniciando o Mines!
        </Text>
        <Text style={styles.initialText}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>

        <View style={styles.board}>
          <MineField board={this.state.board} />
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
