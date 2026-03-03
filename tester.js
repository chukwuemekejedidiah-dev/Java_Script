const maxNumber = 8; 
for (let i = 1; i <= 12; i++) { 
    let rows = "";
    for (let j = 1; j <= maxNumber; j++) { 
        rows += `${j} x ${i} = ${i*j}`.padEnd(12, ' '); // pad for column spacing
    }
    console.log(row);
}