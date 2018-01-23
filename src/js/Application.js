import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default class Application extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submitted_answer: "",
      correct_answer: "",
      answer_is_submitted: false,
      question: [],
      notation: "INFIX",
      times_submitted: 0,
    };
    
    this.submitAnswer = this.submitAnswer.bind(this);
  }
  
  componentDidMount () {
    this.setState({
      question: this.generateNewQuestion(),
    });
  }
  
  generateNewQuestion () {
    // Randomly generate a new expression and update state.
    return [1, 2, 3, "+", "*"];
  }
  
  calculateAnswer (question) {
    // Parse question array and return the answer (as string).
    return "5";
  }
  
  showHint () {
    // Highlight the correct order of operations by color-coding all the numbers and symbols.
  }
  
  updateAnswer (text) {
    this.setState({
      submitted_answer: text,
      answer_is_submitted: false,
    });
  }
  
  submitAnswer () {
    let { submitted_answer } = this.state;
    if (submitted_answer && submitted_answer.length) {
      this.setState({
        correct_answer: this.calculateAnswer(this.state.question),
        answer_is_submitted: true,
        times_submitted: this.state.times_submitted + 1,
      });
    }
  }
  
  render () {
    let answerMessage = null;
    
    if (this.state.answer_is_submitted) {
      if (this.state.submitted_answer === this.state.correct_answer) {
        answerMessage = <Text style={styles.text}>Correct! Answer: {this.state.correct_answer}</Text>;
      } else {
        answerMessage = <Text style={styles.text}>Incorrect! Answer: {this.state.correct_answer}</Text>;
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
          <View style={styles.flexJustifyCenter}>
            <View style={styles.flexRow}>
              <TextInput style={[styles.text, styles.answerForm]}
                         underlineColorAndroid="transparent"
                         placeholder="Answer"
                         keyboardType="numeric"
                         onChangeText={ text => this.updateAnswer(text) } />
              <Button style={styles.submitButton}
                      onPress={this.submitAnswer}
                      title="Submit"
                      color="green"
                      accessibilityLabel="Tap here to submit" />
            </View>
          </View>
          <View style={styles.flexJustifyCenter}>
            <Button style={styles.submitButton}
                    onPress={this.showHint}
                    title="Hint"
                    color="skyblue"
                    accessibilityLabel="Tap here for a hint" />
          </View>
          <View style={styles.flexJustifyCenter}>
            <Button style={styles.submitButton}
                    onPress={this.generateNewQuestion}
                    title="New Question"
                    color="orange"
                    accessibilityLabel="Tap here to generate a new question" />
          </View>
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
  flexJustifyCenter: {
    flex: 1,
    justifyContent: "center",
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  submitButton: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    padding: 4,
  },
  text: {
    fontSize: 32,
    textAlign: "center",
  },
});
