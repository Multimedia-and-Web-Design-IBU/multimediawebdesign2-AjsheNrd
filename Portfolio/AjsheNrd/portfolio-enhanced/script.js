/* SCROLL */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView();
}

/* ABOUT */
function toggleMore() {
  document.getElementById("moreText").classList.toggle("hidden");
}

/* SKILLS CLICK */
function toggleSkill(element, percent) {
  let fill = element.querySelector(".skill-fill");
  let info = element.querySelector(".skill-info");

  if (fill.style.width === percent) {
    fill.style.width = "0";
    info.style.display = "none";
  } else {
    fill.style.width = percent;
    info.style.display = "block";
  }
}
function toggleVideo() {
  const video = document.getElementById("videoContainer");
  video.classList.toggle("hidden");
}

/* FADE IN */
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});

/* TYPING EFFECT */
const text = "My Portfolio";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
function toggleMap() {
  const map = document.getElementById("mapContainer");
  map.classList.toggle("hidden");
}

typing();

/* NAV ACTIVE */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop;
    if (scrollY >= top - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
    window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = (scrollTop / height) * 100;

  document.getElementById("progress-bar").style.width = progress + "%";

     const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
});
    });
});