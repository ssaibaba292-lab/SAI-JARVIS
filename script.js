
const result = document.getElementById("result");
const imageResult = document.getElementById("imageResult");
const imageInput = document.getElementById("chartImage");
const preview = document.getElementById("imagePreview");

function analyze() {
  const market = document.getElementById("market").value;
  const pair = document.getElementById("pair").value.trim().toUpperCase();
  const timeframe = document.getElementById("timeframe").value;

  if (!pair) {
    result.textContent = "Please enter a trading pair.";
    return;
  }

  result.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = "SAI JARVIS ANALYSIS";

  const details = document.createElement("p");
  details.textContent =
    "Market: " + market +
    " | Pair: " + pair +
    " | Timeframe: " + timeframe;

  const signal = document.createElement("h2");
  signal.textContent = "WAIT";

  const note = document.createElement("p");
  note.textContent =
    "Live market data is not connected yet. No trade signal generated.";

  result.append(heading, details, signal, note);
  
  document.getElementById("rsi").textContent = "--";
  document.getElementById("macd").textContent = "--";
  document.getElementById("trend").textContent = "WAIT";
}

imageInput.addEventListener("change", function() {
  const file = this.files[0];

  preview.innerHTML = "";
  imageResult.textContent = "";

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    imageResult.textContent = "Please select an image file.";
    this.value = "";
    return;
  }

  const imageURL = URL.createObjectURL(file);
  const img = document.createElement("img");

  img.src = imageURL;
  img.alt = "Trading chart preview";

  img.onload = () => URL.revokeObjectURL(imageURL);

  preview.appendChild(img);
  imageResult.textContent =
    "Chart uploaded successfully. AI analysis connection is pending.";
});

function analyzeImage() {
  const file = imageInput.files[0];

  if (!file) {
    imageResult.textContent = "Please upload a chart screenshot first.";
    return;
  }

  imageResult.textContent =
    "Screenshot received. AI vision API is not connected yet.";
}
