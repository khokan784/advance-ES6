const data = [{id: 1, name: 'rofic', address: 'rangamati'}]
// console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 5, name: 'lenovo', price: 65000},
        {id: 8, name: 'macbook', price: 147000}
    ]
}
console.log(products.data[1].price);

const user1 = {
    id: 4002,
    name: 'khokan',
    address: {
        street: {
            first: 'lalkan bazar',
            second: 'andarkills',
            third: 'aggrabad'
        }
    }
}


const user2 = {
    id: 4002,
    name: 'khokan',
    address: {
        city: 'chittagong',
        country: 'bangladesh'
    }

}
console.log(user1.address.street?.second);
console.log(user2.address.street?.second);