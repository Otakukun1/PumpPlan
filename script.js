const weeks = 10; // Your program has 10 weeks
const weekList = document.getElementById("week-list");

// Generate Week Buttons
for (let i = 1; i <= weeks; i++) {
    const btn = document.createElement("button");
    btn.textContent = `Week ${i}`;
    btn.onclick = () => location.href = `week${i}.html`; // Links to each week page
    weekList.appendChild(btn);
}
