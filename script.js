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

