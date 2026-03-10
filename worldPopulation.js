let currentPopulation = 8.3e9; // 8.3 billion
let growthRate = 0.84 / 100; // 0.84% as decimal

console.log("Year\tPopulation\tIncrease");

let doublePopulation = currentPopulation * 2;
let yearPopulationDouble = null;

for (let year = 1; year <= 75; year++) {
    // calculate next year's population
    let newPopulation = currentPopulation * (1 + growthRate);

    // numeric increase
    let increase = newPopulation - currentPopulation;

    // print table row
    console.log(
        year + "\t" +
        newPopulation.toFixed(0) + "\t" +
        increase.toFixed(0)
    );

    // check if doubled
    if (!yearPopulationDouble && newPopulation >= doublePopulation) {
        yearPopulationDouble = year;
    }

    // update population for next iteration
    currentPopulation = newPopulation;
}

if (yearPopulationDouble !== null) {
    console.log("\nPopulation will double by year " + yearPopulationDouble);
} else {
    console.log("\nPopulation will not double in 75 years with this rate.");
}