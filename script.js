
// PixiCraft-AI | Roshan Murmu Special Code

const features = {
    ai: [
        {n:'AI VOICE', i:'🗣️'}, {n:'SCRIPT AI', i:'📝'}, {n:'CLEAN UP', i:'🧼'},
        {n:'VIDEO AI', i:'🎬'}, {n:'AVATAR', i:'👤'}, {n:'AI IMAGE', i:'🖼️'}
    ],
    edit: [
        {n:'SMART TRIM', i:'🎞️'}, {n:'GREEN SCREEN', i:'🟩'}, {n:'4K UPSCALE', i:'💎'},
        {n:'STABILIZER', i:'📹'}, {n:'360 VIEW', i:'🌍'}, {n:'SLOW MO', i:'🐢'}
    ],
    audio: [
        {n:'DENOISE', i:'🎙️'}, {n:'BEAT SYNC', i:'🥁'}, {n:'VOICE CLONE', i:'👥'},
        {n:'DUBBING', i:'🌐'}, {n:'MUSIC AI', i:'🎵'}, {n:'SWAP', i:'🎭'}
    ],
    fx: [
        {n:'THUMBNAIL', i:'🖼️'}, {n:'VIRAL AI', i:'📈'}, {n:'DEEPFAKE', i:'🛡️'},
        {n:'SEO AI', i:'📊'}, {n:'3D INTRO', i:'🌟'}, {n:'SOCIAL KIT', i:'🔔'}
    ]
};

// 1. Launch Function
window.handleAuth = () => {
    const email = document.getElementById('user-email').value;
    if(email.includes('@')) {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('app-ui').style.display = 'block';
        showCategory('ai');
    } else {
        alert("Please enter a valid email!");
    }
};

// 2. Category Switcher (Sahi logic)
window.showCategory = (cat) => {
    // Update active button color
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.getElementById(`btn-${cat}`);
    if(targetBtn) targetBtn.classList.add('active');

    const grid = document.getElementById('tools-display');
    grid.innerHTML = "";
    
    // Check if category exists
    if(features[cat]) {
        features[cat].forEach(t => {
            grid.innerHTML += `
                <div class="tool-card card-${cat}" onclick="runTool('${t.n}')">
                    <div>${t.i}</div>
                    <p>${t.n}</p>
                </div>`;
        });
    }
};

// 3. Help Toggle
window.toggleSupport = () => {
    const modal = document.getElementById('support-modal');
    modal.style.display = (modal.style.display === 'none') ? 'flex' : 'none';
};

// 4. Payment & Run
window.processPayment = () => {
    window.location.href = `upi://pay?pa=roshan@okaxis&pn=Roshan%20Murmu&am=49&cu=INR`;
};

window.runTool = (n) => alert("Opening: " + n + "\nSubscribe to PRO for full access!");
