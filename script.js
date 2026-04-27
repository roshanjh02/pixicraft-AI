
// PIXICRAFT-AI | SECURE ENGINE v2.0.4 | DEVELOPER: ROSHAN MURMU

const database = {
    ai: [{n:'AI VOICE', i:'🗣️'}, {n:'SCRIPT AI', i:'📝'}, {n:'CLEAN UP', i:'🧼'}, {n:'VIDEO AI', i:'🎬'}, {n:'AVATAR', i:'👤'}, {n:'AI IMAGE', i:'🖼️'}],
    edit: [{n:'SMART TRIM', i:'🎞️'}, {n:'4K RENDER', i:'💎'}, {n:'CHROMA', i:'🟩'}, {n:'STABILIZE', i:'📹'}, {n:'360 VIEW', i:'🌍'}, {n:'SLOW MO', i:'🐢'}],
    audio: [{n:'DENOISE', i:'🎙️'}, {n:'BEAT SYNC', i:'🥁'}, {n:'CLONE AI', i:'👥'}, {n:'DUBBING', i:'🌐'}, {n:'MUSIC AI', i:'🎵'}, {n:'SWAP', i:'🎭'}],
    fx: [{n:'THUMBNAIL', i:'🖼️'}, {n:'VIRAL AI', i:'📈'}, {n:'DEEPFAKE', i:'🛡️'}, {n:'SEO AI', i:'📊'}, {n:'3D INTRO', i:'🌟'}, {n:'SOCIAL KIT', i:'🔔'}]
};

let attempts = 0;
let isLocked = false;
let devClicks = 0;

// 1. SECURE LOGIN LOGIC
function secureLogin() {
    if(isLocked) return;
    const email = document.getElementById('user-email').value;
    const pass = document.getElementById('user-pass').value;

    if(email.includes('@') && pass === 'roshan02') { // SET YOUR SECURITY KEY HERE
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('app-ui').style.display = 'block';
        switchTab('ai');
    } else {
        attempts++;
        if(attempts >= 3) startLockout();
        else alert("Access Denied! Intrusion Detected.");
    }
}

function startLockout() {
    isLocked = true;
    let timeLeft = 15 * 60;
    const timer = document.getElementById('lock-timer');
    const btn = document.getElementById('login-btn');
    btn.disabled = true;
    
    const count = setInterval(() => {
        let m = Math.floor(timeLeft/60);
        let s = timeLeft % 60;
        timer.innerText = `FIREWALL LOCK: Try in ${m}m ${s}s`;
        timeLeft--;
        if(timeLeft < 0) {
            clearInterval(count);
            isLocked = false;
            attempts = 0;
            timer.innerText = "";
            btn.disabled = false;
        }
    }, 1000);
}

// 2. STUDIO ENGINE
function switchTab(cat) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`btn-${cat}`).classList.add('active');

    const grid = document.getElementById('tools-grid');
    grid.innerHTML = "";
    database[cat].forEach(tool => {
        grid.innerHTML += `
            <div class="tool-card" onclick="alert('${tool.n} Engine Loading...')">
                <i>${tool.i}</i>
                <b>${tool.n}</b>
            </div>`;
    });
}

// 3. UI & EASTER EGG
function toggleModal(id) {
    const m = document.getElementById(id);
    m.style.display = (m.style.display === 'none') ? 'flex' : 'none';
}

function pay(amt) {
    alert("Redirecting to Encrypted UPI Gateway...");
    window.location.href = `upi://pay?pa=roshan@okaxis&pn=Roshan%20Murmu&am=${amt}&cu=INR`;
}

function devClick() {
    devClicks++;
    if(devClicks >= 5) {
        alert("Developer Mode Active! \nVisiting Roshan JH02 YouTube Channel...");
        window.location.href = "https://youtube.com/@RoshanJH02"; // Secret Link
        devClicks = 0;
    }
}

// 4. ANTI-HACKER
document.onkeydown = (e) => {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) return false;
};
