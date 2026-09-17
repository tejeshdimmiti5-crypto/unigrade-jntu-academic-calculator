const gradePoints = { S: 10, "A+": 9, A: 8, B: 7, C: 6, D: 5, E: 4, F: 0 };
const tableBody = document.querySelector("#sgpaTable tbody");

function createRows() {
  tableBody.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>Subject ${i}</td><td><input type="number" min="0" step="0.5" class="credit" placeholder="Credits"></td><td><select class="grade"><option value="">Select</option><option>S</option><option>A+</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option></select></td>`;
    tableBody.appendChild(row);
  }
}

function calculateSGPA() {
  const credits = document.querySelectorAll(".credit");
  const grades = document.querySelectorAll(".grade");
  let totalCredits = 0;
  let totalGradePoints = 0;
  let subjects = 0;

  for (let i = 0; i < credits.length; i++) {
    const credit = Number(credits[i].value);
    const grade = grades[i].value;
    if (credit > 0 && grade !== "") {
      totalCredits += credit;
      totalGradePoints += credit * gradePoints[grade];
      subjects++;
    }
  }

  if (!subjects || totalCredits <= 0) {
    alert("Enter at least one subject with credits and grade.");
    return;
  }

  const sgpa = totalGradePoints / totalCredits;
  document.getElementById("sgpaResult").textContent = sgpa.toFixed(2);
  document.getElementById("creditResult").textContent = totalCredits.toFixed(1);
  document.getElementById("gpResult").textContent = totalGradePoints.toFixed(2);
  document.getElementById("percentageResult").textContent = Math.max(0, (sgpa - 0.75) * 10).toFixed(2) + "%";
  document.getElementById("performance").textContent = sgpa >= 9.5 ? "Outstanding" : sgpa >= 8.5 ? "Excellent" : sgpa >= 7.5 ? "Very Good" : sgpa >= 6.5 ? "Good" : sgpa >= 5.5 ? "Average" : "Needs Improvement";
  document.getElementById("resultCard").style.display = "block";
}

function resetCalculator() {
  createRows();
  document.getElementById("resultCard").style.display = "none";
}

createRows();
document.getElementById("calculateBtn")?.addEventListener("click", calculateSGPA);
document.getElementById("resetBtn")?.addEventListener("click", resetCalculator);
