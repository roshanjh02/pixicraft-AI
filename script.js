
let currentPlan = "Free";
let isPremium = false;

window.selectPlan = function(name, price, element) {
    // Remove active class from all buttons
    document.querySelectorAll('.plan-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    if (price > 0) {
        let confirmPurchase = confirm(`Upgrade to ${name} Plan for ₹${price}?\n\n- No Watermark\n- No Ads\n- 4K Quality`);
        if (confirmPurchase) {
            isPremium = true;
            currentPlan = name;
            document.getElementById('user-status').innerHTML = `Mode: <span style="color:#facc15">PRO (${name})</span>`;
            alert(`Payment Success! You are now a ${name} member.`);
        }
    } else {
        isPremium = false;
        currentPlan = "Free";
        document.getElementById('user-status').innerHTML = `Mode: <span style="color:#00d2ff">Free (Ads Enabled)</span>`;
    }
};

window.runAI = async function(feature) {
    const output = document.getElementById('studio-output');
    const wm = document.getElementById('watermark');

    if (!isPremium) {
        alert("Free Plan: Watching Ad to unlock " + feature);
        await new Promise(r => setTimeout(r, 3000)); // Simulate Ad
    }

    output.style.display = 'block';
    output.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        if (!isPremium) {
            wm.style.display = 'block';
            alert(`${feature} Ready! (Watermark Added)`);
        } else {
            wm.style.display = 'none';
            alert(`${feature} Ready! (PRO Quality - No Watermark)`);
        }
    }, 2000);
};
