import React, { Component } from "react";
import { Dimensions } from "react-native";

import AnswerForm from "./components/answer/AnswerForm";
import FlexSpace from "./components/layout/FlexSpace";
import FlexView from "./components/layout/FlexView";
import HintButton from "./components/answer/HintButton";
import NextQuestionButton from "./components/question/NextQuestionButton";
import QuestionDisplay from "./components/question/QuestionDisplay";
import SettingsView from "./components/settings/SettingsView";
import StatusMessage from "./components/answer/StatusMessage";

import ViewStyles from "./styles/ViewStyles";

import MathHelper from "./utilities/MathHelper";
import Platform from "./utilities/Platform";

export default class Application extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submitted_answer: "",
      correct_answer: "",
      answer_is_submitted: false,
      question: [],
      hint: [],
      show_hint: false,
      notation: "INFIX",
      number_of_operations: 2,
      // times_submitted: 0,
      orientation: Platform.isPortrait() ? "PORTRAIT" : "LANDSCAPE",
      device_type: Platform.isTablet() ? "TABLET" : "PHONE",
    };
    
    this.generateNewQuestion = this.generateNewQuestion.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.showHint = this.showHint.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    Dimensions.addEventListener("change", this._orientationDidChange.bind(this));
  }
  
  componentDidMount () {
    this.generateNewQuestion();
  }

  _orientationDidChange () {
    this.setState({
      orientation: Platform.isPortrait() ? "PORTRAIT" : "LANDSCAPE",
    });
  }

  saveSettings (new_settings) {
    this.setState({
      number_of_operations: new_settings.number_of_operations,
      notation: new_settings.notation,
    });
  }

  generateNewQuestion () {
    // Randomly generate a new expression and update state.
    let { number_of_operations, notation } = this.state;
    let answer = MathHelper.generateRandomInteger(41, -20).toString();
    let { question, hint } = MathHelper.generateRandomExpression(answer, number_of_operations, notation);

    // Clear answer field.
    this._answerField.setNativeProps({ text: "" });

    this.setState({
      question: question,
      hint: hint,
      correct_answer: answer,
      submitted_answer: "",
      show_hint: false,
      answer_is_submitted: false,
      // times_submitted: 0,
    });
  }
  
  showHint () {
    this.setState({
      show_hint: !this.state.show_hint,
    });
  }
  
  updateAnswer (text) {
    this.setState({
      submitted_answer: text,
      answer_is_submitted: false,
    });
  }
  
  checkAnswer () {
    let suggested_answer = parseInt(this.state.submitted_answer);
    let correct_answer = parseInt(this.state.correct_answer);
    return suggested_answer === correct_answer;
  }
  
  submitAnswer () {
    let { submitted_answer } = this.state;
    if (submitted_answer && submitted_answer.length) {
      this.setState({
        answer_is_submitted: true,
        // times_submitted: this.state.times_submitted + 1,
      });
    }
  }
  
  render () {
    return (
      <FlexView styles={[ViewStyles.mainPageContainer]}>
        {/* Question Area */}
        <FlexView>
          <SettingsView saveSettings={this.saveSettings}
                        currentDifficulty={this.state.number_of_operations}
                        currentNotation={this.state.notation} />
          <QuestionDisplay question={this.state.question}
                           showHint={this.state.show_hint}
                           hint={this.state.hint} />
          <StatusMessage isSubmitted={this.state.answer_is_submitted}
                         answerIsCorrect={this.checkAnswer()}
                         answer={this.state.correct_answer} />
        </FlexView>
        {/* Answer Area */}
        <FlexView>
          <AnswerForm inputRef={component => this._answerField = component}
                      onChangeText={text => this.updateAnswer(text)}
                      onSubmit={this.submitAnswer} />
          <HintButton onPress={this.showHint} />
          <NextQuestionButton onPress={this.generateNewQuestion} />
        </FlexView>
        {/* Space for Keyboard */}
        { this.state.orientation === "PORTRAIT" ?
          <FlexSpace /> :
          null
        }
      </FlexView>
    );
  }
}
