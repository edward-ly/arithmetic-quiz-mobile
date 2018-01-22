import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class Application extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submitted_answer: "",
      correct_answer: "5",
      answer_is_submitted: true,
      question: [1, 2, 3, "+", "*"],
      times_submitted: 0,
    };
    this.updateAnswer.bind(this);
    this.submitAnswer.bind(this);
  }
  
  updateAnswer (text) {
    this.setState({
      submitted_answer: text,
      answer_is_submitted: true,
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
    let answerMessage = null;
    
    if (this.state.answer_is_submitted) {
      if (this.state.submitted_answer === this.state.correct_answer) {
        answerMessage = <Text style={styles.text}>Correct!</Text>;
      } else {
        answerMessage = <Text style={styles.text}>Incorrect!</Text>;
      }
    }
    
    return (
      <View style={styles.mainPageContainer}>
        {/* Question Area */}
        <View style={styles.flex}>
          <View style={styles.flex} />
          <View style={styles.flexText}>
            <Text style={styles.text}>{this.state.question.join(" ")}</Text>
          </View>
          <View style={styles.flexText}>
            { answerMessage }
          </View>
        </View>
        {/* Answer Area */}
        <View style={styles.flex}>
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
        <View style={styles.flex} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
  },
});
