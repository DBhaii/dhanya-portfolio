// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  toggleBtn.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

// Bullet list scroll animation
const listItems = document.querySelectorAll(".custom-list li");
function revealListItems() {
  listItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) item.classList.add("show");
  });
}
window.addEventListener("scroll", revealListItems);
window.addEventListener("load", revealListItems);

// Project card animation
const projectCards = document.querySelectorAll(".project-card");
function showProjectCards() {
  projectCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) card.classList.add("show");
  });
}
window.addEventListener("scroll", showProjectCards);
window.addEventListener("load", showProjectCards);

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
});

// Animate skill bars (without percentages)
const skillSection = document.getElementById("skills");
const skillBars = document.querySelectorAll(".bar span");
let skillsAnimated = false;

function animateSkills() {
  const rect = skillSection.getBoundingClientRect();
  if (!skillsAnimated && rect.top < window.innerHeight - 100) {
    skillBars.forEach((bar) => {
      const targetWidth = bar.dataset.width;
      bar.style.width = targetWidth;
    });
    skillsAnimated = true;
  }
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

