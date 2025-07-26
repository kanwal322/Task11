
const billingToggle = document.getElementById("billingToggle");
const durationCells = document.querySelectorAll(".pricing-row td:not(:first-child)");
const accordionDurations = {
  starter: document.querySelector(".duration-starter"),
  pro: document.querySelector(".duration-pro"),
  premium: document.querySelector(".duration-premium")
};

billingToggle.addEventListener("change", () => {
  durationCells.forEach(cell => {
    const value = billingToggle.checked ? cell.dataset.yearly : cell.dataset.monthly;
    cell.textContent = value;
  });

  accordionDurations.starter.textContent = billingToggle.checked ? "3 Months" : "1 Month";
  accordionDurations.pro.textContent = billingToggle.checked ? "6 Months" : "2 Months";
  accordionDurations.premium.textContent = billingToggle.checked ? "9 Months" : "3 Months";
});

const planHeaders = document.querySelectorAll("thead th:not(:first-child)");
const tableRows = document.querySelectorAll("tbody tr");

planHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    planHeaders.forEach(h => h.classList.remove("selected"));
    tableRows.forEach(row => {
      row.querySelectorAll("td").forEach(td => td.classList.remove("selected"));
    });

    header.classList.add("selected");
    tableRows.forEach(row => {
      const cell = row.querySelectorAll("td")[index];
      if (cell) cell.classList.add("selected");
    });
  });
});

const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkToggle.checked);
});