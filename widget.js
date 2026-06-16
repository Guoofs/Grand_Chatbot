const launcher = document.createElement("div");
launcher.innerText = "💬";
document.body.appendChild(launcher);

const popup = document.createElement("div");
popup.style.display = "none";
document.body.appendChild(popup);

const frame = document.createElement("iframe");
frame.src = "https://guoofs.github.io/Grand_Chatbot/";
popup.appendChild(frame);

launcher.onclick = () => {
  popup.style.display = "block";
};
