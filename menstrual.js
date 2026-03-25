const prompt = require("prompt-sync")();


function getDaysInMonth(m, y) {
    if (m === 2) return (y % 4 === 0) ? 29 : 28;
    if (m === 4 || m === 6 || m === 9 || m === 11) return 30;
    return 31;
}


function addDays(d, m, y, n) {
    d += n;
    while (d > getDaysInMonth(m, y)) {
        d -= getDaysInMonth(m, y);
        m++;
        if (m > 12) { m = 1; y++; }
    }
    return { day: d, month: m, year: y };
}


function subDays(d, m, y, n) { 
    d -= n;   
    while (d <= 0) {                  
        m--;                            
        if (m < 1) { m = 12; y--; }
        d += getDaysInMonth(m, y);
    }
    return { day: d, month: m, year: y };
}


function calculateNextPeriod(startDate, cycleLength) { 
    return addDays(startDate.day, startDate.month, startDate.year, cycleLength);
}

function calculatePeriodEnd(startDate, duration) {
    return addDays(startDate.day, startDate.month, startDate.year, duration);
}

function calculateOvulationDate(nextPeriodDate) {
    return subDays(nextPeriodDate.day, nextPeriodDate.month, nextPeriodDate.year, 14);
}


function predictCycle(startDate, cycleLength, periodDuration) {

    let next = calculateNextPeriod(startDate, cycleLength);
    let end = calculatePeriodEnd(next, periodDuration);
    let ovu = calculateOvulationDate(next);
    let fertStart = subDays(ovu.day, ovu.month, ovu.year, 5);

    console.log("Next Period:", next.day + "/" + next.month + "/" + next.year);
    console.log("Period End:", end.day + "/" + end.month + "/" + end.year);
    console.log("Ovulation:", ovu.day + "/" + ovu.month + "/" + ovu.year);
    console.log("Fertility Window:", 
        fertStart.day + "/" + fertStart.month + "/" + fertStart.year,
        "to",
        ovu.day + "/" + ovu.month + "/" + ovu.year
    );
}

let day = Number(prompt("Day: "));
let month = Number(prompt("Month: "));
let year = Number(prompt("Year: "));
let cycle = Number(prompt("Cycle Length: "));
let duration = Number(prompt("Period Duration: "));

predictCycle({ day: day, month: month, year: year }, cycle, duration);