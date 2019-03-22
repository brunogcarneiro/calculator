import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display1}>25 + 25</Text>
        <Text style={styles.display2}>50</Text>
        <View style={styles.buttonsContainer}></View>
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
    fontSize: 80,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },
  display2: {
    flex: 0.4,
    backgroundColor: '#EFEFEF',
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 30,
    paddingBottom: 10
  },
  buttonsContainer: {
    flex: 5,
    flexDirection: 'row'
  }
});
