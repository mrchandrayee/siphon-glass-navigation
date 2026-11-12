const nav = document.querySelector(".glass-nav");
const items = [...document.querySelectorAll(".nav-item")];
const indicator = document.querySelector("#activeIndicator");
const stage = document.querySelector("#stage");
const title = document.querySelector("#pageTitle");
const eyebrow = document.querySelector("#eyebrow");
const description = document.querySelector("#pageDescription");
const themeToggle = document.querySelector("#themeToggle");

const pages = {
  home: {title:"Home", eyebrow:"01 / STUDIO HALDEN", description:"A little space for thoughtful things."},
  work: {title:"Work", eyebrow:"02 / SELECTED", description:"A collection of ideas made tangible."},
  notes: {title:"Notes", eyebrow:"03 / THOUGHTS", description:"Fragments, observations and small discoveries."},
  about: {title:"About", eyebrow:"04 / PEOPLE", description:"An independent creative studio."}
};

function moveIndicator(item) {
  const navRect = nav.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();
  const x = itemRect.left - navRect.left;
  indicator.style.width = `${itemRect.width}px`;
  indicator.style.transform = `translateX(${x - 6}px)`;
}

function selectPage(item) {
  items.forEach(link => {
    const selected = link === item;
    link.classList.toggle("active", selected);
    link.setAttribute("aria-current", selected ? "page" : "false");
  });
  const page = pages[item.dataset.page];
  title.textContent = page.title;
  eyebrow.textContent = page.eyebrow;
  description.textContent = page.description;
  moveIndicator(item);
}

items.forEach(item => item.addEventListener("click", () => selectPage(item)));

themeToggle.addEventListener("click", () => {
  const light = stage.classList.toggle("light");
  themeToggle.textContent = light ? "☾" : "☼";
  themeToggle.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
});

window.addEventListener("resize", () => {
  const active = document.querySelector(".nav-item.active");
  if (active) moveIndicator(active);
});

window.addEventListener("load", () => {
  const active = document.querySelector(".nav-item.active");
  if (active) moveIndicator(active);
});
