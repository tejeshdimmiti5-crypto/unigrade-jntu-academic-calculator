// UniGrade — JNTUK B.Tech R23 SGPA Calculator
// JNTUK R23: SGPA = Σ(Ci × Gi) / ΣCi
// Grades: S=10, A=9, B=8, C=7, D=6, E=5, F/Ab=0.

const gradePoints = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
  Ab: 0
};

const tableBody = document.querySelector("#sgpaTable tbody");

function createRows() {
  tableBody.innerHTML = "";

  for (let i = 1; i <= 12; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Subject ${i}</td>
      <td>
        <input type="number" min="0" step="0.5" class="credit"
               placeholder="Credits" aria-label="Subject ${i} credits">
      </td>
      <td>
        <select class="grade" aria-label="Subject ${i} grade">
          <option value="">Select</option>
          <option value="S">S — 10</option>
          <option value="A">A — 9</option>
          <option value="B">B — 8</option>
          <option value="C">C — 7</option>
          <option value="D">D — 6</option>
          <option value="E">E — 5</option>
          <option value="F">F — 0</option>
          <option value="Ab">Ab — 0</option>
        </select>
      </td>
    `;
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
    const rawCredit = credits[i].value.trim();
    const credit = Number(rawCredit);
    const grade = grades[i].value;

    // Blank rows are ignored; a partially completed row is rejected.
    if (rawCredit === "" && grade === "") continue;
    if (!Number.isFinite(credit) || credit <= 0 || !grade) {
      alert(`Complete the credits and grade for Subject ${i + 1}.`);
      return;
    }

    totalCredits += credit;
    totalGradePoints += credit * gradePoints[grade];
    subjects++;
  }

  if (!subjects || totalCredits <= 0) {
    alert("Enter at least one subject with credits and grade.");
    return;
  }

  // JNTUK R23 requires SGPA to be rounded to 2 decimal places.
  const sgpa = totalGradePoints / totalCredits;

  document.getElementById("sgpaResult").textContent = sgpa.toFixed(2);
  document.getElementById("creditResult").textContent = totalCredits.toFixed(1);
  document.getElementById("gpResult").textContent = totalGradePoints.toFixed(2);

  // JNTUK R23 specifies the CGPA-to-percentage formula, not an SGPA-to-percentage formula.
  const percentageBox = document.getElementById("percentageResult");
  if (percentageBox) percentageBox.closest(".result-box")?.remove();

  document.getElementById("performance").textContent =
    sgpa >= 9 ? "S / A range" :
    sgpa >= 8 ? "B range" :
    sgpa >= 7 ? "C range" :
    sgpa >= 6 ? "D range" :
    sgpa >= 5 ? "E range" :
    "Below E range";

  document.getElementById("resultCard").style.display = "block";
}

function resetCalculator() {
  createRows();
  document.getElementById("resultCard").style.display = "none";
}

createRows();
document.getElementById("calculateBtn")?.addEventListener("click", calculateSGPA);
document.getElementById("resetBtn")?.addEventListener("click", resetCalculator);
