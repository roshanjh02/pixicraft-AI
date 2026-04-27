// --- 1. CSS INJECTOR (Layout fix karne ke liye) ---
const styleFix = document.createElement('style');
styleFix.innerHTML = `
    .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding: 20px; }
    .tool-card { aspect-ratio: 1/1; border-radius: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid #222; background: #11141b; }
    
    /* Subscription Modal Design */
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 10000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); }
    .plan-card { background: #0f1218; width: 90%; max-width: 360px; border-radius: 35px; padding: 30px; border: 1px solid #333; text-align: center; }
    .plan-option { display: flex; align-items: center; justify-content: space-between; background: #161b22; margin: 15px 0; padding: 18px; border-radius: 22px; cursor: pointer; border: 1px solid #222; transition: 0.3s; }
    .plan-option:hover { transform: scale(1.03); border-color: #00d2ff; }
    .plan-icon-box { width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-right: 15px; }
    .icon-w { background: rgba(0, 210, 255, 0.1); color: #00d2ff; text-shadow: 0 0 10px #00d2ff; }
    .icon-m { background: rgba(168, 85, 247, 0.1); color: #a855f7; text-shadow: 0 0 10px #a855f7; }
    .icon-y { background: rgba(255, 215, 0, 0.1); color: #ffd700; text-shadow: 0 0 15px #ffd700; }
    .best-value { border: 2px solid #ffd700 !important; position: relative; }
    .tag-hot { position: absolute; top: -12px; right: 20px; background: #ffd700; color: #000; font-size: 10px; font-weight: 900; padding: 3px 10px; border-radius: 8px; }
`;
document.head.appendChild(styleFix);

// --- 2. LOGIC (Launch & Modal) ---
window.userIsPro = false;

window.handleAuth = () => {
    document.getElementById('auth-overlay').style.display = 'none';
    document.getElementById('app-ui').style.display = 'block';
    showCategory('ai');
};

const features = {
    ai: [{n:'AI VOICE', i:'🗣️'}, {n:'AI IMAGE', i:'🖼️'}, {n:'TEXT-TO-VIDEO', i:'🎬'}, {n:'SCRIPT AI', i:'📝'}, {n:'AVATAR AI', i:'👤'}, {n:'OBJECT REMOVAL', i:'🧼'}],
    video: [{n:'SMART TRIM', i:'🎞️'}, {n:'GREEN SCREEN', i:'🟩'}, {n:'4K UPSCALE', i:'💎'}, {n:'STABILIZER', i:'📹'}, {n:'METAVERSE 360', i:'🌍'}, {n:'AUTO CAPTION', i:'💬'}]
};

window.showCategory = (cat) => {
    const grid = document.getElementById('tools-display');
    grid.innerHTML = "";
    features[cat].forEach(t => {
        grid.innerHTML += `
            <div class="tool-card" onclick="runTool('${t.n}')">
                <div style="font-size:45px; margin-bottom:12px;">${t.i}</div>
                <p style="font-size:11px; font-weight:900;">${t.n}</p>
            </div>`;
    });
};

window.runTool = (name) => {
    if(!window.userIsPro) alert("📽️ Sponsored Ad... Subscribe to remove.");
    document.getElementById('working-area').innerHTML = `<h3>${name}</h3><p>Status: <span style="color:#ffd700">Processing...</span></p>`;
};

// --- 3. PREMIUM POPUP (Icon wala) ---
window.processPayment = () => {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'plan-modal';
    modal.innerHTML = `
        <div class="plan-card">
            <h2 style="color:#fff; margin-bottom:20px;">Choose <span style="color:#00d2ff">PRO</span> Plan</h2>
            <div class="plan-option" onclick="confirmPay('49', 'Weekly')">
                <div style="display:flex; align-items:center;">
                    <div class="plan-icon-box icon-w">⚡</div>
                    <div style="text-align:left;"><b style="color:#fff;">Weekly</b><br><small style="color:#555;">Try for 7 days</small></div>
                </div>
                <div style="font-weight:900; color:#fff;">₹49</div>
            </div>
            <div class="plan-option" onclick="confirmPay('199', 'Monthly')">
                <div style="display:flex; align-items:center;">
                    <div class="plan-icon-box icon-m">🚀</div>
                    <div style="text-align:left;"><b style="color:#fff;">Monthly</b><br><small style="color:#555;">Most Popular</small></div>
                </div>
                <div style="font-weight:900; color:#fff;">₹199</div>
            </div>
            <div class="plan-option best-value" onclick="confirmPay('999', 'Yearly')">
                <span class="tag-hot">BEST VALUE</span>
                <div style="display:flex; align-items:center;">
                    <div class="plan-icon-box icon-y">💎</div>
                    <div style="text-align:left;"><b style="color:#fff;">Yearly VIP</b><br><small style="color:#555;">Full Studio Access</small></div>
                </div>
                <div style="font-weight:900; color:#fff;">₹999</div>
            </div>
            <p onclick="document.getElementById('plan-modal').remove()" style="margin-top:20px; color:#555; cursor:pointer; font-weight:bold;">SKIP FOR NOW</p>
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

// Launch fix
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('trial-badge');
    if(btn) btn.onclick = () => window.processPayment();
});

