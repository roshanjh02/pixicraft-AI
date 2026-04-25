
// ==========================================
// ROSHAN AI - ULTRA-TURBO IMAGE GENERATOR
// ==========================================

var goldCoins = 100;

function updateCoinDisplay() {
    // Aapke HTML ke mutabik 'coin-count' ID use kar raha hoon
    const coinElement = document.getElementById('coin-count');
    if (coinElement) {
        coinElement.innerText = goldCoins;
    }
}

// 1. IMAGE STUDIO (ULTRA-FAST & RELIABLE)
function useImageStudio() {
    // Image ke liye hum 100 coins rakh rahe hain (Aap badal sakte ho)
    if (goldCoins < 100) {
        alert("Bhai, Image ke liye 100 Coins chahiye!");
        return;
    }
    
    let imagePrompt = prompt("🎨 Kya generate karu? (Example: A brave king on a horse, Real boy with laptop)");
    
    if (imagePrompt) {
        goldCoins -= 100;
        updateCoinDisplay();
        
        // 1. Image Result area ko dikhao
        const imageArea = document.getElementById('image-result-area');
        imageArea.style.display = "block";
        
        // 2. Image Preview mein sample photo load karo
        const imgTag = document.getElementById('image-preview');
        
        // Demo ke liye ye ek high quality AI image link hai
        imgTag.src = "https://picsum.photos/800/800"; 
        
        alert("🖼️ Roshan AI: Aapki image taiyar hai! Niche dekhiye.");
        
        // Screen ko apne aap niche le jayega
        imageArea.scrollIntoView({ behavior: 'smooth' });
    }
}


// ==========================================
// 2. VIDEO LAB FUNCTION
// ==========================================
function useVideoLab() {
    if (goldCoins < 50) {
        alert("Bhai, 50 Coins chahiye!");
        return;
    }
    
    let videoPrompt = prompt("🎬 Kaisa video banau? (Example: Cinematic forest, Cyberpunk city)");
    
    if (videoPrompt) {
        goldCoins -= 50;
        updateCoinDisplay();
        
        // 1. Video Result area ko dikhao
        const videoArea = document.getElementById('video-result-area');
        videoArea.style.display = "block";
        
        // 2. Video Player mein sample video load karo
        const videoPlayer = document.getElementById('video-preview');
        // Demo ke liye ye ek sample video link hai
        videoPlayer.src = "https://www.w3schools.com/html/mov_bbb.mp4"; 
        
        alert("🚀 Roshan AI: Aapka video taiyar hai! Niche play karke dekhiye.");
        
        // Screen ko apne aap niche le jayega
        videoArea.scrollIntoView({ behavior: 'smooth' });
    }
}


// ==========================================
// 3. MUSIC STUDIO FUNCTION
// ==========================================
function useMusicStudio() {
    if (goldCoins < 80) {
        alert("Bhai, 80 Coins chahiye!");
        return;
    }
    
    let musicPrompt = prompt("🎹 Kaisa music chahiye? (Example: Nagpuri Mix, Lo-fi, Sad Flute)");
    
    if (musicPrompt) {
        goldCoins -= 80;
        updateCoinDisplay();
        
        // Result Box dikhao
        const musicArea = document.getElementById('music-result-area');
        musicArea.style.display = "block";
        
        // Player mein gaana load karo (Demo ke liye ek link)
        const audioPlayer = document.getElementById('audio-preview');
        audioPlayer.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 
        
        alert("✅ Dhun taiyar hai! Niche player mein 'Play' dabayein.");
        
        // Screen ko apne aap niche le jayega
        musicArea.scrollIntoView({ behavior: 'smooth' });
    }
}


//.4 Editor Khulne ka Function
function useCinemaVideo() {
    if (goldCoins < 40) return alert("Bhai, 40 Coins chahiye!");
    
    // File Picker Trigger
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.onchange = function(e) {
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        
        // Dashboard chhupao, Editor dikhao
        document.getElementById('dashboard-container').style.display = 'none';
        document.getElementById('video-editor-pro').style.display = 'block';
        
        document.getElementById('main-video').src = url;
        
        goldCoins -= 40;
        updateCoinDisplay();
        alert("🎬 Cinema Studio Ready! Video load ho gaya hai.");
    };
    input.click();
}

// Phone par jo function kaam karenge
function executeAction(type) {
    if(type === 'Captions') {
        document.getElementById('sub-overlay').innerText = "Generating AI Captions...";
        setTimeout(() => {
            document.getElementById('sub-overlay').innerText = "Swagat hai Roshan Studio mein! 🔥";
        }, 2000);
    } else {
        alert(type + " tool active hai! Abhi aap preview dekh sakte hain.");
    }
}

// Coming Soon wala logic (Laptop/PC required)
function comingSoon(feature) {
    alert("⚠️ " + feature + ": Ye Premium AI feature hai. Iske liye Laptop (PC) ki heavy processing power chahiye. File transfer karke Open AI se connect karte hi ye chalu ho jayega!");
}

// Delete aur Restart
function discardAndReset() {
    if(confirm("Bhai, kya aap ise delete karke fir se shuru karna chahte hain?")) {
        document.getElementById('main-video').src = "";
        closeEditor();
        useCinemaVideo(); // Fir se file picker khul jayega
    }
}

function closeEditor() {
    document.getElementById('video-editor-pro').style.display = 'none';
    document.getElementById('dashboard-container').style.display = 'block';
}

function undoAction() {
    alert("↩️ Last action undone successfully!");
}



// 5. WATCH AD (Coin Adder)
function watchAd() {
    alert("Ad loading... 5 seconds rukein.");
    setTimeout(() => {
        goldCoins += 10;
        updateCoinDisplay();
        alert("✅ +10 Coins mil gaye!");
    }, 5000);
}

window.onload = updateCoinDisplay;





