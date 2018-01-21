import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Application extends Component {
  render() {
    return (
      <View style={styles.mainPageContainer}>
        {/* Question Area */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
          <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
          <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        </View>
        {/* Answer Area */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
          <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
          <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        </View>
        {/* Space for Keyboard */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
          <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
          <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainPageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingRight: 12,
    paddingLeft: 12,
  },
});
