var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

var total = orders.reduce((sum, order) => sum + order.amount, 0)

console.log('Total', total);
