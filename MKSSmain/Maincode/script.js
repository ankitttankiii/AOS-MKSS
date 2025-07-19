// ---------- CAMPAIGN SLIDER ----------
const slides = [
  {
    img: "RTIpic.jpg",
    text: " The Right to Information empowers citizens to access government records, ensuring transparency, accountability, and active participation in democracy.",
    topic: "RTI",
    link: "RTI_page.html"
  },
  {
    img: "MGNREGAforjs.jpg",
    text: "MGNREGA guarantees 100 days of wage employment to rural households, empowering the poor through livelihood security and grassroots development.",
    topic: "MGNREGA",
    link: "NREGA_page.html"
  },
  {
    img: "MIGact.jpg",
    text: "Minimum Income Guarantee aims to provide financial security by ensuring a basic income floor for the poor, reducing poverty and inequality.",
    topic: "Minimum Guarantees for All",
    link: "INCOME.html"
  },
  {
    img: "gigworkforjs.webp",
    text: "Gig work involves short-term, flexible jobs often through digital platforms, offering income opportunities but lacking job security and social benefits.",
    topic: "GIG Work",
    link: "GIG.html"
  },
  {
    img: "jansunwaijs.jpg",
    text: "Jansunwai, or public hearing, is a grassroots tool where villagers openly verify official records to expose corruption and demand accountability.",
    topic: "Jansunwai",
    link: "JANSUNWAI.html"
  }
];

let currentIndex = 0;

const imageBox = document.getElementById("imageBox");
const infoBox = document.getElementById("infoBox");
const infoText = document.getElementById("infoText");
const topicWrapper = document.getElementById("topicWrapper");
let currentImage = document.getElementById("sliderImage");
let currentTopic = document.getElementById("topicBox");

function changeSlide(direction) {
  const isLeft = direction < 0;
  const nextIndex = (currentIndex + direction + slides.length) % slides.length;

  // New Image
  const newImage = document.createElement("img");
  newImage.src = slides[nextIndex].img;
  newImage.className = "active";
  newImage.style.transform = `translateX(${isLeft ? '-' : ''}100%)`;
  imageBox.appendChild(newImage);

  setTimeout(() => {
    newImage.style.transform = "translateX(0%)";
    currentImage.classList.remove("active");
    currentImage.style.opacity = "0";
  }, 50);

  setTimeout(() => {
    imageBox.removeChild(currentImage);
    currentImage = newImage;
  }, 600);

  // Info box fade
  infoBox.classList.remove("fade-in");
  infoBox.classList.add("fade-out");

  setTimeout(() => {
    infoText.textContent = slides[nextIndex].text;
    infoBox.classList.remove("fade-out");
    infoBox.classList.add("fade-in");
  }, 300);

  // Topic box
  const newTopic = document.createElement("a");
  newTopic.className = `topic-box active`;
  newTopic.href = slides[nextIndex].link;
  newTopic.textContent = slides[nextIndex].topic;
  newTopic.style.transform = `translateX(${isLeft ? '-' : ''}150%)`;
  topicWrapper.appendChild(newTopic);

  setTimeout(() => {
    newTopic.style.transform = "translateX(-50%)";
    currentTopic.classList.add(isLeft ? "slide-right" : "slide-left");
  }, 50);

  currentTopic.classList.remove("active");
  currentTopic.classList.add("exit-left");

  setTimeout(() => {
    topicWrapper.removeChild(currentTopic);
    currentTopic = newTopic;
  }, 600);

  currentIndex = nextIndex;
}

// ---------- ASSOCIATION CARD FADE ----------
function fadeOthers(activeCard) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (card !== activeCard) {
      card.classList.add("fade");
    }
  });
}

function resetFade() {
  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("fade");
  });
}

// ---------- ON DOM READY ----------
document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // ✅ DROPDOWN MENU FUNCTIONALITY
  const menuToggle = document.getElementById("menuToggle");
  const mainDropdown = document.querySelector("#menuContainer .dropdown-menu");

  if (menuToggle && mainDropdown) {
    menuToggle.addEventListener("click", function () {
      const isVisible = mainDropdown.style.display === "block";
      mainDropdown.style.display = isVisible ? "none" : "block";
    });
  }

  // ✅ DROPDOWN SUBMENU SHOW ON HOVER
  document.querySelectorAll(".dropdown-submenu").forEach(menu => {
    menu.addEventListener("mouseenter", () => {
      const submenu = menu.querySelector(".dropdown-menu");
      if (submenu) submenu.style.display = "block";
    });

    menu.addEventListener("mouseleave", () => {
      const submenu = menu.querySelector(".dropdown-menu");
      if (submenu) submenu.style.display = "none";
    });
  });

}); 
