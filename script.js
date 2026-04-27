
// 🛠️ TOOLS DATA (24 ICONS)
const studioData = {
    'ai': [
        {n: 'AI IMAGE', i: '🎨'}, {n: 'AI VOICE', i: '🎙️'}, {n: 'SCRIPT AI', i: '📝'}, {n: 'AVATAR', i: '👤'},
        {n: 'RE-FACE', i: '🎭'}, {n: '3D ART', i: '🧊'}, {n: 'LOGO GEN', i: '💎'}, {n: 'BG REMOVE', i: '🖼️'}
    ],
    'editing': [
        {n: '4K RENDER', i: '📽️'}, {n: 'LUTs', i: '🌈'}, {n: 'TRIMMER', i: '✂️'}, {n: 'MOTION', i: '🏃'},
        {n: 'TEXT-TO-VFX', i: '✨'}, {n: 'SUBTITLE', i: '💬'}, {n: 'COLOR FIX', i: '🖍️'}, {n: 'ANIMATE', i: '🎞️'}
    ],
    'visuals': [
        {n: 'THUMBNAIL', i: '🖼️'}, {n: 'VIRAL AI', i: '📈'}, {n: 'DEEPFAKE', i: '🛡️'}, {n: 'SEO AI', i: '📊'},
        {n: '3D INTRO', i: '🌟'}, {n: 'SOCIAL KIT', i: '🔔'}, {n: 'POSTER', i: '🪧'}, {n: 'NFT MAKER', i: '🪙'}
    ]
};

// 🔐 AUTH LOGIC
function showAuth(type) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('forgot-form').style.display = 'none';
    document.getElementById(`${type}-form`).style.display = 'block';
    document.querySelectorAll('.auth-tabs button').forEach(b => b.classList.remove('active'));
    if(type !== 'forgot') document.getElementById(`tab-${type}`).classList.add('active');
}

function handleAuth(e, type) {
    e.preventDefault();
    if(type === 'login') {
        document.getElementById('auth-container').style.display = 'none';
        alert("Welcome, Roshan Murmu!");
        switchTab('ai'); // Load icons after login
    } else {
        alert("Process Successful! Please proceed to Login.");
        showAuth('login');
    }
}

// 🎨 STUDIO LOGIC
let currentStyle = 'cinematic';
let currentRatio = '1024x1024';

function openStudio(name) {
    if(name === 'AI IMAGE') {
        document.getElementById('ai-image-modal').style.display = 'flex';
    } else {
        document.getElementById('sub-modal').style.display = 'flex';
    }
}

function toggleModal(id) { document.getElementById(id).style.display = 'none'; }

function selectStyle(el, s) {
    document.querySelectorAll('.style-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active'); currentStyle = s;
}

function setRatio(el, r) {
    document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    currentRatio = (r === '1:1') ? '1024x1024' : '1280x720';
}

async function startGeneration() {
    const prompt = document.getElementById('ai-prompt').value;
    if(!prompt) return alert("Kuch toh likho!");
    
    document.getElementById('loading-overlay').style.display = 'block';
    document.getElementById('result-display').innerHTML = '';
    
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt + ',' + currentStyle)}?width=${currentRatio.split('x')[0]}&height=${currentRatio.split('x')[1]}&seed=${Math.random()}&nologo=true`;
    
    const img = new Image();
    img.src = url; img.className = 'final-img';
    img.onload = () => {
        document.getElementById('loading-overlay').style.display = 'none';
        document.getElementById('result-display').appendChild(img);
    };
}

// 💬 CHAT LOGIC
function toggleChat() {
    const w = document.getElementById('chat-window');
    w.style.display = (w.style.display === 'none') ? 'block' : 'none';
}

// 🚀 INITIALIZE TOOLS
function switchTab(cat) {
    const grid = document.getElementById('tools-grid');
    grid.innerHTML = "";
    studioData[cat].forEach(t => {
        grid.innerHTML += `<div class="tool-item" onclick="openStudio('${t.n}')"><i>${t.i}</i><b>${t.n}</b></div>`;
    });
}
