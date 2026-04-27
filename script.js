
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
/
// --- PREMIMUM COLORFUL SUBSCRIPTION MODAL (V2 - BRIGHT ICONS) ---

const injectAdvancedStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(15px); }
        .plan-card { background: #0f1218; width: 92%; max-width: 360px; border-radius: 35px; padding: 30px; border: 1px solid #222; text-align: center; box-shadow: 0 25px 50px rgba(0,0,0,0.5); animation: springUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes springUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        
        .plan-title { font-size: 24px; font-weight: 900; color: #fff; margin-bottom: 8px; }
        .plan-option { display: flex; align-items: center; justify-content: space-between; background: #161b22; margin: 15px 0; padding: 18px; border-radius: 22px; cursor: pointer; transition: 0.3s; border: 1px solid #222; position: relative; }
        
        /* Glow Effects for Icons */
        .plan-icon-box { width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-right: 15px; }
        .icon-weekly { background: rgba(0, 210, 255, 0.1); color: #00d2ff; text-shadow: 0 0 10px #00d2ff; }
        .icon-monthly { background: rgba(168, 85, 247, 0.1); color: #a855f7; text-shadow: 0 0 10px #a855f7; }
        .icon-yearly { background: rgba(255, 215, 0, 0.1); color: #ffd700; text-shadow: 0 0 15px #ffd700; }
        
        .plan-option:hover { transform: scale(1.03); background: #1c2128; border-color: #444; }
        .plan-name { font-weight: 800; font-size: 15px; text-align: left; color: #eee; }
        .plan-price { font-weight: 900; font-size: 18px; color: #fff; }
        
        .best-value { border: 2px solid #ffd700 !important; box-shadow: 0 0 20px rgba(255, 215, 0, 0.2); }
        .tag-hot { position: absolute; top: -12px; right: 20px; background: linear-gradient(90deg, #ffd700, #ffae00); color: #000; font-size: 10px; font-weight: 900; padding: 3px 10px; border-radius: 8px; box-shadow: 0 4px 10px rgba(255, 215, 0, 0.3); }
        
        .close-modal { margin-top: 20px; color: #666; font-size: 13px; cursor: pointer; transition: 0.2s; }
        .close-modal:hover { color: #fff; }
    `;
    document.head.appendChild(style);
};
injectAdvancedStyles();

window.processPayment = () => {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'plan-modal';
    modal.innerHTML = `
        <div class="plan-card">
            <h2 class="plan-title">PixiCraft <span style="color:#00d2ff">PRO</span></h2>
            <p style="color:#555; font-size:12px; margin-bottom:25px;">Unlimited Access • No Ads • 4K Export</p>
            
            <div class="plan-option" onclick="confirmSub('49', 'Weekly')">
                <div style="display:flex; align-items:center;">
                    <div class="plan-icon-box icon-weekly">⚡</div>
                    <div class="plan-name">Weekly<br><span style="font-size:10px; color:#555; font-weight:400;">Try it out</span></div>
                </div>
                <div class="plan-price">₹49</div>
            </div>

            <div class="plan-option" onclick="confirmSub('199', 'Monthly')">
                <div style="display:flex; align-items:center;">
                    <div class="plan-icon-box icon-monthly">🚀</div>
                    <div class="plan-name">Monthly<br><span style="font-size:10px; color:#555; font-weight:400;">Most Popular</span></div>
                </div>
                <div class="plan-price">₹199</div>
            </div>

            <div class="plan-option best-value" onclick="confirmSub('999', 'Yearly')">
                <span class="tag-hot">SAVINGS 60%</span>
                <div style="display:flex; align-items:center;">
                    <div class="plan-icon-box icon-yearly">💎</div>
                    <div class="plan-name">Yearly VIP<br><span style="font-size:10px; color:#555; font-weight:400;">Best for Creators</span></div>
                </div>
                <div class="plan-price">₹999</div>
            </div>

            <p class="close-modal" onclick="document.getElementById('plan-modal').remove()">Skip for now</p>
        </div>
    `;
    document.body.appendChild(modal);
};

window.confirmSub = (amt, name) => {
    const upiLink = `upi://pay?pa=roshan@okaxis&pn=Roshan%20Murmu&am=${amt}&cu=INR`;
    
    if(/Android|iPhone/i.test(navigator.userAgent)) {
        window.location.href = upiLink;
    } else {
        alert("Please pay ₹" + amt + " to: roshan@okaxis");
    }

    setTimeout(() => {
        window.userIsPro = true;
        const m = document.getElementById('plan-modal');
        if(m) m.remove();
        const badge = document.getElementById('trial-badge');
        if(badge) { 
            badge.innerText = "PRO ACTIVE 💎"; 
            badge.style.color = "#ffd700"; 
            badge.style.borderColor = "#ffd700";
        }
        alert("💎 PRO Activated! Enjoy your premium experience.");
    }, 4000);
};

// Auto-link button
const pBtn = document.getElementById('trial-badge');
if(pBtn) pBtn.onclick = () => window.processPayment();
