// function clockMinuteAdder (time, minutesToAdd) {
//   const hours = time[0] + time[1]; // '12'
//   const minutes = time[3] + time[4]; // '05'

//   let totalMinutes = +minutes + minutesToAdd; // 5 + 1440 = 1445
//   let totalHours = +hours + Math.floor(totalMinutes/60); // 12 + 24 = 36

//   totalMinutes = totalMinutes % 60; // 5
//   totalHours = ((totalHours - 1) % 12) + 1; // ((36 - 1) % 12) + 1 => 35 % 12 + 1 => 11 + 1 = 12 

//   if(totalHours < 10) totalHours = '0' + totalHours; // 
//   if(totalMinutes < 10) totalMinutes = '0' + totalMinutes; // '05'

//   return `${totalHours}:${totalMinutes}` // '12:05'
// }
// Complejidad => O(1)

function clockMinuteAdder (time, minutesToAdd) {
  const [hours, minutes] = time.split(':');

  let totalMinutes = +minutes + minutesToAdd;
  let totalHours = +hours + Math.floor(totalMinutes/60);

  totalMinutes %= 60;
  totalHours = ((totalHours - 1) % 12) + 1;

  if(totalHours < 10) totalHours = '0' + totalHours;
  if(totalMinutes < 10) totalMinutes = '0' + totalMinutes;

  return `${totalHours}:${totalMinutes}`;
}
// Complejidad => O(1)

console.log(clockMinuteAdder('09:30', 20));
console.log(clockMinuteAdder('07:00', 5));
console.log(clockMinuteAdder('09:50', 20));
console.log(clockMinuteAdder('10:50', 120));

console.log(clockMinuteAdder('12:30', 120));
console.log(clockMinuteAdder('12:30', 120));
console.log(clockMinuteAdder('12:05', 183));
console.log(clockMinuteAdder('12:05', 1440));


module.exports = clockMinuteAdder
