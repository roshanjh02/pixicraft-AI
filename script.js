
// PixiCraft-AI | Developed by Roshan Murmu
// 100% WORKING: Launch Fix + Blue Glossy UI + Subscription Popup

window.userIsPro = false;

// 1. CSS INJECTION (Launch ke baad photo jaisa dikhne ke liye)
const styleLayer = document.createElement('style');
styleLayer.innerHTML = `
    .tool-card { 
        background: #1e40af !important; /* Glossy Blue जैसा आपने फोटो में भेजा */
        border-radius: 35px !important; 
        aspect-ratio: 1/1.1; 
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        border: 1px solid rgba(255,255,255,0.2);
        box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        transition: 0.3s;
    }
    .tool-card:hover { transform: translateY(-5px); background: #2563eb !important; }
    .tool-card div { font-size: 45px; margin-bottom: 12px; }
    .tool-card p { font-size: 11px; font-weight: 900; color: white; text-transform: uppercase; letter-spacing: 0.5px; }

    /* Premium Modal Design */
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 10000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(15px); }
    .plan-card { background: #0f1218; width: 90%; max-width: 360px; border-radius: 35px; padding: 30px; border: 1px solid #333; text-align: center; color: white; animation: popUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
    @keyframes popUp { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .plan-option { display: flex; align-items: center; justify-content: space-between; background: #161b22; margin: 15px 0; padding: 18px; border-radius: 22px; cursor: pointer; border: 1px solid #222; }
    .plan-icon { width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-right: 15px; }
    .p-w { background: rgba(0, 210, 255, 0.2); color: #00d2ff; box-shadow: 0 0 15px #00d2ff; }
    .p-m { background: rgba(168, 85, 247, 0.2); color: #a855f7; box-shadow: 0 0 15px #a855f7; }
    .p-y { background: rgba(255, 215, 0, 0.2); color: #ffd700; box-shadow: 0 0 20px #ffd700; border: 1px solid #ffd700; }
`;
document.head.appendChild(styleLayer);

// 2. LAUNCH FUNCTION (Ye button ko kaam karwayega)
window.handleAuth = () => {
    const email = document.getElementById('user-email').value;
    const pass = document.getElementById('user-pass').value;

    // Launch Logic
    if(email.includes('@') && pass.length >= 4) {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('app-ui').style.display = 'block';
        showCategory('ai'); // Launch hote hi AI tools dikhenge
    } else {
        alert("Bhai, sahi Email aur 4-digit Password daalo!");
    }
};

// 3. TOOLS DISPLAY (Launch ke baad ka Maal)
const features = {
    ai: [
        {n:'AI VOICE', i:'🗣️'}, {n:'SCRIPT AI', i:'📝'}, {n:'CLEAN UP', i:'🧼'},
        {n:'VIDEO AI', i:'🎬'}, {n:'AVATAR', i:'👤'}, {n:'AI IMAGE', i:'🖼️'}
    ],
    video: [
        {n:'4K UPSCALE', i:'💎'}, {n:'TRIMMER', i:'🎞️'}, {n:'GREEN SCREEN', i:'🟩'},
        {n:'STABLE', i:'📹'}, {n:'360 VIEW', i:'🌍'}, {n:'SLOW MO', i:'🐢'}
    ]
};

window.showCategory = (cat) => {
    const grid = document.getElementById('tools-display');
    grid.innerHTML = "";
    features[cat].forEach(t => {
        grid.innerHTML += `
            <div class="tool-card" onclick="runTool('${t.n}')">
                <div>${t.i}</div>
                <p>${t.n}</p>
            </div>`;
    });
};

// 4. COLORFUL POPUP (PRO TRIAL click par)
window.processPayment = () => {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'plan-modal';
    modal.innerHTML = `
        <div class="plan-card">
            <h2 style="margin-bottom:15px;">PixiCraft <span style="color:#00d2ff">PRO</span></h2>
            <div class="plan-option" onclick="confirmPay('49', 'Weekly')">
                <div style="display:flex; align-items:center;"><div class="plan-icon p-w">⚡</div><b>Weekly</b></div>
                <b style="color:#fff;">₹49</b>
            </div>
            <div class="plan-option" onclick="confirmPay('199', 'Monthly')">
                <div style="display:flex; align-items:center;"><div class="plan-icon p-m">🚀</div><b>Monthly</b></div>
                <b style="color:#fff;">₹199</b>
            </div>
            <div class="plan-option p-y" onclick="confirmPay('999', 'Yearly')">
                <div style="display:flex; align-items:center;"><div class="plan-icon">💎</div><b>Yearly VIP</b></div>
                <b style="color:#fff;">₹999</b>
            </div>
            <p onclick="document.getElementById('plan-modal').remove()" style="margin-top:20px; color:#555; cursor:pointer; font-weight:bold;">SKIP</p>
        </div>
    `;
    document.body.appendChild(modal);
};

window.confirmPay = (amt, plan) => {
    window.location.href = `upi://pay?pa=roshan@okaxis&pn=Roshan%20Murmu&am=${amt}&cu=INR`;
};

// 5. AUTO-BINDING (Buttons ko jodna)
document.addEventListener('DOMContentLoaded', () => {
    // Launch Button Fix
    const launchBtn = document.querySelector('.auth-card button');
    if(launchBtn) launchBtn.onclick = handleAuth;

    // Pro Button Fix
    const proBtn = document.getElementById('trial-badge');
    if(proBtn) proBtn.onclick = processPayment;
});
