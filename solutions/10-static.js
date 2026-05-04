export default class Time {
  // BEGIN
static fromString(stringTime) {
  const [firstNumber, secondNumber] = stringTime.split(':');
  return new Time(Number(firstNumber), Number(secondNumber));
}
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
