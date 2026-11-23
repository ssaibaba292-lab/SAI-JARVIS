
function analyze() {
  const market = document.getElementById("market").value;
  const pair = document.getElementById("pair").value.trim();
  const result = document.getElementById("result");

  if (!pair) {
    result.innerHTML = "Please enter a trading pair.";
    return;
  }

  result.innerHTML = `
    <h3>SAI JARVIS ANALYSIS</h3>
    <br>
    Market: ${market}<br><br>
    Pair: ${pair.toUpperCase()}<br><br>
    Status: Waiting for live data<br><br>
    Signal: WAIT
  `;
}
