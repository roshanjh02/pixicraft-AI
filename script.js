const studioData = {
    ai: [{n:'AI VOICE', i:'🗣️'}, {n:'SCRIPT AI', i:'📝'}, {n:'CLEAN UP', i:'🧼'}, {n:'VIDEO AI', i:'🎬'}, {n:'AVATAR', i:'👤'}, {n:'AI IMAGE', i:'🖼️'}],
    edit: [{n:'SMART TRIM', i:'🎞️'}, {n:'4K RENDER', i:'💎'}, {n:'CHROMA', i:'🟩'}, {n:'STABILIZE', i:'📹'}, {n:'360 VIEW', i:'🌍'}, {n:'SLOW MO', i:'🐢'}],
    audio: [{n:'DENOISE', i:'🎙️'}, {n:'BEAT SYNC', i:'🥁'}, {n:'CLONE AI', i:'👥'}, {n:'DUBBING', i:'🌐'}, {n:'MUSIC AI', i:'🎵'}, {n:'SWAP', i:'🎭'}],
    fx: [{n:'THUMBNAIL', i:'🖼️'}, {n:'VIRAL AI', i:'📈'}, {n:'DEEPFAKE', i:'🛡️'}, {n:'SEO AI', i:'📊'}, {n:'3D INTRO', i:'🌟'}, {n:'SOCIAL KIT', i:'🔔'}]
};

let attempts = 0;
let isLocked = false;
let devCounter = 0;

// 🔐 SMART FILMORA-STYLE AUTH
function handleAuth() {
    if(isLocked) return;
    const email = document.getElementById('user-email').value.trim().toLowerCase();
    const pass = document.getElementById('user-pass').value.trim();

    if(!email.includes('@') || pass.length < 4) {
        alert("Enter valid Email and a strong Password (min 4 characters).");
        return;
    }

    // Checking if user is already registered in this browser
    const savedPassword = localStorage.getItem(`pixi_studio_${email}`);

    if(!savedPassword) {
        // REGISTER: New user
        localStorage.setItem(`pixi_studio_${email}`, pass);
        alert("Registration Successful! Account created for: " + email);
        enterStudio();
    } else {
        // LOGIN: Returning user
        if(pass === savedPassword) {
            enterStudio();
        } else {
            attempts++;
            if(attempts >= 3) {
                startLockout();
            } else {
                alert(`Incorrect Password! ${3 - attempts} attempts left.`);
            }
        }
    }
}

function enterStudio() {
    document.getElementById('auth-overlay').style.display = 'none';
    document.getElementById('app-ui').style.display = 'block';
    switchTab('ai');
}

function startLockout() {
    isLocked = true;
    let sec = 15 * 60;
    const timer = document.getElementById('lock-timer');
    const btn = document.getElementById('login-btn');
    btn.disabled = true;
    btn.style.opacity = "0.5";

    const countdown = setInterval(() => {
        let m = Math.floor(sec / 60);
        let s = sec % 60;
        timer.innerText = `LOCKED: Retry in ${m}m ${s}s`;
        sec--;
        if(sec < 0) {
            clearInterval(countdown);
            isLocked = false;
            attempts = 0;
            timer.innerText = "";
            btn.disabled = false;
            btn.style.opacity = "1";
        }
    }, 1000);
}

function switchTab(cat) {
    document.querySelectorAll('.nav-item').forEach(t => t.classList.remove('active'));
    document.getElementById(`btn-${cat}`).classList.add('active');
    const grid = document.getElementById('tools-grid');
    grid.innerHTML = "";
    studioData[cat].forEach(t => {
      grid.innerHTML += `<div class="tool-item" onclick="openStudio('${t.n}')"><i>${t.i}</i><b>${t.n}</b></div>`;
        
        
    });
}

function toggleModal(id) {
    const m = document.getElementById(id);
    m.style.display = (m.style.display === 'none') ? 'flex' : 'none';
}

function pay(amt) {
    window.location.href = `upi://pay?pa=roshan@okaxis&pn=Roshan%20Murmu&am=${amt}&cu=INR`;
}

function devClick() {
    devCounter++;
    if(devCounter >= 5) {
        window.location.href = "https://youtube.com/@RoshanJH02";
        devCounter = 0;
    }
}
let currentStyle = 'cinematic';
let currentRatio = '1024x1024';

function openStudio(name) {
    if(name === 'AI IMAGE') {
        document.getElementById('ai-image-modal').style.display = 'flex';
    } else {
        alert("Starting " + name + "...");
    }
}

    document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    if(r === '1:1') currentRatio = '1024x1024';
    if(r === '16:9') currentRatio = '1280x720';
    if(r === '9:16') currentRatio = '720x1280';
}

async function startGeneration() {
    const prompt = document.getElementById('ai-prompt').value;
    if(!prompt) return alert("Bhai, kuch toh likho!");

    const loader = document.getElementById('loading-overlay');
    const display = document.getElementById('result-display');
    const btn = document.getElementById('generate-btn');

    loader.style.display = 'block';
    display.innerHTML = ''; // Clear previous
    btn.disabled = true;

    // Building the AI Secret URL
    const seed = Math.floor(Math.random() * 999999);
    const width = currentRatio.split('x')[0];
    const height = currentRatio.split('x')[1];
    const fullPrompt = encodeURIComponent(`${prompt}, ${currentStyle} style, 8k, masterpiece`);
    
    const imageUrl = `https://image.pollinations.ai/prompt/${fullPrompt}?width=${width}&height=${height}&seed=${seed}&nologo=true`;

    // Pre-loading image
    const img = new Image();
    img.src = imageUrl;
    img.className = 'final-img';
    
    img.onload = () => {
        loader.style.display = 'none';
        display.appendChild(img);
        btn.disabled = false;
        alert("Boom! PixiCraft ne Image taiyar kar di.");
    };
}

