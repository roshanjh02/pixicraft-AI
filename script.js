// CONFIGURATION (Dummy Keys for Setup)
const STUDIO_KEYS = {
    UPI_ID: "roshan@okaxis", // Apna PhonePe/GPay ID yahan daalein
    RZP_ID: "rzp_test_dummy", // Razorpay ID (Future Use)
};

// 24 Professional Features Arrangement
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

let userIsPro = false;

// Handle Login
window.handleAuth = () => {
    const email = document.getElementById('user-email').value;
    if(email.includes('@')) {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('app-ui').style.display = 'flex';
        showCategory('ai');
    } else { alert("Please enter a valid email to continue."); }
};

// Switch Categories
window.showCategory = (cat) => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${cat}`).classList.add('active');
    const grid = document.getElementById('tools-display');
    grid.innerHTML = "";
    features[cat].forEach(t => {
        grid.innerHTML += `
            <div class="tool-card card-${t.type}" onclick="runTool('${t.id}')">
                <div>${t.icon}</div>
                <p>${t.name}</p>
            </div>`;
    });
};

// Feature Run Logic with Ad Control
window.runTool = (id) => {
    if(!userIsPro) { 
        alert("📽️ Loading Sponsored Ad... Processing " + id.toUpperCase() + " soon."); 
    }
    document.getElementById('working-area').innerHTML = `
        <h4 style="color:#00d2ff">Engine: ${id.toUpperCase()}</h4>
        <p style="font-size:12px; margin-top:10px;">Connecting to AI Neural Network...</p>
    `;
};

// Subscription Logic
window.toggleSub = () => {
    const m = document.getElementById('sub-modal');
    m.style.display = (m.style.display === 'none') ? 'flex' : 'none';
};

window.processPayment = () => {
    // Direct UPI Link for GPay/PhonePe
    const upiLink = `upi://pay?pa=${STUDIO_KEYS.UPI_ID}&pn=Roshan%20Murmu&am=199&cu=INR`;
    if(/Android|iPhone/i.test(navigator.userAgent)) { 
        window.location.href = upiLink; 
    } else { 
        alert("Please use Mobile to pay ₹199 to " + STUDIO_KEYS.UPI_ID); 
    }
    
    // Simulate Success for Testing
    setTimeout(() => {
        userIsPro = true;
        document.body.classList.add('is-pro');
        document.getElementById('trial-badge').innerText = "PRO ACTIVE 💎";
        alert("💎 Congratulations Roshan! PixiCraft PRO is now active.");
        toggleSub();
    }, 4000);
};

