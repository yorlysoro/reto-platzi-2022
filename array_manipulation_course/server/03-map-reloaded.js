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
console.log("Original:",orders);
const rta = orders.map(item =>  item.total)
console.log("rta:",rta);
const rta2 = orders.map(item =>  {
    //Modifica un objeto en memoria no hacer
    // item.tax = .19;
    // return item;
    //inmutable
    return {...item, tax: .19};
})
console.log("rta2:",rta2);
console.log("Original:",orders);