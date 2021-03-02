import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from './src/components/Button';
import './src/components/Display';
import Display from './src/components/Display';

import { buttons } from './src/config/buttons';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

class App extends Component {
  state = { ...initialState };

  clickHandler(action, value) {
    if (this[action]) {
      this[action](value);
    }
  }

  addDigit = digit => {
    const clearDisplay = this.state.displayValue === '0' && digit !== '.' || this.state.clearDisplay;
  
    if (digit === '.' && ! clearDisplay && this.state.displayValue.includes('.')) {
      return;
    }

    const currentValue = ! clearDisplay ? this.state.displayValue : '';
    const displayValue = currentValue + digit;

    this.setState({
      displayValue,
      clearDisplay: false,
    });

    if (digit !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [ ...this.state.values ];
      values[this.state.current] = newValue;

      this.setState({ values });
    }
  };

  clearMemory = () => {
    this.addDigit(0);
    this.setState({ ...initialState });
  };

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({
        operation,
        current: 1,
        clearDisplay: true,
      });
      return;
    }
    const equals = operation === '=';
    const values = [ ...this.state.values ];
    try {
      values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
    } catch (err) {
      values[0] = this.state.values[0];
    }

    values[1] = 0;
    this.setState({
      displayValue: `${values[0]}`,
      operation: ! equals? operation : null,
      current: equals ? 0 : 1,
      clearDisplay: true,
      values,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          {buttons.map((button, key) =>
            <Button key={key} label={button.label} styles={button.styles}
              onClick={() => this.clickHandler(button.action, button.label)}></Button>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
