const OPERATIONS = ["+", "-", "*", "/"];

module.exports = {
  generateRandomInteger (range, start) {
    // Returns a random integer from start to (start + range - 1).
    return Math.floor(Math.random() * range) + start;
  },

  generateRandomOperation () {
    // Returns one of the operations from the list.
    let i = this.generateRandomInteger(OPERATIONS.length, 0);
    return OPERATIONS[i];
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

      let current_operation = this.generateRandomOperation();
      let first_number = 0;
      let second_number = this.generateRandomInteger(10, 1);
      switch (current_operation) {
        default:
          current_operation = "+";
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
          question.splice(sub_answer_index, 1, first_number_string, second_number_string, current_operation);
          hint.splice(sub_answer_index, 1, i, i, i);
          break;
        case "PREFIX":
          question.splice(sub_answer_index, 1, current_operation, first_number_string, second_number_string);
          hint.splice(sub_answer_index, 1, i, i, i);
          break;
        case "INFIX":
        default:
          // Check if parentheses are required around current answer
          let parentheses_is_required = false;
          if (i < number_of_operations - 1) { // no parentheses around entire expression
            let j = sub_answer_index - 1;
            let previous_operation = question[j];

            if (j >= 0 && OPERATIONS.includes(previous_operation)) { // index and operation is valid
              if (current_operation === "/" && previous_operation === "/") {
                // Division is non-associative
                // Ex. (1 / 2) / 4 != 1 / (2 / 4)
                parentheses_is_required = true;
              } else if (current_operation === "-" && previous_operation !== "+") {
                // Subraction is non-associative
                // Ex. (1 - 2) - 4 != 1 - (2 - 4)
                // Also clarifies precedence of "-" over "*" or "/" to the left
                parentheses_is_required = true;
              } else if (current_operation === "*" && previous_operation === "/") {
                // Clarify precedence of "*" over "/" to the left
                parentheses_is_required = true;
              } else if (current_operation === "+" && previous_operation !== "+") {
                // Clarify precedence of "+" over other operations to the left
                parentheses_is_required = true;
              }
            }

            let k = sub_answer_index + 1;
            let next_operation = question[k];

            if (current_operation === "+" || current_operation === "-") {
              if (next_operation === "*" || next_operation === "/") {
                // Clarify precedence of "+" or "-" over "*" or "/" to the right
                parentheses_is_required = true;
              }
            }
          }

          if (parentheses_is_required) {
            question.splice(sub_answer_index, 1, "(", first_number_string, current_operation, second_number_string, ")");
            hint.splice(sub_answer_index, 1, i, i, i, i, i);
          } else {
            question.splice(sub_answer_index, 1, first_number_string, current_operation, second_number_string);
            hint.splice(sub_answer_index, 1, i, i, i);
          }
      }
    }

    return { question, hint };
  },
};
