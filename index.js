const orders = [
  {
    userId: 1,
    items: [
      {
        itemId: 1,
        quantity: 2,
        price: 10000
      },
      {
        itemId: 2,
        quantity: 3,
        price: 5000
      }
    ],
    timestamp: 1615542400000 // 2021-12-01T00:00:00.000Z
  },
  {
    userId: 1,
    items: [
      {
        itemId: 3,
        quantity: 1,
        price: 15000
      }
    ],
    timestamp: 1615542400000 // 2021-12-01T00:00:00.000Z
  },
  {
    userId: 2,
    items: [
      {
        itemId: 1,
        quantity: 5,
        price: 10000
      }
    ],
    timestamp: 1615542400000 // 2021-12-01T00:00:00.000Z
  }
];

function calculateLoyaltyPoints(orders) {
  // Inisialisasi variabel yang akan digunakan untuk menyimpan hasil perhitungan
  let totalAmountTransactions = 0;
  let totalPoints = 0;
  let totalItems = 0;

  // Looping setiap order dalam input orders
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    // Inisialisasi variabel yang akan digunakan untuk menyimpan total harga dan total jumlah barang dalam setiap order
    let orderTotalAmount = 0;
    let orderTotalItems = 0;

    // Looping setiap item dalam order
    for (let j = 0; j < order.items.length; j++) {
      const item = order.items[j];
      // Menambahkan total harga dan total jumlah barang dalam setiap order
      orderTotalAmount += item.quantity * item.price;
      orderTotalItems += item.quantity;
    }

    // Menambahkan total harga dan total jumlah barang dari setiap order ke variabel yang disimpan untuk menyimpan hasil perhitungan
    totalAmountTransactions += orderTotalAmount;
    totalItems += orderTotalItems;
  }

  // Menghitung total poin berdasarkan data yang diberikan
  if (totalAmountTransactions < 1000000) {
    totalPoints = totalAmountTransactions / 10000;
  } else if (totalAmountTransactions < 10000000) {
    totalPoints = totalAmountTransactions / 10000 * 1.05;
  } else if (totalAmountTransactions < 20000000) {
    totalPoints = totalAmountTransactions / 10000 * 1.1;
  } else if (totalAmountTransactions < 30000000) {
    totalPoints = totalAmountTransactions / 10000 * 1.2;
  } else if (totalAmountTransactions < 40000000) {
    totalPoints = totalAmountTransactions / 10000 * 1.3;
  } else {
    totalPoints = totalAmountTransactions / 10000 * 1.4;
  }

  // hasil perhitungan
  console.log({
    totalAmountTransaction: totalAmountTransactions,
    totalPoints: totalPoints,
    totalItems: totalItems
  });
}

// Untuk Menjalankan fungsi calculateLoyaltyPoints dengan input orders
calculateLoyaltyPoints(orders);
