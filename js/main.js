// Open Mega Menu on click
const menu = document.getElementById("menu");
menu.addEventListener("click", function () {
  const megaMenu = document.getElementById("mega-menu");
  megaMenu.classList.toggle("active");
});

// Fill Progress Bar on scroll
window.addEventListener("scroll", function () {
  const skillsSection = document.getElementById("our-skills");
  const spans = document.querySelectorAll(".progress span");
  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 2;

  if (sectionPosition < screenPosition) {
    spans.forEach((span) => {
      span.style.opacity = 1;
      span.style.width = ` ${span.dataset.width}%`;
    });
  } else {
    spans.forEach((span) => {
      span.style.opacity = 0;
      span.style.width = "0";
    });
  }
});

// CountDown Timer
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

// Increase Number on scrolling
let statsSection = document.getElementById("stats");
let nums = document.querySelectorAll(".number");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Select All videos
let videos = document.querySelectorAll(".videos-list li");

// Random Video on click
let random = document.getElementById("random");
random.addEventListener("click", function () {
  let randomVideo = videos[Math.floor(Math.random() * videos.length)];
  randomVideo.click();
});

// Play Video on click
videos.forEach((video) => {
  video.addEventListener("click", function () {
    let vid = document.getElementById("vid");
    let info = document.getElementById("info");
    // Set Video Source From Data Attribute
    vid.setAttribute("src", video.dataset.src);
    // Set Video Info From Data Attribute
    info.innerHTML = video.dataset.text;
    // Add Active Class to Selected Video
    this.className += " active";
    // Remove Active Class From Other Videos
    if (this.classList.contains("active")) {
      videos.forEach((video) => {
        if (video != this) {
          video.classList.remove("active");
        }
      });
    }
  });
});
