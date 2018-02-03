import React, { Component } from "react";
import { View } from "react-native";

import AnswerForm from "./components/answer/AnswerForm";
import FlexSpace from "./components/layout/FlexSpace";
import HintButton from "./components/answer/HintButton";
import NextQuestionButton from "./components/question/NextQuestionButton";
import QuestionDisplay from "./components/question/QuestionDisplay";
import StatusMessage from "./components/answer/StatusMessage";

import FlexStyles from "./styles/FlexStyles";
import TextStyles from "./styles/TextStyles";
import ViewStyles from "./styles/ViewStyles";

import math from "./utilities/math";

export default class Application extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submitted_answer: "",
      correct_answer: "",
      answer_is_submitted: false,
      question: [],
      hint: [],
      notation: "POSTFIX",
      times_submitted: 0,
    };
    
    this.generateNewQuestion = this.generateNewQuestion.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }
  
  componentDidMount () {
    this.generateNewQuestion();
  }

  generateNewQuestion () {
    // Randomly generate a new expression and update state.
    let number_of_operations = 2; // TODO: value to change with user settings
    let answer = math.generateRandomInteger(41, -20).toString();
    let { question, hint } = math.generateRandomExpression(answer, number_of_operations, this.state.notation);

    this.setState({
      question: question,
      hint: hint,
      correct_answer: answer,
      answer_is_submitted: false,
      times_submitted: 0,
    });
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
        answer_is_submitted: true,
        times_submitted: this.state.times_submitted + 1,
      });
    }
  }
  
  render () {
    let status_message = null;
    let message_styles = [];
    if (this.state.answer_is_submitted) {
      if (this.state.submitted_answer === this.state.correct_answer) {
        status_message = "Correct! Answer: " + this.state.correct_answer;
        message_styles.push(TextStyles.green);
      } else {
        status_message = "Incorrect! Answer: " + this.state.correct_answer;
        message_styles.push(TextStyles.red);
      }
    }

    return (
      <View style={ViewStyles.mainPageContainer}>
        {/* Question Area */}
        <View style={FlexStyles.flex}>
          <FlexSpace />
          <QuestionDisplay question={this.state.question.join(" ")} />
          <StatusMessage message={status_message} textStyles={message_styles} />
        </View>
        {/* Answer Area */}
        <View style={FlexStyles.flex}>
          <AnswerForm onChangeText={text => this.updateAnswer(text)}
                      onSubmit={this.submitAnswer} />
          <HintButton onPress={this.showHint} />
          <NextQuestionButton onPress={this.generateNewQuestion} />
        </View>
        {/* Space for Keyboard */}
        <FlexSpace />
      </View>
    );
  }
}
