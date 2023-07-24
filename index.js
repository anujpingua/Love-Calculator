function calculateLove() {
  const yourName = document.getElementById("yourName").value.trim();
  const partnerName = document.getElementById("partnerName").value.trim();

  if (!yourName || !partnerName) {
    alert("Please enter both your names.");
    return;
  }

  const lovePercentage = Math.floor(Math.random() * 101);
  const resultElement = document.getElementById("result");
  resultElement.innerText = `Your love percentage is: ${lovePercentage}%`;
}
