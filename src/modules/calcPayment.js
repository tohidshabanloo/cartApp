const totalPayment = data.reduce(
    (total, item) =>
      total + (+item.price - (+item.price * item.discount) / 100),
    0
  );

  
