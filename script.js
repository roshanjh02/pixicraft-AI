let currentPlan = "Free";
let isPremium = false;

window.selectPlan = function(name, price, element) {
    document.querySelectorAll('.plan-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    if (price > 0) {
        let confirmPurchase = confirm(`Upgrade to ${name} Plan for ₹${price}?\n\n- No Watermark\n- No Ads\n- 4K Quality`);
        if (confirmPurchase) {
            isPremium = true;
            currentPlan = name;
            document.getElementById('user-status').innerHTML = `Mode: <span style="color:#facc15">PRO (${name})</span>`;
            alert('Payment Success! PixiCraft PRO Activated.');
        }
    } else {
        isPremium = false;
        currentPlan = "Free";
        document.getElementById('user-status').innerHTML = `Mode: <span style="color:#00d2ff">Free (Ads Enabled)</span>`;
    }
};

window.runAI = async function(feature) {    // Security Lock: Bina login ke AI nahi chalega
    if (localStorage.getItem('pixicraft_auth') !== 'true') {
        alert("Bhai, pehle login toh kar lo!");
        document.getElementById('auth-overlay').style.display = 'flex';
        return; // Yahan se code ruk jayega
    }
    
    const output = document.getElementById("studio-output");
    const resImg = document.getElementById("res-img");
    const wm = document.getElementById('watermark');

    // 1. Prompt mangiye
    const prompt = window.prompt(`Bhai, ${feature} ke liye kya banau?`, "A robotic tiger in futuristic Hazaribagh, 8k");
    if (!prompt) return;

    // 2. Loading start
    output.style.display = 'block';
    output.scrollIntoView({ behavior: 'smooth' });
    resImg.src = "https://via.placeholder.com/600x400/111/fff?text=PixiCraft-AI-is-Processing...";

    if (!isPremium) {
        alert("Free Plan: Watching Ad to unlock " + feature);
        await new Promise(r => setTimeout(r, 2000)); 
    }

    // 3. Super Stable AI Engine (CORS-Free)
    try {
        console.log("PixiCraft Engine Connecting...");
        // Isme token ki zaroorat nahi hai, ye seedha image url generate karta hai
        const randomSeed = Math.floor(Math.random() * 10000);
        const engineUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&seed=${randomSeed}&model=flux&nologo=true`;

        // Image check karna
        const img = new Image();
        img.onload = function() {
            resImg.src = engineUrl;
            
            // 4. Watermark Logic
            if (isPremium) {
                wm.style.display = 'none';
                alert(`${feature} Ready! (PRO - No Watermark)`);
            } else {
                wm.style.display = 'block';
                alert(`${feature} Ready! (Watermark Added)`);
            }
        };
        img.onerror = function() {
            alert("Bhai, server busy hai. Ek baar phir try karein.");
        };
        // --- PixiCraft Login System Logic ---

// Website khulte hi check karega user login hai ya nahi
// --- PixiCraft Smart Login & Remember Me Logic ---
window.addEventListener('load', () => {
    if (localStorage.getItem('pixicraft_auth') === 'true') {
        document.getElementById('auth-overlay').style.display = 'none';
    } 
    else if (localStorage.getItem('remembered_email')) {
        document.getElementById('user-email').value = localStorage.getItem('remembered_email');
        document.getElementById('user-pass').value = localStorage.getItem('remembered_pass');
        document.getElementById('remember-me').checked = true;
    }
});

window.handleAuth = function(type) {
    const email = document.getElementById('user-email').value;
    const pass = document.getElementById('user-pass').value;
    const remember = document.getElementById('remember-me').checked;
    const msg = document.getElementById('auth-msg');

    if (email.includes('@') && pass.length >= 6) {
        if (remember) {
            localStorage.setItem('remembered_email', email);
            localStorage.setItem('remembered_pass', pass);
        } else {
            localStorage.removeItem('remembered_email');
            localStorage.removeItem('remembered_pass');
        }

        localStorage.setItem('pixicraft_auth', 'true');
        msg.style.color = "#00d2ff";
        msg.innerText = type === 'login' ? "Welcome Back! 🚀" : "Account Created! 🚀";
        
        setTimeout(() => {
            document.getElementById('auth-overlay').style.display = 'none';
        }, 1000);
    } else {
        msg.style.color = "#ff4444";
        msg.innerText = "Sahi details dalo bhai (Min 6 characters)!";
    }
};
        
    }
};
        
        

