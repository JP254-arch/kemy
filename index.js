// index.js - Responsive Valentine Landing Page

// 🏠 Create main container
const container = document.createElement('div');
container.style.minHeight = '100vh';
container.style.width = '100%';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'flex-start';
container.style.alignItems = 'center';
container.style.background = 'linear-gradient(to right, #ff9a9e, #fad0c4)';
container.style.fontFamily = 'Arial, sans-serif';
container.style.overflow = 'hidden';
container.style.paddingTop = '50px';
document.body.appendChild(container);

// 🌸 Add animated flower petals container
const flowersContainer = document.createElement('div');
flowersContainer.style.position = 'absolute';
flowersContainer.style.top = '0';
flowersContainer.style.left = '0';
flowersContainer.style.width = '100%';
flowersContainer.style.height = '100%';
flowersContainer.style.pointerEvents = 'none';
container.appendChild(flowersContainer);

// Function to create falling flower petals
function createFlowerPetal() {
    const petal = document.createElement('div');
    petal.innerText = '🌸';
    petal.style.position = 'absolute';
    petal.style.fontSize = `${Math.random() * 30 + 20}px`;
    petal.style.left = `${Math.random() * window.innerWidth}px`;
    petal.style.top = `-50px`;
    petal.style.opacity = Math.random();
    flowersContainer.appendChild(petal);

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

// Create petals continuously
setInterval(() => createFlowerPetal(), 200);

// 🥰 Add main title
const title = document.createElement('h1');
title.innerText = "💖 Happy Valentine's Day! 💖";
title.style.color = 'white';
title.style.fontSize = '3em';
title.style.textShadow = '2px 2px 8px #ff6f91';
title.style.textAlign = 'center';
title.style.marginBottom = '20px';
title.style.padding = '0 10px';
title.style.wordBreak = 'break-word';
container.appendChild(title);

// 🌹 Add rounded profile picture
const profile = document.createElement('img');
profile.src = 'https://via.placeholder.com/150'; // replace with your friend's pic
profile.alt = 'Profile Picture';
profile.style.width = '150px';
profile.style.height = '150px';
profile.style.borderRadius = '50%';
profile.style.objectFit = 'cover';
profile.style.marginBottom = '30px';
profile.style.border = '4px solid #fff';
profile.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
container.appendChild(profile);

// 💌 Add sweet words message
const message = document.createElement('p');
message.innerText = "You make every day brighter and sweeter! 💖";
message.style.color = 'white';
message.style.fontSize = '1.5em';
message.style.textAlign = 'center';
message.style.margin = '0 20px';
message.style.maxWidth = '600px';
container.appendChild(message);

// 🎁 Add surprise button
const button = document.createElement('button');
button.innerText = "Click for a surprise!";
button.style.padding = '15px 30px';
button.style.fontSize = '1.2em';
button.style.border = 'none';
button.style.borderRadius = '25px';
button.style.backgroundColor = '#ff6f91';
button.style.color = 'white';
button.style.cursor = 'pointer';
button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
button.style.transition = 'transform 0.3s, background-color 0.3s';
button.style.marginTop = '30px';
container.appendChild(button);

// 💫 Button hover effect
button.onmouseover = () => {
    button.style.transform = 'scale(1.1)';
    button.style.backgroundColor = '#ff3d7f';
};
button.onmouseout = () => {
    button.style.transform = 'scale(1)';
    button.style.backgroundColor = '#ff6f91';
};

// ❤️ Function to create floating hearts
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

// 🎉 Button click event
button.onclick = () => {
    alert("You are amazing! 💖 Happy Valentine’s Day!");
    for(let i=0; i<30; i++){
        setTimeout(createHeart, i*100);
    }
};

// 📱 Responsive adjustments
window.addEventListener('resize', () => {
    // Make title smaller on mobile
    if(window.innerWidth < 500){
        title.style.fontSize = '2em';
        message.style.fontSize = '1.2em';
        profile.style.width = '120px';
        profile.style.height = '120px';
    } else {
        title.style.fontSize = '3em';
        message.style.fontSize = '1.5em';
        profile.style.width = '150px';
        profile.style.height = '150px';
    }
});