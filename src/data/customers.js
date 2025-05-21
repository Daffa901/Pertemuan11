const customers = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@email.com`,
    phone: `08123${i.toString().padStart(5, "0")}`,
    loyalty: ["Bronze", "Silver", "Gold"][i % 3],
  }));
  
  export default customers;
  