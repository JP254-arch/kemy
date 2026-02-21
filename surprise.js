// surprisePage.js — CORE Valentine Experience (Responsive)

// =============================
// 🌸 MAIN CONTAINER
// =============================
const container = document.createElement("div");
container.style.minHeight = "100vh";
container.style.width = "100%";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.position = "relative";
container.style.fontFamily = "Arial, sans-serif";
container.style.backgroundImage = "url('./rose.jpeg')";
container.style.backgroundSize = "cover";
container.style.backgroundPosition = "center";
container.style.padding = "20px";
container.style.overflow = "hidden";
document.body.appendChild(container);

// =============================
// 🌹 FLOATING ANIMATIONS
// =============================
const effects = document.createElement("div");
effects.style.position = "absolute";
effects.style.width = "100%";
effects.style.height = "100%";
effects.style.pointerEvents = "none";
container.appendChild(effects);

const floatingIcons = ["🌹", "💖", "❤️", "😍", "💕"];

function createFloating() {
  const el = document.createElement("div");
  el.innerText =
    floatingIcons[Math.floor(Math.random() * floatingIcons.length)];
  el.style.position = "absolute";
  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.top = "-40px";
  el.style.fontSize = Math.random() * 25 + 20 + "px";
  effects.appendChild(el);

  let top = -40;
  const speed = 1 + Math.random() * 2;

  const anim = setInterval(() => {
    top += speed;
    el.style.top = top + "px";
    if (top > window.innerHeight) {
      el.remove();
      clearInterval(anim);
    }
  }, 30);
}
setInterval(createFloating, 250);

// =============================
// 💖 TITLE
// =============================
const title = document.createElement("h1");
title.innerText = "Happy Valentine My Dearest 💝";
title.style.color = "white";
title.style.textShadow = "0 0 15px pink";
title.style.textAlign = "center";
title.style.marginBottom = "30px";
container.appendChild(title);

// =============================
// 🖼 LEFT PROFILE SECTION
// =============================
const leftSection = document.createElement("div");
leftSection.style.position = "absolute";
leftSection.style.top = "120px";
leftSection.style.left = "20px";
leftSection.style.display = "flex";
leftSection.style.flexDirection = "column";
leftSection.style.alignItems = "center";
container.appendChild(leftSection);

// Rounded image
const profile = document.createElement("img");
profile.src = "./two.jpeg";
profile.style.width = "150px";
profile.style.height = "150px";
profile.style.borderRadius = "50%";
profile.style.objectFit = "cover";
profile.style.border = "4px solid white";
profile.style.boxShadow = "0 0 20px rgba(255,255,255,0.8)";
leftSection.appendChild(profile);

// Typing + color changing text
const typingText = document.createElement("div");
typingText.style.marginTop = "15px";
typingText.style.fontSize = "3em";
typingText.style.fontWeight = "bold";
typingText.style.textAlign = "center";
typingText.style.animation = "pulse 2s infinite";
leftSection.appendChild(typingText);

const textString = "Happy😊 Valentine's🌹 Fridah💝";
const colors = ["blue", "red", "purple", "orange"];

let i = 0;
function typeText() {
  if (i < textString.length) {
    typingText.innerText += textString[i];
    typingText.style.color = colors[i % colors.length];
    i++;
    setTimeout(typeText, 80);
  }
}
typeText();


// =============================
// 💌 CENTER VALENTINE CARD
// =============================
const valCard = document.createElement("div");
valCard.innerText =
  "On this beautiful day, I just want you to know how special you are. Your smile brings warmth, your presence brings peace, and your heart makes the world brighter. May today remind you how deeply appreciated and cherished you truly are. Happy Valentine’s Day 💖";
valCard.style.maxWidth = "600px";
valCard.style.padding = "25px";
valCard.style.marginTop = "20px";
valCard.style.background = "rgba(255,255,255,0.9)";
valCard.style.borderRadius = "20px";
valCard.style.textAlign = "center";
valCard.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
container.appendChild(valCard);

// =============================
// 🎁 3D GIFT BOX
// =============================
const giftBox = document.createElement("div");
giftBox.innerText = "🎁";
giftBox.style.fontSize = "100px";
giftBox.style.marginTop = "40px";
giftBox.style.cursor = "pointer";
giftBox.style.transition = "transform 0.4s";
giftBox.style.animation = "pulse 2s infinite";
container.appendChild(giftBox);

const clickText = document.createElement("p");
clickText.innerText = "Click Me";
clickText.style.color = "white";
clickText.style.fontWeight = "bold";
container.appendChild(clickText);

// Popup heart message
giftBox.onclick = () => {
  const popup = document.createElement("div");
  popup.innerText =
    "❤️ Happy Valentine’s Day! You make my world brighter, my heart fuller, and every day better just by being you. Enjoy your day. Love you 💖";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%,-50%)";
  popup.style.background = "white";
  popup.style.padding = "30px";
  popup.style.borderRadius = "20px";
  popup.style.boxShadow = "0 0 30px pink";
  popup.style.maxWidth = "400px";
  popup.style.textAlign = "center";
  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 6000);
};

// =============================
// 🎁 GIFT CARDS SECTION
// =============================
const gifts = document.createElement("div");
gifts.style.display = "flex";
gifts.style.flexWrap = "wrap";
gifts.style.justifyContent = "center";
gifts.style.gap = "25px";
gifts.style.marginTop = "50px";
container.appendChild(gifts);

function createGiftCard(label, message, big = false) {
  const card = document.createElement("div");
  card.innerText = label;
  card.style.padding = "20px";
  card.style.background = "rgba(255,255,255,0.9)";
  card.style.borderRadius = "15px";
  card.style.cursor = "pointer";
  card.style.boxShadow = "0 0 20px pink";
  card.style.animation = "glow 2.5s infinite";
  gifts.appendChild(card);

  card.onclick = () => {
    const modal = document.createElement("div");
    modal.innerText = message;
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%,-50%)";
    modal.style.background = "white";
    modal.style.padding = "30px";
    modal.style.borderRadius = "20px";
    modal.style.maxWidth = big ? "700px" : "450px";
    modal.style.height = big ? "70vh" : "auto";
    modal.style.overflowY = "auto";
    modal.style.whiteSpace = "pre-line";
    modal.style.boxShadow = "0 0 40px pink";
    document.body.appendChild(modal);

    modal.onclick = () => modal.remove();
  };
}

// Gift messages
createGiftCard(
  "💝 Open Gift 1",
  "Wishing you the most beautiful Valentine’s Day — filled with smiles, love, and all the happiness you deserve."
);

createGiftCard(
  "💌 Open Gift 2",
  `Dear Fridah,
I just wanted to remind you how special you are to me. You make ordinary days brighter, and I hope this Valentine’s Day brings you as much happiness as you bring into my life.

Happy Valentine’s Day ❤️`
);

createGiftCard(
  "❤️ Open Letter",
//   `Dear Fridah,
//  Today means so much to me because it finally gives me the courage to open my heart to you. I have waited for this moment for a long time, just to tell you how much you truly mean to me.
 
//  When I'm alone, I think of so many things to say to you, but when I finally have the chance to tell you, I go completely speechless. Somehow, your presence takes all my words away and leaves only the feelings in my heart. 
 
//  From the very first moment I laid my eyes on you, something changed in me. Since then, you have been on my mind in ways I cannot explain — through sleepless nights and quiet moments when all I can do is think about you. Every moment I spend with you brings me peace, comfort, and a happiness that feels so natural. Being with you feels like home, and honestly, I never want to walk away from that feeling. 
 
//  You're not just someone I want to be with. You're the one I never want to be without.
 
//  I may not always say “I love you,” because what I feel for you feels deeper than words can fully express. It’s something growing quietly and sincerely in my heart, and I hope that one day you will see it and understand how real it is. Whenever I look at you, I don’t just see the present — I see a bright future, one where my life shines because you are beside me, glowing and making everything more beautiful. 
 
//  It’s hard to explain just how much you mean to me, but you make my heart feel alive in the most incredible way. The thought of building a future with you, of sharing life’s moments together, is something I truly cherish in my heart. 
 
//  I hope that, in your own way, you may feel something similar. And even if you don’t, I will always appreciate you and wish you happiness, because seeing you smile will always matter to me. 
 
//  With all my heart, JP`,
`🕊️`,  
true
);

// =============================
// 🌟 Navigation buttons container (Surprise Page)
// =============================
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
createNavButton("Go to Home", "index.html");
createNavButton("Go to Encouragement", "encourage.html");
createNavButton("Go to Jokes", "jokes.html");

// =============================
// ✨ GLOBAL ANIMATIONS
// =============================
const style = document.createElement("style");
style.innerHTML = `
@keyframes pulse {
  0%{transform:scale(1);}
  50%{transform:scale(1.08);}
  100%{transform:scale(1);}
}

@keyframes glow {
  0%{box-shadow:0 0 10px pink;}
  50%{box-shadow:0 0 25px red;}
  100%{box-shadow:0 0 10px pink;}
}
`;
document.head.appendChild(style);

// =============================
// 📱 RESPONSIVENESS
// =============================
function responsive() {
  if (window.innerWidth < 700) {
    leftSection.style.position = "relative";
    leftSection.style.top = "0";
    leftSection.style.left = "0";
    container.style.paddingTop = "40px";
  }
}
window.addEventListener("resize", responsive);
responsive();
