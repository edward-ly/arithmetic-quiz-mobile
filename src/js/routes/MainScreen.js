import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import AnswerForm from "../components/answer/AnswerForm";
import FlexSpace from "../components/layout/FlexSpace";
import FlexView from "../components/layout/FlexView";
import HintButton from "../components/answer/HintButton";
import NextQuestionButton from "../components/question/NextQuestionButton";
import QuestionDisplay from "../components/question/QuestionDisplay";
import ScreenWrapper from "../components/navigation/ScreenWrapper";
import StatusMessage from "../components/answer/StatusMessage";

import MathHelper from "../utilities/MathHelper";
import Platform from "../utilities/Platform";

export default class MainScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: <Icon name="home" size={24} />,
  };

  constructor (props) {
    super(props);
    this.state = {
      submitted_answer: "",
      correct_answer: global.answer,
      answer_is_submitted: false,
      question: global.question,
      hint: global.hint,
      show_hint: false,
      orientation: Platform.isPortrait() ? "PORTRAIT" : "LANDSCAPE",
      device_type: Platform.isTablet() ? "TABLET" : "PHONE",
    };

    this.generateNewQuestion = this.generateNewQuestion.bind(this);
    this.showHint = this.showHint.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    Dimensions.addEventListener("change", this._orientationDidChange.bind(this));
  }

  _orientationDidChange () {
    this.setState({
      orientation: Platform.isPortrait() ? "PORTRAIT" : "LANDSCAPE",
    });
  }

  generateNewQuestion () {
    // Randomly generate a new expression and update state.
    let { number_of_operations, notation } = global;
    global.answer = MathHelper.generateRandomInteger(41, -20).toString();
    let { question, hint } = MathHelper.generateRandomExpression(global.answer, number_of_operations, notation);
    global.question = question;
    global.hint = hint;

    // Clear answer field.
    this._answerField.setNativeProps({ text: "" });

    this.setState({
      question: global.question,
      hint: global.hint,
      correct_answer: global.answer,
      submitted_answer: "",
      show_hint: false,
      answer_is_submitted: false,
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
      });
    }
  }

  render () {
    return (
      <ScreenWrapper onPress={() => this.props.navigation.navigate("DrawerToggle")}>
        {/* Question Area */}
        <FlexView flex={2}>
          <QuestionDisplay question={this.state.question}
                           showHint={this.state.show_hint}
                           hint={this.state.hint} />
          <StatusMessage isSubmitted={this.state.answer_is_submitted}
                         answerIsCorrect={this.checkAnswer()}
                         answer={this.state.correct_answer} />
        </FlexView>
        {/* Answer Area */}
        <FlexView flex={3}>
          <AnswerForm inputRef={component => { this._answerField = component; }}
                      onChangeText={text => this.updateAnswer(text)}
                      onSubmit={this.submitAnswer} />
          <HintButton onPress={this.showHint} />
          <NextQuestionButton onPress={this.generateNewQuestion} />
        </FlexView>
        {/* Space for Keyboard */}
        { this.state.orientation === "PORTRAIT" ? <FlexSpace flex={3} /> : null }
      </ScreenWrapper>
    );
  }
}
