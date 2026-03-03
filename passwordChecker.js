const MIN_LENGTH = 14;
const MAX_ATTEMPTS = 5;

const breachedPasswords = [
  "Password123!",
  "1234567890",
  "Qwerty123!",
  "Letmein123!"
];

let attempts = 0;

function isStrongPassword(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  return (
    password.length >= MIN_LENGTH &&
    hasUpper &&
    hasLower &&
    hasNumber &&
    hasSpecial
  );
}

function isBreached(password) {
  return breachedPasswords.includes(password);
}

function checkPassword(password) {
  if (attempts >= MAX_ATTEMPTS) {
    return " Too many attempts. Login blocked.";
  }

  attempts++;

  if (isBreached(password)) {
    return " Password found in breach database.";
  }

  if (!isStrongPassword(password)) {
    return " Password does not meet complexity requirements.";
  }

  return " Password accepted.";
}

