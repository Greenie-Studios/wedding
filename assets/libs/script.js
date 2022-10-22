const countDownDate = new Date("Nov 25, 2023 19:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {
  const now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days > h3").innerHTML = days;
  document.querySelector("#hours > h3").innerHTML = hours;
  document.querySelector("#minutes > h3").innerHTML = minutes;
  document.querySelector("#seconds > h3").innerHTML = seconds;

  document.querySelector("#days > h3").style.display = 'block';
  document.querySelector("#hours > h3").style.display = 'block';
  document.querySelector("#minutes > h3").style.display = 'block';
  document.querySelector("#seconds > h3").style.display = 'block';

  document.querySelector("#days > p").innerHTML = (days === 1) ? 'Dia' : 'Dias';
  document.querySelector("#hours > p").innerHTML = (hours === 1) ? 'Hora' : 'Horas';
  document.querySelector("#minutes > p").innerHTML = (minutes === 1) ? 'Minuto' : 'Minutos';
  document.querySelector("#seconds > p").innerHTML = (seconds === 1) ? 'Segundo' : 'Segundos';

  document.querySelector("#days > img").style.display = 'none';
  document.querySelector("#hours > img").style.display = 'none';
  document.querySelector("#minutes > img").style.display = 'none';
  document.querySelector("#seconds > img").style.display = 'none';

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);