const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
months.sort();
console.log(months);
const numbers = [12, 3, 5, 7, 9, 11, 1, 2, 4, 6, 8, 10];
numbers.sort((a,b) => a - b);
console.log(numbers);
const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
words.sort();
console.log(words);
// sort in array with special characters
const words2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
words2.sort((a,b) => a.localeCompare(b));
console.log(words2);
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

orders.sort((a,b) => b.total - a.total);
console.log(orders);
