function estimateTransactionFee(amountToSend) {
  const percentageFee = 0.015 * amountToSend;
  const fee = Math.min(Math.max(percentageFee, 10), 70);
  const total = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${fee}
Total amount to be debited: KES ${total}

Send Money Securely!`);
}

const amount = Number(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amount);
