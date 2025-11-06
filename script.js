/* ============================================================
   THEME TOGGLE (Light / Dark Mode)
============================================================ */
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  toggleBtn.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});


/* ============================================================
   SCROLL PROGRESS BAR
============================================================ */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
});


/* ============================================================
   BULLET LIST FADE-IN ON SCROLL
============================================================ */
const listItems = document.querySelectorAll(".custom-list li");

function revealListItems() {
  listItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) item.classList.add("show");
  });
}

window.addEventListener("scroll", revealListItems);
window.addEventListener("load", revealListItems);


/* ============================================================
   SKILL BARS ANIMATION (fills when visible)
============================================================ */
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


/* ============================================================
   ACCORDION (Projects) + AUTOSCROLL + AUTOCLOSE
============================================================ */
const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach((acc) => {
  acc.addEventListener("click", () => {
    const content = acc.nextElementSibling;
    const isOpen = content.style.maxHeight;

    // Close any other open accordion
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) item.style.maxHeight = null;
    });

    // Toggle clicked accordion
    if (isOpen) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";

      // Auto scroll into view smoothly
      setTimeout(() => {
        acc.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  });
});


/* ============================================================
   OPTIONAL: SCROLL REVEAL FOR PROJECT CARDS (if needed later)
============================================================ */
// const projectCards = document.querySelectorAll(".project-card");
// function showProjectCards() {
//   projectCards.forEach((card) => {
//     const rect = card.getBoundingClientRect();
//     if (rect.top < window.innerHeight - 100) card.classList.add("show");
//   });
// }
// window.addEventListener("scroll", showProjectCards);
// window.addEventListener("load", showProjectCards);
