// homepage.js - Professional Valentine Homepage (fully responsive)

// 🏠 Main container
const container = document.createElement('div');
container.style.minHeight = '100vh';
container.style.width = '100%';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.backgroundImage = "url('./three.jpeg')"; // background pic
container.style.backgroundSize = 'cover';
container.style.backgroundPosition = 'center';
container.style.backgroundRepeat = 'no-repeat';
container.style.fontFamily = 'Arial, sans-serif';
container.style.overflow = 'hidden';
container.style.position = 'relative';
container.style.padding = '20px';
document.body.appendChild(container);

// 🌸 Animated petals container
const petalsContainer = document.createElement('div');
petalsContainer.style.position = 'absolute';
petalsContainer.style.top = '0';
petalsContainer.style.left = '0';
petalsContainer.style.width = '100%';
petalsContainer.style.height = '100%';
petalsContainer.style.pointerEvents = 'none';
container.appendChild(petalsContainer);

// Falling flower petals function
function createPetal() {
    const petal = document.createElement('div');
    petal.innerText = '🌸';
    petal.style.position = 'absolute';
    petal.style.fontSize = `${Math.random() * 30 + 15}px`;
    petal.style.left = `${Math.random() * window.innerWidth}px`;
    petal.style.top = `-50px`;
    petal.style.opacity = Math.random() * 0.8 + 0.2;
    petalsContainer.appendChild(petal);

    let top = -50;
    const speed = 1 + Math.random() * 2;
    const drift = (Math.random() - 0.5) * 2;

    const interval = setInterval(() => {
        top += speed;
        petal.style.top = `${top}px`;
        petal.style.left = `${parseFloat(petal.style.left) + drift}px`;
        if(top > window.innerHeight){
            petal.remove();
            clearInterval(interval);
        }
    }, 30);
}
setInterval(() => createPetal(), 200);

// 🥰 Main title
const title = document.createElement('h1');
title.innerText = "💖 Happy Valentine Dear 💖";
title.style.color = 'white';
title.style.fontSize = '3em';
title.style.textAlign = 'center';
title.style.textShadow = '2px 2px 12px #ff6f91';
title.style.marginBottom = '20px';
title.style.padding = '0 10px';
container.appendChild(title);

// 🌹 Rounded profile picture
const profile = document.createElement('img');
profile.src = './two.jpeg'; 
profile.alt = 'Profile Picture';
profile.style.width = '35%';    
profile.style.height = '45%';  
profile.style.borderRadius = '50%';
profile.style.objectFit = 'cover';
profile.style.border = '4px solid white';
profile.style.boxShadow = '0 5px 20px rgba(0,0,0,0.4)';
profile.style.marginBottom = '30px';
container.appendChild(profile);

// 💌 Sweet words
const message = document.createElement('p');
message.innerText = "It's such a wonderful day to have you as a dear friend! 💖 Happy Valentine and enjoy your day!";
message.style.color = 'white';
message.style.fontSize = '1.5em';
message.style.textAlign = 'center';
message.style.margin = '0 20px';
message.style.maxWidth = '600px';
message.style.lineHeight = '1.6';
message.style.textShadow = '1px 1px 6px rgba(0,0,0,0.4)';
container.appendChild(message);

// 🌟 Navigation buttons container
const navContainer = document.createElement('div');
navContainer.style.display = 'flex';
navContainer.style.flexDirection = 'column';
navContainer.style.gap = '20px';
navContainer.style.marginTop = '40px';
container.appendChild(navContainer);

// Create navigation button function
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

// Add buttons
createNavButton("Go to Surprise", "surprise.html");
createNavButton("Go to Encouragement", "encourage.html");
createNavButton("Go to Jokes", "jokes.html");

// ❤️ Floating hearts function
function createHeart() {
    const heart = document.createElement('div');
    heart.style.width = '20px';
    heart.style.height = '20px';
    heart.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 70%)`;
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '0';
    heart.style.transform = 'rotate(-45deg)';

    const before = document.createElement('div');
    before.style.width = '20px';
    before.style.height = '20px';
    before.style.backgroundColor = heart.style.backgroundColor;
    before.style.borderRadius = '50%';
    before.style.position = 'absolute';
    before.style.top = '-10px';
    before.style.left = '0';
    heart.appendChild(before);

    const after = document.createElement('div');
    after.style.width = '20px';
    after.style.height = '20px';
    after.style.backgroundColor = heart.style.backgroundColor;
    after.style.borderRadius = '50%';
    after.style.position = 'absolute';
    after.style.top = '0';
    after.style.left = '10px';
    heart.appendChild(after);

    document.body.appendChild(heart);

    let bottom = 0;
    const speed = 2 + Math.random() * 3;
    const interval = setInterval(() => {
        bottom += speed;
        heart.style.bottom = bottom + 'px';
        heart.style.opacity = 1 - bottom/600;
        if(bottom > 600){
            heart.remove();
            clearInterval(interval);
        }
    }, 30);
}
setInterval(() => createHeart(), 500);

// 📱 Responsive adjustments
function adjustResponsive() {
    if(window.innerWidth < 500){
        title.style.fontSize = '3em';
        message.style.fontSize = '1.5em';
        profile.style.width = '140px';
        profile.style.height = '140px';
    } else {
        title.style.fontSize = '3em';
        message.style.fontSize = '1.5em';
        profile.style.width = '150px';
        profile.style.height = '150px';
    }
}
window.addEventListener('resize', adjustResponsive);
adjustResponsive();