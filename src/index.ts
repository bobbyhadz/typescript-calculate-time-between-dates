export {};

// EXAMPLE 1 - Calculate the time between 2 Dates in TypeScript

const date1 = new Date('2024-09-24');
const date2 = new Date('2024-09-25');

const msBetweenDates = date2.getTime() - date1.getTime();

console.log(msBetweenDates); // 👉️ 86400000

// ---------------------------------------------------

// // EXAMPLE 2 - Format the result into hours, minutes and seconds

// function padTo2Digits(num: number) {
//   return num.toString().padStart(2, '0');
// }

// function convertMsToTime(milliseconds: number) {
//   let seconds = Math.floor(milliseconds / 1000);
//   let minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);

//   seconds = seconds % 60;
//   minutes = minutes % 60;

//   // 👇️ If you want to roll hours over, e.g. 00 to 24
//   // 👇️ uncomment the line below
//   // uncommenting next line gets you `00:00:00` instead of `24:00:00`
//   // or `12:15:31` instead of `36:15:31`, etc.
//   // 👇️ (roll hours over)
//   // hours = hours % 24;

//   return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
//     seconds,
//   )}`;
// }

// console.log(convertMsToTime(54000000)); // 👉️ 15:00:00 (15 hours)
// console.log(convertMsToTime(86400000)); // 👉️ 24:00:00 (24 hours)
// console.log(convertMsToTime(36900000)); // 👉️ 10:15:00 (10 hours, 15 minutes)
// console.log(convertMsToTime(15305000)); // 👉️ 04:15:05 (4 hours, 15 minutes, 5 seconds)

// ---------------------------------------------------

// // EXAMPLE 3 - Get the difference between 2 Dates in Days using TypeScript

// function getDayDiff(startDate: Date, endDate: Date): number {
//   const msInDay = 24 * 60 * 60 * 1000;

//   return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
// }

// // 👇️ 10
// console.log(getDayDiff(new Date('2024-03-17'), new Date('2024-03-27')));

// // 👇️ 30
// console.log(getDayDiff(new Date('2024-04-17'), new Date('2024-05-17')));

// ---------------------------------------------------

// // EXAMPLE 4 - Calculate the number of Days between 2 Dates using getTime()

// function getDayDiff(startDate: Date, endDate: Date): number {
//   const msInDay = 24 * 60 * 60 * 1000;

//   // 👇️ explicitly calling getTime()
//   return Math.round(
//     Math.abs(endDate.getTime() - startDate.getTime()) / msInDay,
//   );
// }

// // 👇️ 10
// console.log(getDayDiff(new Date('2022-03-17'), new Date('2022-03-27')));

// // 👇️ 30
// console.log(getDayDiff(new Date('2022-04-17'), new Date('2022-05-17')));
