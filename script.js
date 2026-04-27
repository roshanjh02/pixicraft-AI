// PixiCraft-AI | Roshan Murmu Special Code

window.userIsPro = false;

// 1. CSS INJECTION (Design ke liye)
const style = document.createElement('style');
style.innerHTML = `
    .tool-card { background: #1e40af !important; border-radius: 35px !important; aspect-ratio: 1/1.1; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 8px 20px rgba(0,0,0,0.4); }
    .tool-card div { font-size: 45px; margin-bottom: 12px; }
    .tool-card p { font-size: 11px; font-weight: 900; color: white; text-transform: uppercase; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 10000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(15px); }
    .plan-card { background: #0f1218; width: 90%; max-width: 360px; border-radius: 35px; padding: 30px; border: 1px solid #333; text-align: center; color: white; }
    .plan-option { display: flex; align-items: center; justify-content: space-between; background: #161b22; margin: 15px 0; padding: 18px; border-radius: 22px; cursor: pointer; border: 1px solid #222; }
    .p-icon { width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-right: 15px; }
    .p-w { background: rgba(0, 210, 255, 0.2); color: #00d2ff; box-shadow: 0 0 10px #00d2ff; }
    .p-m { background: rgba(168, 85, 247, 0.2); color: #a855f7; box-shadow: 0 0 10px #a855f7; }
    .p-y { background: rgba(255, 215, 0, 0.2); color: #ffd700; box-shadow: 0 0 15px #ffd700; border: 1px solid #ffd700; }
`;
document.head.appendChild(style);

// 2. LAUNCH FUNCTION
window.handleAuth = () => {
    // Ye line screen change karegi
    const auth = document.getElementById('auth-overlay');
    const app = document.getElementById('app-ui');
    
    if(auth && app) {
        auth.style.display = 'none';
        app.style.display = 'block';
        showCategory('ai');
    } else {
        alert("Launch System Error: IDs not found!");
    }
};

// 3. TOOLS DISPLAY
const features = {
    ai: [{n:'AI VOICE', i:'🗣️'}, {n:'SCRIPT AI', i:'📝'}, {n:'CLEAN UP', i:'🧼'}, {n:'VIDEO AI', i:'🎬'}, {n:'AVATAR', i:'👤'}, {n:'AI IMAGE', i:'🖼️'}]
};

window.showCategory = (cat) => {
    const grid = document.getElementById('tools-display');
    if(!grid) return;
    grid.innerHTML = "";
    features[cat].forEach(t => {
        grid.innerHTML += `<div class="tool-card" onclick="runTool('${t.n}')"><div>${t.i}</div><p>${t.n}</p></div>`;
    });
};

// 4. SUBSCRIPTION POPUP
window.processPayment = () => {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'plan-modal';
    modal.innerHTML = `
        <div class="plan-card">
            <h2 style="margin-bottom:15px;">PixiCraft <span style="color:#00d2ff">PRO</span></h2>
            <div class="plan-option" onclick="confirmPay('49', 'Weekly')">
                <div style="display:flex; align-items:center;"><div class="p-icon p-w">⚡</div><b>Weekly</b></div>
                <b>₹49</b>
            </div>
            <div class="plan-option" onclick="confirmPay('199', 'Monthly')">
                <div style="display:flex; align-items:center;"><div class="p-icon p-m">🚀</div><b>Monthly</b></div>
                <b>₹199</b>
            </div>
            <div class="plan-option p-y" onclick="confirmPay('999', 'Yearly')">
                <div style="display:flex; align-items:center;"><div class="p-icon">💎</div><b>Yearly VIP</b></div>
                <b>₹999</b>
            </div>
            <p onclick="document.getElementById('plan-modal').remove()" style="margin-top:20px; color:#555; cursor:pointer;">SKIP</p>
        </div>`;
    document.body.appendChild(modal);
};

window.confirmPay = (amt, plan) => {
    window.location.href = `upi://pay?pa=roshan@okaxis&pn=Roshan%20Murmu&am=${amt}&cu=INR`;
};

window.runTool = (n) => alert("Tool: " + n + "\nSubscribe to PRO to unlock full speed!");

    
    
