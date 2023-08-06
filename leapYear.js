function leapYear(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
const isYearLeapYear = leapYear(2024);
console.log(isYearLeapYear);
