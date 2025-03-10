document.getElementById("openChatbot").addEventListener("click", function() {
    let termsAccepted = localStorage.getItem("termsAccepted");

    if (!termsAccepted) {
        document.getElementById("termsModal").style.display = "flex";
    } else {
        openChatbotModal();
    }
});

document.getElementById("agreeButton").addEventListener("click", function() {
    localStorage.setItem("termsAccepted", "true");
    document.getElementById("termsModal").style.display = "none";
    openChatbotModal();
});

document.getElementById("disagreeButton").addEventListener("click", function() {
    alert("Você optou por não utilizar o Bosquinho.");
    document.getElementById("termsModal").style.display = "none";
});

document.getElementById("closeTerms").addEventListener("click", function() {
    document.getElementById("termsModal").style.display = "none";
});

document.getElementById("closeChatbot").addEventListener("click", function() {
    document.getElementById("chatbotModal").style.display = "none";
});

function openChatbotModal() {
    document.getElementById("chatbotModal").style.display = "flex";

    let chatbotContainer = document.getElementById("chatbotContainer");

    if (!chatbotContainer.innerHTML.trim()) {
        let script = document.createElement("script");
        script.type = "module";
        script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
        document.body.appendChild(script);

        let chatbot = document.createElement("zapier-interfaces-chatbot-embed");
        chatbot.setAttribute("is-popup", "false");
        chatbot.setAttribute("chatbot-id", "cm7xz18d100089x36l9v6fohn");

        chatbotContainer.appendChild(chatbot);
    }
}
