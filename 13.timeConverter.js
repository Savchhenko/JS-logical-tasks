// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

function timeConverted (number) {
  let hours = '00', 
      minutes = '00', 
      seconds = '00';
  if (number >= 3600) {
    hours = Math.floor(number / 3600);
    number = number % (hours * 3600);
    hours > 9 ? hours = String(hours) : hours = '0' + hours;
  }
  
  if (number >= 60) {
    minutes = Math.floor(number / 60);
    number = number % (minutes * 60);
    minutes > 9 ? minutes = String(minutes) : minutes = '0' + minutes;
  }
  
  if (number < 10 && number >= 0) {
    seconds = '0' + number;
  } else {
    seconds = number;
  }
  
  return [hours, minutes, seconds].join(':'); 
};
