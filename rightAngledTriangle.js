let bottomLength = 5;

for (let i = 1; i <= bottomLength; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}