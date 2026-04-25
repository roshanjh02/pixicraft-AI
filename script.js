// --- PIXICRAFT AI SMART LOGIC ---

// 1. Shuruat mein 100 coins
let coins = 100;

// 2. Watch Ad Function: Coins badhane ke liye
window.watchAd = function() {
    coins += 5; // 5 coins add honge
    updateCoinDisplay();
    alert("Zabardast! 5 Gold Coins mil gaye. Ab aapke paas " + coins + " coins hain.");
};

// 3. Use Feature Function: Sabhi icons ke liye ek hi logic
window.useFeature = function(featureName, cost) {
    if (coins >= cost) {
        coins -= cost; // Coins katenge
        updateCoinDisplay();
        alert(featureName + " chalu ho raha hai... " + cost + " coins kharch huye.");
        
        // Yahan aap future mein page redirection daal sakte hain
        // window.location.href = "image-studio.html"; 
    } else {
        alert("Bhai, balance kam hai! " + featureName + " ke liye " + cost + " coins chahiye. Ad dekh kar kamao.");
    }
};

// 4. Display Update karne ka function
function updateCoinDisplay() {
    // Ye line aapke screen par jahan bhi "Coins: 100" likha hai usko dhoondh kar badal degi
    let coinBtn = document.querySelector('.coins-btn');
    let coinText = document.querySelector('.coins-text');
    let coinId = document.getElementById('coin-count');

    if(coinBtn) coinBtn.innerText = "Coins: " + coins;
    if(coinText) coinText.innerText = "Coins: " + coins;
    if(coinId) coinId.innerText = coins;
}

// 5. Page load hote hi display sahi karein
document.addEventListener('DOMContentLoaded', updateCoinDisplay);

