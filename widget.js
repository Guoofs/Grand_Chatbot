// CIRCLE BUTTON
const launcher = document.createElement("div");

launcher.style.position = "fixed";
launcher.style.top = "150px";
launcher.style.right = "30px";

launcher.style.width = "95px";   //
launcher.style.height = "95px";
launcher.style.borderRadius = "50%";

launcher.style.background = "blue";
launcher.style.border = "4px solid white";

launcher.style.display = "flex";
launcher.style.flexDirection = "column";   
launcher.style.alignItems = "center";
launcher.style.justifyContent = "center";

launcher.style.color = "white";
launcher.style.fontSize = "12px";
launcher.style.fontWeight = "bold";
launcher.style.textAlign = "center";
launcher.style.lineHeight = "1.1";

launcher.style.boxSizing = "border-box";
launcher.style.cursor = "pointer";
launcher.style.zIndex = "99999";

// ICON
const icon = document.createElement("div");
icon.innerHTML = `
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M4 4h16c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H8l-4 4V6c0-1.1.9-2 2-2z"/>
  </svg>
`;

// TEXT
const label = document.createElement("div");
label.innerHTML = "Chat to us";

// ADD TO BUTTON
launcher.appendChild(icon);
launcher.appendChild(label);

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

const closeBtn = document.createElement("div");
closeBtn.innerHTML = "✖";

closeBtn.style.position = "absolute";
closeBtn.style.top = "8px";
closeBtn.style.right = "10px";
closeBtn.style.cursor = "pointer";
closeBtn.style.color = "white";
closeBtn.style.fontSize = "16px";
closeBtn.style.fontWeight = "bold";

closeBtn.onclick = () => {
  popup.style.display = "none";
};

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
