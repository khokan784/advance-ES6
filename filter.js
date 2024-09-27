const players = [55,67,72,45,54,82,66,60,71];
// const selected = players.filter(p => p >60)
const selected = players.filter(p => p % 2 == 1)
console.log(selected)


const friends = ['rafi', 'mikel', 'subuschandra', 'sabi']
const oddFriends = friends.filter(f => f.length > 4)
console.log(oddFriends)