
// 🔐 AUTH LOGIC
function showAuth(type) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('forgot-form').style.display = 'none';
    document.getElementById(type + '-form').style.display = 'block';

    document.querySelectorAll('.auth-tabs button').forEach(b => b.classList.remove('active'));
    if(type !== 'forgot') document.getElementById('tab-' + type).classList.add('active');
}

function handleAuth(event, type) {
    event.preventDefault();
    if(type === 'login') {
        const email = document.getElementById('l-email').value;
        // DIRECT LOGIN FOR ROSHAN
        if(email === "roshanmurmu273@gmail.com") {
            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('app-ui').style.display = 'block';
            alert("Welcome Roshan! Your Pro Dashboard is ready.");
            // 24 Icons load karne ka function yahan call karein
            if(typeof switchTab === 'function') switchTab('ai');
        } else {
            alert("Invalid Login Credentials.");
        }
    } else {
        alert("Registration successful! Now Login.");
        showAuth('login');
    }
}

function toggleChat() {
    const win = document.getElementById('chat-window');
    win.style.display = (win.style.display === 'none') ? 'block' : 'none';
}
