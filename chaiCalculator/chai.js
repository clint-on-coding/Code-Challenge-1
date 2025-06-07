function calculateChaiIngredients(numberOfCups) {
  const water = 200 * numberOfCups;
  const milk = 50 * numberOfCups;
  const teaLeaves = numberOfCups;
  const sugar = 2 * numberOfCups;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water} ml
Milk: ${milk} ml
Tea Leaves (Majani): ${teaLeaves} tablespoons
Sugar (Sukari): ${sugar} teaspoons

Enjoy your Chai Bora!`);
}

const cups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
calculateChaiIngredients(cups);
