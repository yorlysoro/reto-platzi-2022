const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const newArray = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 6) {
    newArray.push(words[i]);
  }
}
console.log(newArray);
const newArray2 = words.filter(word => word.length > 6);
console.log(newArray2);
console.log(words);

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

const rta = orders.filter(item =>  item.delivered)
console.log("rta:",rta);

const rta2 = orders.filter(item => item.delivered && item.total >= 100);
console.log("rta2:",rta2);

const search = (query) => {
    return orders.filter(item => item.customerName.includes(query));
}
console.log(search("Nico"));
console.log(search("Santiago"));
console.log(search("l"));
