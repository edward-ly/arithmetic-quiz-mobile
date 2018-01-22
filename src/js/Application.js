import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class Application extends Component {
  constructor (props) {
    super(props);
    this.state = {
      answer: "",
      times_submitted: 0,
    };
    this.updateAnswer.bind(this);
    this.submitAnswer.bind(this);
  }
  
  updateAnswer (text) {
    this.setState({
      answer: text,
    });
  }
  
  submitAnswer (event) {
    // let answer = event.target.value;
    // console.log(answer);
    // if (answer.length) {
    //   this.setState({
    //     answer: answer,
    //     times_submitted: this.state.times_submitted + 1,
    //   });
    // }
  }

  render() {
    return (
      <View style={styles.mainPageContainer}>
        {/* Question Area */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
          <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.text}>{this.state.answer}</Text>
          </View>
        </View>
        {/* Answer Area */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <TextInput style={[styles.text, styles.answerForm]}
                       underlineColorAndroid="transparent"
                       placeholder="Answer"
                       keyboardType="numeric"
                       onChangeText={ text => this.updateAnswer(text) } />
          </View>
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
  answerForm: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    borderColor: "gray",
    borderWidth: 2,
    padding: 4,
  },
  text: {
    fontSize: 32,
    textAlign: "center",
  }
});
