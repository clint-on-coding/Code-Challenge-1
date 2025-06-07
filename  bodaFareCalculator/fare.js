function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const fare = baseFare + (distanceInKm * chargePerKm);

  console.log(`Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${distanceInKm * chargePerKm}
Total: KES ${fare}

Panda Pikipiki!`);
}

const distance = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
calculateBodaFare(distance);

