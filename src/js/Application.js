import React, { Component } from "react";
import { ToastAndroid, View } from "react-native";

import AnswerForm from "./components/answer/AnswerForm";
import FlexSpace from "./components/layout/FlexSpace";
import HintButton from "./components/answer/HintButton";
import NextQuestionButton from "./components/question/NextQuestionButton";
import QuestionDisplay from "./components/question/QuestionDisplay";
import SettingsButton from "./components/settings/SettingsButton";
import SettingsModal from "./components/settings/SettingsModal";
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
      show_hint: false,
      notation: "POSTFIX",
      number_of_operations: 2,
      times_submitted: 0,
      showSettingsModal: false,
    };
    
    this.generateNewQuestion = this.generateNewQuestion.bind(this);
    this.openSettingsModal = this.openSettingsModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
    this.saveDifficultySetting = this.saveDifficultySetting.bind(this);
    this.saveNotationSetting = this.saveNotationSetting.bind(this);
    this.showHint = this.showHint.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }
  
  componentDidMount () {
    this.generateNewQuestion();
  }

  openSettingsModal () {
    this.setState({
      showSettingsModal: true,
    });
  }

  closeSettingsModal () {
    ToastAndroid.show("Any changes will be applied on the next question.", ToastAndroid.SHORT);
    this.setState({
      showSettingsModal: false,
    });
  }
  
  saveDifficultySetting (value) {
    this.setState({
      number_of_operations: value,
    });
  }

  saveNotationSetting (value, index) {
    this.setState({
      notation: value,
    });
  }

  generateNewQuestion () {
    // Randomly generate a new expression and update state.
    let { number_of_operations, notation } = this.state;
    let answer = math.generateRandomInteger(41, -20).toString();
    let { question, hint } = math.generateRandomExpression(answer, number_of_operations, notation);

    this.setState({
      question: question,
      hint: hint,
      correct_answer: answer,
      show_hint: false,
      answer_is_submitted: false,
      times_submitted: 0,
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
        times_submitted: this.state.times_submitted + 1,
      });
    }
  }
  
  render () {
    return (
      <View style={ViewStyles.mainPageContainer}>
        {/* Question Area */}
        <View style={FlexStyles.flex}>
          <SettingsButton onPress={this.openSettingsModal} />
          <QuestionDisplay question={this.state.question}
                           showHint={this.state.show_hint}
                           hint={this.state.hint} />
          <StatusMessage isSubmitted={this.state.answer_is_submitted}
                         answerIsCorrect={this.checkAnswer()}
                         answer={this.state.correct_answer} />
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
        {/* Modals */}
        <SettingsModal showModal={this.state.showSettingsModal}
                       closeModal={this.closeSettingsModal}
                       saveDifficultySetting={this.saveDifficultySetting}
                       saveNotationSetting={this.saveNotationSetting}
                       currentDifficulty={this.state.number_of_operations}
                       currentNotation={this.state.notation} />
      </View>
    );
  }
}
