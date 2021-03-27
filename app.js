const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

const updateCountDown = () => {
  const currentTime = new Date();
  const difference = newYearTime - currentTime; // in milliseconds
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  console.log({
    days, hours, minutes, seconds,
  });
};

setInterval(updateCountDown, 1000);
