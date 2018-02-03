export default math = {
  generateRandomInteger (range, start) {
    // Returns a random integer from start to (start + range - 1).
    return Math.floor(Math.random() * range) + start;
  },

  generateRandomOperation () {
    // Returns one of the operations from the list.
    const operations = ["+", "-", "*", "/"];
    let i = this.generateRandomInteger(operations.length, 0);
    return operations[i];
  },

  generateRandomExpression (answer_string, number_of_operations, notation) {
    let question = [];
    let hint = [];
    question.push(answer_string);
    hint.push(number_of_operations);

    // Choose a number in the array and replace it with three values whose expression results in that number.
    for (let i = number_of_operations - 1; i >= 0; i--) {
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

      // Replace answer in question array with new values.
      let first_number_string = first_number.toString();
      let second_number_string = second_number.toString();
      switch (notation) {
        case "POSTFIX":
          question.splice(sub_answer_index, 1, first_number_string, second_number_string, next_operation);
          break;
        case "PREFIX":
          question.splice(sub_answer_index, 1, next_operation, first_number_string, second_number_string);
          break;
        case "INFIX":
        default:
          // TODO: also add parentheses where required.
          question.splice(sub_answer_index, 1, first_number_string, next_operation, second_number_string);
      }
      hint.splice(sub_answer_index, 1, i, i, i);
    }

    return { question, hint };
  },
}
