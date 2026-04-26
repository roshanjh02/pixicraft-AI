const features = {
    ai: [
        {id:'cutout', name:'AI Cutout', icon:'✂️', type:'ai'},
        {id:'voice', name:'AI Voiceover', icon:'🗣️', type:'ai'},
        {id:'script', name:'AI Script', icon:'📝', type:'ai'},
        {id:'txt-vid', name:'Text to Video', icon:'🎬', type:'ai'},
        {id:'avatar', name:'Digital Avatar', icon:'👤', type:'ai'},
        {id:'obj-rem', name:'Object Remove', icon:'🧼', type:'ai'}
    ],
    video: [
        {id:'trim', name:'Smart Trim', icon:'🎞️', type:'video'},
        {id:'green', name:'Green Screen', icon:'🟩', type:'video'},
        {id:'caption', name:'Auto Caption', icon:'💬', type:'video'},
        {id:'stable', name:'Stabilizer', icon:'📹', type:'video'},
        {id:'meta', name:'Metaverse 360', icon:'🌍', type:'video'},
        {id:'upscale', name:'4K Upscale', icon:'💎', type:'video'}
    ],
    audio: [
        {id:'denoise', name:'AI Denoise', icon:'🎙️', type:'audio'},
        {id:'changer', name:'Voice Changer', icon:'🎭', type:'audio'},
        {id:'beats', name:'Beat Sync', icon:'🥁', type:'audio'},
        {id:'clone', name:'Voice Clone', icon:'👥', type:'audio'},
        {id:'music', name:'SFX Library', icon:'🎵', type:'audio'},
        {id:'eq', name:'Pro EQ', icon:'🎚️', type:'audio'}
    ],
    assets: [
        {id:'thumb', name:'Thumb Maker', icon:'🖼️', type:'assets'},
        {id:'intro', name:'Intro Maker', icon:'🎬', type:'assets'},
        {id:'viral', name:'Viral Predict', icon:'📈', type:'assets'},
        {id:'deep', name:'Deepfake Check', icon:'🛡️', type:'assets'},
        {id:'filters', name:'Trending FX', icon:'🎨', type:'assets'},
        {id:'seo', name:'SEO Predictor', icon:'📊', type:'assets'}
    ]
};

window.handleAuth = () => {
    const email = document.getElementById('user-email').value;
    if(email.includes('@')) {
        localStorage.setItem('px_auth', 'true');
        location.reload();
    } else alert("Professional Email is required!");
};

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

window.runTool = (id) => {
    const area = document.getElementById('working-area');
    area.innerHTML = `<h4>Initializing ${id.toUpperCase()} Engine</h4><p>Connecting to AI Neural Network...</p>`;
};

window.toggleSupport = () => {
    const m = document.getElementById('support-modal');
    m.style.display = (m.style.display === 'none') ? 'flex' : 'none';
};

window.onload = () => {
    if(localStorage.getItem('px_auth') === 'true') {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('app-ui').style.display = 'flex';
        showCategory('ai');
    }
};

