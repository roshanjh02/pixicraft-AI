// --- ANTI-HACK & ENGINE SETUP ---
const { createFFmpeg, fetchFile } = FFmpeg;
const ffmpeg = createFFmpeg({ log: true });

const CONFIG = {
    isPremium: false,
    trialLimit: 7,
    joinDate: localStorage.getItem('pixicraft_joined') || new Date().toISOString()
};
if(!localStorage.getItem('pixicraft_joined')) localStorage.setItem('pixicraft_joined', CONFIG.joinDate);

const features = {
    ai: [
        {id:'cutout', name:'AI Cutout', icon:'✂️', pro:true},
        {id:'agen', name:'AI Image', icon:'🖼️', pro:false}
    ],
    video: [
        {id:'trim', name:'Filmora Trim', icon:'🎞️', pro:false},
        {id:'speed', name:'Fast/Slow', icon:'⚡', pro:false}
    ],
    audio: [
        {id:'denoise', name:'AI Denoise', icon:'🎙️', pro:true},
        {id:'music', name:'Vlog Music', icon:'🎵', pro:false}
    ],
    assets: [
        {id:'filters', name:'Cinematic FX', icon:'🎨', pro:false}
    ]
};

// --- SECURITY & AUTH ---
window.handleAuth = function() {
    const email = document.getElementById('user-email').value;
    const pass = document.getElementById('user-pass').value;
    
    if(email.includes('@') && pass.length >= 6) {
        localStorage.setItem('pixicraft_auth', 'true');
        localStorage.setItem('user_id', btoa(email)); // Simple encrypted ID
        location.reload();
    } else {
        alert("Security Alert: Use valid email and 6+ digit password.");
    }
};

// Anti-Cheat Trial Check
function checkAccess() {
    const start = new Date(CONFIG.joinDate).getTime();
    const now = new Date().getTime();
    
    if (now < start) return "HACK_DETECTED"; // Time tampering
    
    const diffDays = Math.ceil((now - start) / (1000 * 60 * 60 * 24));
    if (diffDays > CONFIG.trialLimit && !CONFIG.isPremium) return "EXPIRED";
    return CONFIG.isPremium ? "PREMIUM" : "FREE";
}

// --- APP CORE LOGIC ---
window.showCategory = function(cat) {
    const grid = document.getElementById('tools-display');
    grid.innerHTML = "";
    features[cat].forEach(t => {
        const lock = (t.pro && checkAccess() === "FREE") ? "🔒 " : "";
        grid.innerHTML += `
            <div class="tool-card" onclick="runTool('${t.id}')">
                <div style="font-size:24px">${t.icon}</div>
                <p style="font-size:11px; margin-top:5px;">${lock}${t.name}</p>
            </div>`;
    });
};

window.runTool = async function(id) {
    const access = checkAccess();
    const area = document.getElementById('working-area');
    
    if(access === "EXPIRED" || access === "HACK_DETECTED") {
        area.innerHTML = `<h3>Trial Expired 🛑</h3><button class="main-btn">Buy Subscription</button>`;
        return;
    }

    // Logic for Trimmer
    if(id === 'trim') {
        area.innerHTML = `<h4>Smart Trimmer</h4><input type="file" id="v-in" class="auth-input"><button onclick="executeAction('trim')" class="main-btn">Cut 5s for Reel</button>`;
    } else if(id === 'filters') {
        area.innerHTML = `<h4>Filters</h4><button onclick="applyFX('hue-rotate(90deg)')">Cyberpunk</button><button onclick="applyFX('grayscale(1)')">B&W</button>`;
    } else {
        area.innerHTML = `<h4>${id.toUpperCase()}</h4><p>Feature loading with AI...</p>`;
    }

    // Apply Watermark
    if(access === "FREE") {
        const wm = document.createElement('div');
        wm.className = "watermark"; wm.innerText = "PixiCraft AI - By Roshan Murmu";
        document.getElementById('studio-output').appendChild(wm);
    }
};

window.executeAction = async function(type) {
    const file = document.getElementById('v-in').files[0];
    if(!file) return alert("Select file first!");
    
    document.getElementById('loader').style.display = "block";
    if(!ffmpeg.isLoaded()) await ffmpeg.load();
    
    ffmpeg.FS('writeFile', 'in.mp4', await fetchFile(file));
    await ffmpeg.run('-i', 'in.mp4', '-t', '5', 'out.mp4');
    
    const data = ffmpeg.FS('readFile', 'out.mp4');
    const url = URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
    
    document.getElementById('loader').style.display = "none";
    document.getElementById('working-area').innerHTML = `<video src="${url}" controls width="100%"></video><br><a href="${url}" download class="main-btn">Download Video</a>`;
};

// --- SUPPORT & REPORTING ---
window.toggleSupport = () => {
    const m = document.getElementById('support-modal');
    m.style.display = (m.style.display === 'none') ? 'flex' : 'none';
};

window.sendReport = () => {
    const msg = document.getElementById('issue-box').value;
    const report = {
        user: localStorage.getItem('user_id'),
        issue: msg,
        device: navigator.userAgent,
        time: new Date().toISOString()
    };
    console.log("Bug Sent to Roshan Murmu:", report);
    alert("Bhai, report mil gayi hai! Hum jaldi contact karenge.");
    toggleSupport();
};

window.onload = () => {
    if(localStorage.getItem('pixicraft_auth') === 'true') {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('app-ui').style.display = 'flex';
        document.getElementById('trial-days').innerText = `Trial: Day ${Math.ceil((new Date() - new Date(CONFIG.joinDate))/(1000*60*60*24))}`;
        showCategory('ai');
    }
};

        
        

