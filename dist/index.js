"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_lib_1 = __importDefault(require("@gramsay7/string-lib"));
const date_lib_1 = __importDefault(require("@gramsay7/date-lib"));
const data_json_1 = __importDefault(require("./data.json"));
// Challenge  0
const data = data_json_1.default;
// Challenge 1
data.forEach((item) => {
    console.log(`${string_lib_1.default.capitalizeFirstLetter(item.first_name)} ${string_lib_1.default.capitalizeFirstLetter(item.last_name)}`);
});
// Challenge 2
data.forEach((item) => {
    const purchasedDate = new date_lib_1.default(item.purchased);
    console.log(`${purchasedDate.month} ${purchasedDate.date}, ${purchasedDate.year}`);
});
// Challenge 3
data.forEach((item) => {
    const payment = new date_lib_1.default(item.lastpayment);
    console.log(payment.when());
});
// Challenge 4
function formatPhoneNumber(phoneNumber) {
    const cleaned = String(phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return null;
}
exports.default = formatPhoneNumber;
data.forEach((item) => {
    console.log(formatPhoneNumber(item.phone));
});
// Challenge 5
// Find tests in ../tests/index.test.ts
// run `npm test` to see the results
// Challenge 6
// Linted with AirBnB style guide
// Challenge 7
// Find compiled code in dist/index.js
