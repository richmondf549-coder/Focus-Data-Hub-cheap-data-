let balance = 0;

function addMessage(text, type="bot") {
  const chat = document.getElementById("chat");
  const div = document.createElement("div");

  div.className = "message " + type;
  div.innerText = text;

  chat.appendChild(div);
}

function sendMessage() {
  const input = document.getElementById("input");
  const text = input.value;

  addMessage(text, "user");
  handleCommand(text);

  input.value = "";
}

function handleCommand(text) {
  text = text.toLowerCase();

  if (text.includes("buy")) {
    let network = text.includes("mtn") ? "MTN" : "Telecel";
    let amount = text.includes("1gb") ? 5 : 9;

    let phone = text.match(/\d{10}/)?.[0];

    if (!phone) {
      addMessage("Enter valid phone number");
      return;
    }

    buyData(network, amount, phone);
  } else if (text.includes("balance")) {
    addMessage("Balance: GHS " + balance);
  } else {
    addMessage("Try: Buy 1GB MTN 024xxxxxxx");
  }
}

function buyData(network, amount, phone) {
  addMessage("Processing...");

  setTimeout(() => {
    balance -= amount;
    document.getElementById("balance").innerText = "GHS " + balance;
    addMessage("✅ Data sent to " + phone);
  }, 1000);
}

function quickBuy(network, price) {
  let phone = prompt("Enter phone number:");
  if (!phone) return;

  buyData(network, price, phone);
}
