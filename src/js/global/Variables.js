import MathHelper from "../utilities/MathHelper";

// Global variables with initial values
global.notation = "INFIX";
global.number_of_operations = 2;

global.answer = MathHelper.generateRandomInteger(41, -20).toString();
let { question, hint } = MathHelper.generateRandomExpression(global.answer, global.number_of_operations, global.notation);
global.question = question;
global.hint = hint;
