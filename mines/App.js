import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Field from './src/components/Field';
import params from './src/params';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.initialText}>
          Iniciando o Mines!
        </Text>
        <Text style={styles.initialText}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>

        <Field />
        <Field opened nearMines={1} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  initialText: {
    fontSize: 20,
  },
});
