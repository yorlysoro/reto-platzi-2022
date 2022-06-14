const products = [
    { title: 'Pizza', price: 12, id: '🍕' },
    { title: 'Hamburguesa', price: 10, id: '🍔' },
    { title: 'Hot dog', price: 8, id: '🌭' },   
];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(50));
const product = products.find(item => item.id === "🍔");
if(product){
    myProducts.push(product);
    products.splice(products.indexOf(product), 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(50));

// Update
const productsV2 = [
    { title: 'Pizza', price: 12, id: '🍕' },
    { title: 'Hamburguesa', price: 10, id: '🍔' },
    { title: 'Hot dog', price: 8, id: '🌭' },   
];
const update = {
    id: '🌭',
    changes: {
        price: 200,
        description: 'Hot dog updated'
    }
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log("productsV2", productsV2);