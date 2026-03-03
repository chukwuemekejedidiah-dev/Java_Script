
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}



async function getUserInfo() {
  const name = await ask("Enter your name: ");
  const dob = await ask("Enter your date of birth (YYYY-MM-DD): ");
  const age = calculateAge(dob);

  console.log(`\nName: ${name}`);
  console.log(`Age: ${age}`);

  rl.close();
}



function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}


getUserInfo();