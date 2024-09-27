const products = [
    {id:1, name: 'levono', price: 74000},
    {id:2, name: 'dell', price: 64000},
    {id:3, name: 'hp', price: 44000},
    {id:4, name: 'mac', price: 150000}
]

// for map
const names = products.map(product => product.name);
const price = products.map(p => p.price);
console.log(names);
console.log(price);

// for each
products.forEach(p => console.log(p.id))

// filter
const filter = products.filter(p => p.price > 50000)
console.log(filter);


// reduce
const total = products.reduce((acum, current) => acum + current.price, 0)
console.log(total) 