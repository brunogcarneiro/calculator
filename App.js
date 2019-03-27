import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  initialState = {
    display: '',
    result: ''
  }

  state = this.initialState

  buttonPressHandler(op){
    (op === 'C') ? this.clearDisplay() :
    (op === '=') ? this.processEqual()
                 : this.defaultOperation(op)
  }

  clearDisplay(){
    this.setState(this.initialState)
  }

  processEqual(){
    const display = this.state.result;
    const result = '';

    this.setState({display, result})
  }

  defaultOperation(op){
    const currentDisplay = this.state.display
    const currentResult = this.state.result

    const display = currentDisplay+op
    let result = currentResult

    try {
      result = eval(display)
    } catch {}

    this.setState({display, result})
  }

  render() {
    const leftButtons = [
      ['7','8','9'],
      ['4','5','6'],
      ['1','2','3'],
      [',','0','='] 
    ];

    const rightButtons = ['C','÷','x','-','+']

    return (
      <View style={styles.container}>
        <Text style={styles.display1}>{this.state.display}</Text>
        <Text style={styles.display2}>{this.state.result}</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsLeft}>
            {leftButtons.map((row, i) => 
              <View key={i} style={styles.line}>
                {
                  row.map(
                    button => 
                      <TouchableOpacity key={button} style={styles.btnContainer} onPress={() => this.buttonPressHandler.bind(this)(button)}>
                        <Text style={styles.button}>{button}</Text>
                      </TouchableOpacity>
                  )
                }
              </View>
            )}
          </View>
          <View style={styles.buttonsRight}>
          {
            rightButtons.map(
              button => 
                <TouchableOpacity key={button} style={styles.btnContainer} onPress={() => this.buttonPressHandler.bind(this)(button)}>
                  <Text style={styles.button}>{button}</Text>
                </TouchableOpacity>
            )
          }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',

  },
  display1: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    fontSize: 70,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },
  display2: {
    flex: 0.6,
    backgroundColor: '#EFEFEF',
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 30,
    paddingBottom: 10
  },
  buttonsContainer: {
    flex: 5,
    flexDirection: 'row'
  },
  buttonsRight:{
    flex:1,
    backgroundColor: '#EEEE00'
  },
  buttonsLeft:{
    flex:3,
    alignItems: 'stretch'
  },
  line:{
    flex:1,
    flexDirection: 'row',
    marginBottom: -1
  },
  btnContainer:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  button:{
    color: 'white',
    textAlign: 'center',
    fontSize: 50
  }
});
