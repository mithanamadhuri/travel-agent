async function generatePlan() {

  const destination = document.getElementById("destination").value;
  const days = document.getElementById("days").value;
  const budget = document.getElementById("budget").value;
  const interests = document.getElementById("interests").value;

  document.getElementById("result").innerText =
    "🤖 Creating your travel plan...";

  const response = await fetch("YOUR_WEBHOOK_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      destination,
      days,
      budget,
      interests
    })
  });

  const data = await response.json();

  document.getElementById("result").innerText =
    data.output || JSON.stringify(data);
}
