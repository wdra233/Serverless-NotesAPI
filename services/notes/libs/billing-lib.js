export function calculateCost(storage) {
    const rate = storage <= 10
      ? 4
      : storage <= 100
        ? 2
        : 1;
    /** 100 means the amount in pennies required by Stripe */
    return rate * storage * 100;
  }