const orders = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1000,
    customerName: `Customer ${i + 1}`,
    status: ["Pending", "Completed", "Cancelled"][i % 3],
    totalPrice: (Math.random() * 1000000).toFixed(0),
    orderDate: new Date(2024, 0, i + 1).toLocaleDateString(),
  }));
  
  export default orders;
  