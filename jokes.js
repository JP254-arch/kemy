// jokesPage.js - Valentine Jokes Page (Responsive & Animated)

// 🏠 Main container
const container = document.createElement('div');
container.style.width = '100%';
container.style.minHeight = '100vh';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.backgroundImage = "url('./joke.jpeg')";
container.style.backgroundSize = 'cover';
container.style.backgroundPosition = 'center';
container.style.fontFamily = 'Arial, sans-serif';
container.style.position = 'relative';
container.style.overflow = 'hidden';
container.style.padding = '40px 20px';
document.body.appendChild(container);

// 🌸 Floating emojis container
const emojiContainer = document.createElement('div');
emojiContainer.style.position = 'absolute';
emojiContainer.style.top = '0';
emojiContainer.style.left = '0';
emojiContainer.style.width = '100%';
emojiContainer.style.height = '100%';
emojiContainer.style.pointerEvents = 'none';
container.appendChild(emojiContainer);

// Function to create floating emoji
const emojis = ['😂', '😄', '😊', '😍', '🤣', '💖', '🥰'];
function createEmoji(x = Math.random() * window.innerWidth) {
    const emoji = document.createElement('div');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'absolute';
    emoji.style.top = '-50px';
    emoji.style.left = `${x}px`;
    emoji.style.fontSize = `${Math.random() * 35 + 20}px`;
    emoji.style.opacity = Math.random() * 0.8 + 0.2;
    emoji.style.transition = 'transform 0.3s, opacity 0.3s';
    emojiContainer.appendChild(emoji);

    let top = -50;
    const speed = 1 + Math.random() * 2;
    const drift = (Math.random() - 0.5) * 2;

    const interval = setInterval(() => {
        top += speed;
        emoji.style.top = `${top}px`;
        emoji.style.left = `${parseFloat(emoji.style.left) + drift}px`;
        if (top > window.innerHeight) {
            emoji.remove();
            clearInterval(interval);
        }
    }, 30);

    // Click to pop effect
    emoji.addEventListener('click', () => {
        emoji.style.transform = 'scale(1.5)';
        setTimeout(() => emoji.style.transform = 'scale(1)', 300);
    });
}

// Continuous floating emojis
setInterval(() => createEmoji(), 300);

// 💌 Jokes messages
const jokes = [
    "You're so sweet, you're giving me a toothache.",
    "Do you know what I did last night? I looked up at the stars and matched each one with a reason why I love you.",
    "Do you have a map? I keep getting lost in your smile.",
    "I’d tell you a joke about time, but you’d have to wait for it… just like my heart waits for you!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "Why did the coffee file a police report? It got mugged.",
    "I would tell you a joke about elevators… but it’s an uplifting experience.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "Why did the computer go to the doctor? It caught a virus.",
    "Why did the computer get cold? Because it left its windows open.",
    "Why was six afraid of seven? Because seven eight nine.",
    "Why do plants hate math? It gives them square roots.",
    "What do you call an angle that’s adorable? Acute angle.",
    "Why was the obtuse triangle always upset? Because it was never right.",
    "Why did the circle go to school? To get well-rounded.",
    "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
];

// Cards container
const cardsContainer = document.createElement('div');
cardsContainer.style.display = 'flex';
cardsContainer.style.flexDirection = 'column';
cardsContainer.style.alignItems = 'center';
cardsContainer.style.gap = '25px';
cardsContainer.style.marginTop = '60px';
container.appendChild(cardsContainer);

// Pulse/bounce animation CSS
const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
.card {
    animation: pulse 3s infinite;
    cursor: pointer;
    transition: transform 0.3s;
}
.card:hover {
    transform: scale(1.08);
}
`;
document.head.appendChild(style);

// Create joke cards with alternating fonts
jokes.forEach((joke, index) => {
    const card = document.createElement('div');
    card.innerText = joke;
    card.style.padding = '20px';
    card.style.maxWidth = '600px';
    card.style.borderRadius = '20px';
    card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
    card.style.backgroundColor = 'rgba(255,255,255,0.9)';
    card.style.color = '#333';
    card.style.fontSize = '1.3em';
    card.style.lineHeight = '1.6';
    card.style.fontFamily = index % 2 === 0 ? 'Pristina, cursive' : 'MV Boli, cursive';
    card.style.textAlign = 'center';
    card.classList.add('card');
    cardsContainer.appendChild(card);
});

// =============================
// 🌟 Navigation buttons container (Jokes Page)
// =============================
const navContainer = document.createElement('div');
navContainer.style.display = 'flex';
navContainer.style.flexDirection = 'column';
navContainer.style.gap = '15px';
navContainer.style.marginTop = '50px';
container.appendChild(navContainer);

// Function to create navigation button
function createNavButton(text, pageUrl) {
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.style.padding = '12px 25px';
    btn.style.fontSize = '1em';
    btn.style.border = 'none';
    btn.style.borderRadius = '25px';
    btn.style.backgroundColor = '#ff6f91';
    btn.style.color = 'white';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    btn.style.transition = 'transform 0.3s, background-color 0.3s';
    btn.onclick = () => { window.location.href = pageUrl; };
    btn.onmouseover = () => { btn.style.transform = 'scale(1.1)'; btn.style.backgroundColor = '#ff3d7f'; };
    btn.onmouseout = () => { btn.style.transform = 'scale(1)'; btn.style.backgroundColor = '#ff6f91'; };
    navContainer.appendChild(btn);
}

// Add navigation buttons
createNavButton("Go to Home", "index.html");
createNavButton("Go to Surprise", "surprise.html");
createNavButton("Go to Encouragement", "encourage.html");

// 📱 Responsive adjustments
function adjustResponsive() {
    if (window.innerWidth < 500) {
        cardsContainer.style.gap = '20px';
        Array.from(cardsContainer.children).forEach((card) => {
            card.style.fontSize = '1em';
            card.style.padding = '15px';
            card.style.maxWidth = '90%';
        });
        container.style.padding = '20px';
    } else {
        cardsContainer.style.gap = '25px';
        Array.from(cardsContainer.children).forEach((card) => {
            card.style.fontSize = '1.3em';
            card.style.padding = '20px';
            card.style.maxWidth = '600px';
        });
        container.style.padding = '40px 20px';
    }
}
window.addEventListener('resize', adjustResponsive);
adjustResponsive();