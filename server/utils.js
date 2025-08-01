const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const passwordRegex = /^(?!.*\s)(?=(?:.*[A-Z]){2,})(?=.*\d).{8,}$/;

module.exports = { emailRegex, passwordRegex }