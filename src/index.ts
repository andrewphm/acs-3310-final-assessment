import SF from '@gramsay7/string-lib';
import D from '@gramsay7/date-lib';
import jsonData from './data.json';

interface IData {
  id: number;
  first_name: string;
  last_name: string;
  purchased: string;
  lastpayment: string;
  phone: string;
  make: string;
  model: string;
  city: string;
}

// Challenge  0
const data: IData[] = jsonData;

// Challenge 1
data.forEach((item) => {
  console.log(
    `${SF.capitalizeFirstLetter(item.first_name)} ${SF.capitalizeFirstLetter(item.last_name)}`
  );
});

// Challenge 2
data.forEach((item) => {
  const purchasedDate = new D(item.purchased);

  console.log(`${purchasedDate.month} ${purchasedDate.date}, ${purchasedDate.year}`);
});

// Challenge 3
data.forEach((item) => {
  const payment = new D(item.lastpayment);

  console.log(payment.when());
});

// Challenge 4

export default function formatPhoneNumber(phoneNumber: number | string): string | null {
  const cleaned = String(phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
}

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
