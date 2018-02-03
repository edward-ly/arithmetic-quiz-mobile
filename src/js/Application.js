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

export default class Application extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submitted_answer: "",
      correct_answer: "",
      answer_is_submitted: false,
      question: [],
      notation: "POSTFIX",
      times_submitted: 0,
    };
    
    this.generateNewQuestion = this.generateNewQuestion.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }
  
  componentDidMount () {
    this.generateNewQuestion();
  }

  generateRandomInteger (range, start) {
    // Returns a random integer from start to (start + range - 1).
    return Math.floor(Math.random() * range) + start;
  }

  generateRandomOperation () {
    // Return one of the operations from the list.
    const operations = ["+", "-", "*", "/"];
    let i = this.generateRandomInteger(operations.length, 0);
    return operations[i];
  }

  generateNewQuestion () {
    // Randomly generate a new expression and update state.
    let number_of_operations = 2; // TODO: value to change with user settings
    let question = [];
    let answer = this.generateRandomInteger(41, -20).toString();
    question.push(answer);

    // Choose a number in the question array and replace it with an expression with that number as the result.
    for (let i = 0; i < number_of_operations; i++) {
      let sub_answer = NaN;
      let sub_answer_index = 0;
      while (isNaN(sub_answer)) {
        sub_answer_index = this.generateRandomInteger(question.length, 0);
        sub_answer = parseInt(question[sub_answer_index], 10);
      }

      let next_operation = this.generateRandomOperation();
      let first_number = 0;
      let second_number = this.generateRandomInteger(10, 1);
      switch (next_operation) {
        case "+":
          second_number = this.generateRandomInteger(21, 0);
          first_number = sub_answer - second_number;
          break;
        case "-":
          second_number = this.generateRandomInteger(21, 0);
          first_number = sub_answer + second_number;
          break;
        case "*":
          while (sub_answer % second_number !== 0) {
            second_number = this.generateRandomInteger(10, 1);
          }
          first_number = sub_answer / second_number;
          break;
        case "/":
          first_number = sub_answer * second_number;
          break;
        // case "^":
        //   second_number = this.generateRandomInteger(5, 1);
        //   first_number = Math.pow(sub_answer, 1 / second_number);
        //   break;
      }

      // Replace answer in question array with new values
      let first_number_string = first_number.toString();
      let second_number_string = second_number.toString();
      switch (this.state.notation) {
        case "POSTFIX":
          question.splice(sub_answer_index, 1, first_number_string, second_number_string, next_operation);
          break;
        case "PREFIX":
          question.splice(sub_answer_index, 1, next_operation, first_number_string, second_number_string);
          break;
        case "INFIX":
        default:
          // TODO: also add parentheses if required
          question.splice(sub_answer_index, 1, first_number_string, next_operation, second_number_string);
      }
    }

    this.setState({
      question: question,
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
