
const maxNumber = 8;


for (let row = 1; row <= maxNumber ; row++) {
    let line = ""; 

    for (let table = 1; table <= maxNumber ; table++) {
      
        line += table + " x " + row + " = " + (table * row);

      
        line += "    "; 
    }

    console.log(line);
}