// CREATE LAUNCHER
const launcher = document.createElement("img");

launcher.src = "https://guoofs.github.io/Grand_Chatbot/Logo_footer.png"; 
launcher.title = "Chat to our Oddfellows Assistant";
launcher.alt = "Chat to our Oddfellows Assistant";
launcher.style.position = "fixed";
launcher.style.top = "100px"; 
launcher.style.right = "20px";
launcher.style.width = "180px";
launcher.style.height = "auto";
launcher.style.background = "red";
launcher.style.padding = "6px";
launcher.style.border = "4px solid white";
launcher.style.borderRadius = "50px";
launcher.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
launcher.style.color = "white";
launcher.style.display = "flex";
launcher.style.alignItems = "center";
launcher.style.justifyContent = "center";
launcher.style.cursor = "pointer";
launcher.style.zIndex = "99999";
document.body.appendChild(launcher);

// CREATE POPUP
const popup = document.createElement("div");
popup.style.position = "fixed";
popup.style.bottom = "80px";
popup.style.right = "20px";
popup.style.width = "360px";
popup.style.height = "520px";
popup.style.background = "white";
popup.style.border = "1px solid #ccc";
popup.style.borderRadius = "8px";
popup.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
popup.style.display = "none";
popup.style.flexDirection = "column";
popup.style.overflow = "hidden";
popup.style.zIndex = "99999";
document.body.appendChild(popup);

// HEADER BAR
const header = document.createElement("div");
header.innerText = "Oddfellows Assistant";
header.style.background = "#0078d4";
header.style.color = "white";
header.style.padding = "10px";
header.style.fontSize = "14px";
popup.appendChild(header);

// IFRAME
const frame = document.createElement("iframe");
frame.src = "https://guoofs.github.io/Grand_Chatbot/";
frame.style.width = "100%";
frame.style.height = "100%";
frame.style.border = "none";
popup.appendChild(frame);

// TOGGLE BEHAVIOUR
launcher.onclick = () => {
  popup.style.display =
    popup.style.display === "none" ? "flex" : "none";
};
