let currentPlan = "Free";
let isPremium = false;
const HF_TOKEN = "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"; // Aapka fresh token

window.selectPlan = function(name, price, element) {
    document.querySelectorAll('.plan-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    if (price > 0) {
        let confirmPurchase = confirm(`Upgrade to ${name} Plan for ₹${price}?\n\n- No Watermark\n- No Ads\n- 4K Quality`);
        if (confirmPurchase) {
            isPremium = true;
            currentPlan = name;
            document.getElementById('user-status').innerHTML = `Mode: <span style="color:#facc15">PRO (${name})</span>`;
            alert('Payment Success! You are now a ' + name + ' member.');
        }
    } else {
        isPremium = false;
        currentPlan = "Free";
        document.getElementById('user-status').innerHTML = `Mode: <span style="color:#00d2ff">Free (Ads Enabled)</span>`;
    }
};

window.runAI = async function(feature) {
    const output = document.getElementById("studio-output");
    const resImg = document.getElementById("res-img");
    const wm = document.getElementById('watermark');

    // 1. Prompt mangiye
    const prompt = window.prompt(`Bhai, ${feature} ke liye kya banau?`, "A robotic lion in space, 8k, cinematic");
    if (!prompt) return;

    // 2. Loading start
    output.style.display = 'block';
    output.scrollIntoView({ behavior: 'smooth' });
    resImg.src = "https://via.placeholder.com/600x400/111/fff?text=PixiCraft-AI-is-Thinking...";

    if (!isPremium) {
        alert("Free Plan: Watching Ad to unlock " + feature);
        await new Promise(r => setTimeout(r, 2000)); 
    }

    // 3. Asli AI Call (Hugging Face)
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
            {
                headers: { Authorization: `Bearer ${HF_TOKEN}` },
                method: "POST",
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        if (response.ok) {
            const blob = await response.blob();
            const imgUrl = URL.createObjectURL(blob);
            resImg.src = imgUrl;

            // 4. Watermark Logic
            if (isPremium) {
                wm.style.display = 'none';
                alert(`${feature} Ready! (PRO Quality - No Watermark)`);
            } else {
                wm.style.display = 'block';
                alert(`${feature} Ready! (Watermark Added)`);
            }
        } else {
            alert("Bhai, server thoda busy hai. Ek baar phir try karein!");
        }
    } catch (error) {
        console.error(error);
        alert("Internet issue ya connection error!");
    }
};
