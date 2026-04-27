// PixiCraft-AI | Developed by Roshan Murmu
// Logic for Navigation, Tools, and Support

const features = {
    ai: [
        {id:'voice', name:'AI Voiceover', icon:'🗣️', type:'ai'},
        {id:'script', name:'AI Script', icon:'📝', type:'ai'},
        {id:'obj-rem', name:'Object Remove', icon:'🧼', type:'ai'},
        {id:'txt-vid', name:'Text to Video', icon:'🎬', type:'ai'},
        {id:'avatar', name:'Digital Human', icon:'👤', type:'ai'},
        {id:'gen-img', name:'AI Image', icon:'🖼️', type:'ai'}
    ],
    video: [
        {id:'trim', name:'Smart Trim', icon:'🎞️', type:'video'},
        {id:'green', name:'Green Screen', icon:'🟩', type:'video'},
        {id:'upscale', name:'4K Upscale', icon:'💎', type:'video'},
        {id:'stable', name:'Stabilizer', icon:'📹', type:'video'},
        {id:'meta', name:'Metaverse 360', icon:'🌍', type:'video'},
        {id:'slo-mo', name:'Super SloMo', icon:'🐢', type:'video'}
    ],
    audio: [
        {id:'denoise', name:'AI Denoise', icon:'🎙️', type:'audio'},
        {id:'beats', name:'Beat Sync', icon:'🥁', type:'audio'},
        {id:'clone', name:'Voice Clone', icon:'👥', type:'audio'},
        {id:'translate', name:'Dubbing', icon:'🌐', type:'audio'},
        {id:'music', name:'AI Music', icon:'🎵', type:'audio'},
        {id:'changer', name:'Voice Swap', icon:'🎭', type:'audio'}
    ],
    assets: [
        {id:'thumb', name:'Thumb Maker', icon:'🖼️', type:'assets'},
        {id:'viral', name:'Viral Predict', icon:'📈', type:'assets'},
        {id:'deep', name:'Deepfake Check', icon:'🛡️', type:'assets'},
        {id:'seo', name:'SEO AI', icon:'📊', type:'assets'},
        {id:'intro', name:'3D Intro', icon:'🌟', type:'assets'},
        {id:'overlay', name:'Social Kit', icon:'🔔', type:'assets'}
    ]
};

// 1. Authentication Logic
window.handleAuth = () => {
    const email = document.getElementById('user-email').value;
    const pass = document.getElementById('user-pass').value;

    if(email.includes('@') && pass.length > 3) {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('app-ui').style.display = 'block';
        showCategory('ai'); // Default category
    } else {
        alert("Please enter valid Email and Password!");
    }
};

// 2. Category Switching (Horizontal Nav Logic)
window.showCategory = (cat) => {
    // Buttons reset
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${cat}`).classList.add('active');

    // Grid Update
    const grid = document.getElementById('tools-display');
    grid.innerHTML = ""; // Clear old icons

    features[cat].forEach(tool => {
        const card = document.createElement('div');
        card.className = `tool-card card-${tool.type}`;
        card.onclick = () => runTool(tool.name);
        card.innerHTML = `
            <div>${tool.icon}</div>
            <p>${tool.name}</p>
        `;
        grid.appendChild(card);
    });
};

// 3. Tool Execution Logic
window.runTool = (name) => {
    const workArea = document.getElementById('working-area');
    workArea.innerHTML = `
        <h3 style="color:#00d2ff; margin-bottom:10px;">${name}</h3>
        <p style="font-size:14px;">Status: <span style="color:#ffd700;">Initializing AI Engine...</span></p>
        <div style="margin-top:15px; font-size:10px; opacity:0.5;">Processing on PixiCraft Neural Network</div>
    `;
};

// 4. Support Modal Logic
window.toggleSupport = () => {
    const modal = document.getElementById('support-modal');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'flex' : 'none';
};

// 5. Basic Security (Right Click Disable)
document.addEventListener('contextmenu', event => event.preventDefault());
// --- PREMIMUM COLORFUL SUBSCRIPTION MODAL (JS ONLY) ---

const injectStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(8px); }
        .plan-card { background: #11141b; width: 90%; max-width: 350px; border-radius: 30px; padding: 25px; border: 1px solid #333; text-align: center; animation: zoomIn 0.3s ease; }
        @keyframes zoomIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .plan-title { font-size: 20px; font-weight: 900; color: #fff; margin-bottom: 5px; }
        .plan-option { display: flex; align-items: center; justify-content: space-between; background: #1a1e26; margin: 12px 0; padding: 15px; border-radius: 20px; cursor: pointer; transition: 0.2s; border: 1px solid transparent; }
        .plan-option:hover { border-color: #00d2ff; background: #1e2530; }
        .plan-info { display: flex; align-items: center; gap: 12px; }
        .plan-icon { font-size: 24px; }
        .plan-name { font-weight: 800; font-size: 14px; text-align: left; }
        .plan-price { font-weight: 900; color: #00d2ff; }
        .best-value { border: 1px solid #ffd700 !important; position: relative; }
        .tag-hot { position: absolute; top: -10px; right: 10px; background: #ffd700; color: #000; font-size: 9px; font-weight: 900; padding: 2px 8px; border-radius: 10px; }
        .close-modal { margin-top: 15px; color: #555; font-size: 12px; cursor: pointer; font-weight: bold; }
    `;
    document.head.appendChild(style);
};
injectStyles();

window.processPayment = () => {
    // Modal HTML create karna
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'plan-modal';
    modal.innerHTML = `
        <div class="plan-card">
            <h2 class="plan-title">PixiCraft <span style="color:#00d2ff">PRO</span></h2>
            <p style="color:#777; font-size:11px; margin-bottom:20px;">Unlock Premium AI Features</p>
            
            <div class="plan-option" onclick="confirmSub('49', 'Weekly')">
                <div class="plan-info">
                    <span class="plan-icon">⚡</span>
                    <div class="plan-name">Weekly Access<br><span style="font-size:9px; color:#555; font-weight:normal;">Short term boost</span></div>
                </div>
                <div class="plan-price">₹49</div>
            </div>

            <div class="plan-option" onclick="confirmSub('199', 'Monthly')">
                <div class="plan-info">
                    <span class="plan-icon">🚀</span>
                    <div class="plan-name">Monthly Plan<br><span style="font-size:9px; color:#555; font-weight:normal;">Most Popular</span></div>
                </div>
                <div class="plan-price">₹199</div>
            </div>

            <div class="plan-option best-value" onclick="confirmSub('999', 'Yearly')">
                <span class="tag-hot">BEST VALUE</span>
                <div class="plan-info">
                    <span class="plan-icon">💎</span>
                    <div class="plan-name">Yearly VIP<br><span style="font-size:9px; color:#555; font-weight:normal;">Full Studio Access</span></div>
                </div>
                <div class="plan-price">₹999</div>
            </div>

            <p class="close-modal" onclick="document.getElementById('plan-modal').remove()">Maybe Later</p>
        </div>
    `;
    document.body.appendChild(modal);
};

window.confirmSub = (amt, name) => {
    const upiLink = `upi://pay?pa=roshan@okaxis&pn=Roshan%20Murmu&am=${amt}&cu=INR`;
    alert("Redirecting to Secure Payment for " + name + " PRO...");
    
    if(/Android|iPhone/i.test(navigator.userAgent)) {
        window.location.href = upiLink;
    } else {
        alert("Please pay ₹" + amt + " to: roshan@okaxis");
    }

    // Success simulation
    setTimeout(() => {
        window.userIsPro = true;
        document.getElementById('plan-modal').remove();
        const badge = document.getElementById('trial-badge');
        if(badge) { badge.innerText = "PRO ACTIVE 💎"; badge.style.color = "#ffd700"; }
        alert("💎 Congratulations! " + name + " PRO Activated.");
    }, 4000);
};

// Button connect
const proBtn = document.getElementById('trial-badge');
if(proBtn) proBtn.onclick = () => window.processPayment();

