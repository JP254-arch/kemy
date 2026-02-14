// encouragePage.js - Valentine Encouragement Page (Professional & Animated)

// 🏠 Main container
const container = document.createElement("div");
container.style.width = "100%";
container.style.minHeight = "100vh";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.backgroundImage = "url('./four.jpeg')";
container.style.backgroundSize = "cover";
container.style.backgroundPosition = "center";
container.style.fontFamily = "Arial, sans-serif";
container.style.position = "relative";
container.style.overflow = "hidden";
container.style.padding = "40px 20px";
document.body.appendChild(container);

// 🌸 Floating effects container
const effectsContainer = document.createElement("div");
effectsContainer.style.position = "absolute";
effectsContainer.style.top = "0";
effectsContainer.style.left = "0";
effectsContainer.style.width = "100%";
effectsContainer.style.height = "100%";
effectsContainer.style.pointerEvents = "none";
container.appendChild(effectsContainer);

// Floating flowers function
function createFlower(x = Math.random() * window.innerWidth) {
  const flower = document.createElement("div");
  flower.innerText = "🌸";
  flower.style.position = "absolute";
  flower.style.top = "-50px";
  flower.style.left = `${x}px`;
  flower.style.fontSize = `${Math.random() * 25 + 15}px`;
  flower.style.opacity = Math.random() * 0.7 + 0.3;
  flower.style.transition = "transform 0.3s, opacity 0.3s";
  flower.style.cursor = "pointer";
  effectsContainer.appendChild(flower);

  let top = -50;
  const speed = 1 + Math.random() * 2;
  const drift = (Math.random() - 0.5) * 2;

  const interval = setInterval(() => {
    top += speed;
    flower.style.top = `${top}px`;
    flower.style.left = `${parseFloat(flower.style.left) + drift}px`;
    if (top > window.innerHeight) {
      flower.remove();
      clearInterval(interval);
    }
  }, 30);

  flower.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) createHeart();
    createFlower(top);
    flower.style.transform = "scale(1.5)";
    setTimeout(() => (flower.style.transform = "scale(1)"), 300);
  });
}

// Floating hearts function
function createHeart() {
  const heart = document.createElement("div");
  heart.style.width = "20px";
  heart.style.height = "20px";
  heart.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
  heart.style.position = "absolute";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0";
  heart.style.transform = "rotate(-45deg)";

  const before = document.createElement("div");
  before.style.width = "20px";
  before.style.height = "20px";
  before.style.backgroundColor = heart.style.backgroundColor;
  before.style.borderRadius = "50%";
  before.style.position = "absolute";
  before.style.top = "-10px";
  before.style.left = "0";
  heart.appendChild(before);

  const after = document.createElement("div");
  after.style.width = "20px";
  after.style.height = "20px";
  after.style.backgroundColor = heart.style.backgroundColor;
  after.style.borderRadius = "50%";
  after.style.position = "absolute";
  after.style.top = "0";
  after.style.left = "10px";
  heart.appendChild(after);

  effectsContainer.appendChild(heart);

  let bottom = 0;
  const speed = 2 + Math.random() * 3;
  const interval = setInterval(() => {
    bottom += speed;
    heart.style.bottom = bottom + "px";
    heart.style.opacity = 1 - bottom / 600;
    if (bottom > 600) {
      heart.remove();
      clearInterval(interval);
    }
  }, 30);
}

// Continuous floating effects
setInterval(() => createFlower(), 400);
setInterval(() => createHeart(), 500);

// 💌 Encouragement messages
const messages = [
  {
    text: "Hey Fridah, I just want you to know how amazing you are. No matter what comes your way, you have the strength, courage, and heart to handle it. Keep shining, keep believing in yourself, and never forget how much you inspire those around you—including me.",
    main: true,
  },
  {
    text: "I believe in you and your dreams. You have the talent and determination to achieve anything you set your mind to.",
  },
  {
    text: "Walking with a friend in the dark is better than walking alone in the light. — Helen Keller",
  },
  {
    text: "Love is that condition in which the happiness of another person is essential to your own. — Robert Heinlein",
  },
  {
    text: "I see how much effort you put in every day. Remember, every bit of sweat and focus is shaping the amazing future you’re working toward.",
  },
  {
    text: "You’re like a ray of sunshine on a cloudy day—beautiful, warm, and impossible to forget.",
  },
];

// Cards container
const cardsContainer = document.createElement("div");
cardsContainer.style.display = "flex";
cardsContainer.style.flexDirection = "column";
cardsContainer.style.alignItems = "center";
cardsContainer.style.gap = "30px";
cardsContainer.style.marginTop = "60px";
container.appendChild(cardsContainer);
// 🌟 Navigation buttons container (Encourage Page)
const navContainer = document.createElement("div");
navContainer.style.display = "flex";
navContainer.style.flexDirection = "column";
navContainer.style.gap = "15px";
navContainer.style.marginTop = "50px";
container.appendChild(navContainer);

// Function to create navigation button
function createNavButton(text, pageUrl) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.style.padding = "12px 25px";
  btn.style.fontSize = "1em";
  btn.style.border = "none";
  btn.style.borderRadius = "25px";
  btn.style.backgroundColor = "#ff6f91";
  btn.style.color = "white";
  btn.style.cursor = "pointer";
  btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
  btn.style.transition = "transform 0.3s, background-color 0.3s";
  btn.onclick = () => {
    window.location.href = pageUrl;
  };
  btn.onmouseover = () => {
    btn.style.transform = "scale(1.1)";
    btn.style.backgroundColor = "#ff3d7f";
  };
  btn.onmouseout = () => {
    btn.style.transform = "scale(1)";
    btn.style.backgroundColor = "#ff6f91";
  };
  navContainer.appendChild(btn);
}

// Add navigation buttons
createNavButton("Go to Home", "index.html"); // homepage
createNavButton("Go to Surprise", "surprise.html");
createNavButton("Go to Jokes", "jokes.html");

// Pulse animation CSS
const style = document.createElement("style");
style.innerHTML = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.03); }
    100% { transform: scale(1); }
}
.card {
    animation: pulse 3s infinite;
}
`;
document.head.appendChild(style);

// Create cards
messages.forEach((msg) => {
  const card = document.createElement("div");
  card.innerText = msg.text;
  card.style.padding = "25px";
  card.style.maxWidth = "600px";
  card.style.borderRadius = "20px";
  card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
  card.style.backgroundColor = msg.main
    ? "rgba(86, 201, 240, 0.85)"
    : "rgba(163, 86, 86, 0.32)";
  card.style.color = "#333";
  card.style.fontSize = "3em";
  card.style.lineHeight = "2";
  card.style.fontStyle = msg.main ? "italic" : "normal";
  card.style.fontFamily = msg.main
    ? "Pristina, cursive"
    : "Monotype Corsiva, cursive";
  card.style.textAlign = "center";
  card.style.transform = msg.main
    ? "rotate(0deg)"
    : `rotate(${(Math.random() - 0.5) * 8}deg)`;
  card.classList.add("card");
  cardsContainer.appendChild(card);
});

// 📱 Responsive adjustments
function adjustResponsive() {
  if (window.innerWidth < 500) {
    cardsContainer.style.gap = "20px";
    messages.forEach((msg, i) => {
      const card = cardsContainer.children[i];
      card.style.fontSize = msg.main ? "2em" : "3em";
      card.style.maxWidth = "90%";
    });
    container.style.padding = "20px";
  } else {
    cardsContainer.style.gap = "30px";
    messages.forEach((msg, i) => {
      const card = cardsContainer.children[i];
      card.style.fontSize = msg.main ? "3em" : "4em";
      card.style.maxWidth = "600px";
    });
    container.style.padding = "40px 20px";
  }
}
window.addEventListener("resize", adjustResponsive);
adjustResponsive();
