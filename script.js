// PixiCraft-AI | Developed by Roshan Murmu
// Final Fixed Script (Launch & Premium Modal)

window.userIsPro = false;

// 1. Initial Styles (Popup aur UI ke liye)
const injectPremiumStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(15px); }
        .plan-card { background: #0f1218; width: 92%; max-width: 360px; border-radius: 35px; padding: 30px; border: 1px solid #222; text-align: center; animation: springUp 0.5s ease; }
        @keyframes springUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .plan-option { display: flex; align-items: center; justify-content: space-between; background: #161b22; margin: 12px 0; padding: 18px; border-radius: 22px; cursor: pointer; border: 1px solid #222; transition: 0.3s; }
        .plan-option:hover { transform: scale(1.03); background: #1c2128; }
        .plan-icon { font-size: 24px; margin-right: 15px; text-shadow: 0 0 10px rgba(255,255,255,0.3); }
        .plan-price { font-weight: 900; color: #00d2ff; }
        .best-value { border: 2px solid #ffd700 !important; position: relative; }
        .tag-hot { position: absolute; top: -10px; right: 20px; background: #ffd700; color: #000; font-size: 10px; font-weight: 900; padding: 2px 10px; border-radius: 8px; }
    `;
    document.head.appendChild(style);
};
injectPremiumStyles();

// 2. Launch Studio Function (FIXED)
window.handleAuth = () => {
    const email = document.getElementById('user-email').value;
    const pass = document.getElementById('user-pass').value;

    if(email.includes('@') && pass.length >= 4) {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('app-ui').style.display = 'block';
        showCategory('ai'); // Default load
    } else {
        alert("Please enter valid Email and Password (min 4 chars)");
    }
};

// 3. Category Switching Logic
const features = {
    ai: [{n:'AI Voice', i:'🗣️'}, {n:'AI Image', i:'🖼️'}, {n:'Text-to-Video', i:'🎬'}, {n:'Script AI', i:'📝'}, {n:'Avatar AI', i:'👤'}, {n:'Object Removal', i:'🧼'}],
    video: [{n:'Smart Trim', i:'🎞️'}, {n:'Green Screen', i:'🟩'}, {n:'4K Upscale', i:'💎'}, {n:'Stabilizer', i:'📹'}, {n:'Metaverse 360', i:'🌍'}, {n:'Auto Caption', i:'💬'}],
    audio: [{n:'Denoise', i:'🎙️'}, {n:'Beat Sync', i:'🥁'}, {n:'Voice Clone', i:'👥'}, {n:'Dubbing', i:'🌐'}, {n:'AI Music', i:'🎵'}, {n:'Voice Swap', i:'🎭'}],
    assets: [{n:'Thumb Maker', i:'🖼️'}, {n:'Viral Predict', i:'📈'}, {n:'Deepfake Check', i:'🛡️'}, {n:'SEO AI', i:'📊'}, {n:'3D Intro', i:'🌟'}, {n:'Social Kit', i:'🔔'}]
};

window.showCategory = (cat) => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${cat}`).classList.add('active');
    
    const grid = document.getElementById('tools-display');
    grid.innerHTML = "";
    
    features[cat].forEach(t => {
        grid.innerHTML += `
            <div class="tool-card" onclick="runTool('${t.n}')">
                <div style="font-size:40px; margin-bottom:10px;">${t.i}</div>
                <p style="font-size:11px; font-weight:800; text-transform:uppercase;">${t.n}</p>
            </div>`;
    });
};

// 4. Tool Execution & Ad Logic
window.runTool = (name) => {
    if(!window.userIsPro) {
        alert("📽️ Ad Playing... Subscribe to PRO to remove ads.");
    }
    document.getElementById('working-area').innerHTML = `<h3>${name}</h3><p>Status: <span style="color:#ffd700">AI Neural Processing...</span></p>`;
};

// 5. Professional Subscription Modal
window.processPayment = () => {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'plan-modal';
    modal.innerHTML = `
        <div class="plan-card">
            <h2 style="color:#fff; margin-bottom:20px;">Unlock <span style="color:#00d2ff">PRO</span></h2>
            <div class="plan-option" onclick="confirmPay('49', 'Weekly')">
                <div style="display:flex; align-items:center;"><span class="plan-icon">⚡</span><b>Weekly</b></div>
                <div class="plan-price">₹49</div>
            </div>
            <div class="plan-option" onclick="confirmPay('199', 'Monthly')">
                <div style="display:flex; align-items:center;"><span class="plan-icon">🚀</span><b>Monthly</b></div>
                <div class="plan-price">₹199</div>
            </div>
            <div class="plan-option best-value" onclick="confirmPay('999', 'Yearly')">
                <span class="tag-hot">BEST VALUE</span>
                <div style="display:flex; align-items:center;"><span class="plan-icon">💎</span><b>Yearly VIP</b></div>
                <div class="plan-price">₹999</div>
            </div>
            <p onclick="document.getElementById('plan-modal').remove()" style="margin-top:20px; color:#555; cursor:pointer;">Skip for now</p>
        </div>
    `;
    document.body.appendChild(modal);
};

window.confirmPay = (amt, name) => {
    window.location.href = `upi://pay?pa=roshan@okaxis&pn=Roshan%20Murmu&am=${amt}&cu=INR`;
    setTimeout(() => {
        window.userIsPro = true;
        document.getElementById('plan-modal').remove();
        document.getElementById('trial-badge').innerText = "PRO ACTIVE 💎";
        alert("💎 " + name + " PRO Activated!");
    }, 4000);
};

// Auto-connect elements
document.addEventListener('DOMContentLoaded', () => {
    const pBtn = document.getElementById('trial-badge');
    if(pBtn) pBtn.onclick = () => window.processPayment();
});
  
