// UniGrade — JNTUK B.Tech R23 CGPA Calculator
// JNTUK R23: CGPA = Σ(Ci × Si) / ΣCi
// Ci = semester credit weight, Si = semester SGPA.

const tbody = document.querySelector("#cgpaTable tbody");

function createSemesterRows() {
  tbody.innerHTML = "";

  for (let i = 1; i <= 8; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="semester-label">Semester ${i}</td>
      <td>
        <input type="number" min="0" step="0.5" class="credits"
               placeholder="Total credits" aria-label="Semester ${i} total credits">
      </td>
      <td>
        <input type="number" min="0" max="10" step="0.01" class="sgpa"
               placeholder="SGPA" aria-label="Semester ${i} SGPA">
      </td>
    `;
    tbody.appendChild(row);
  }
}

function getCgpaBand(cgpa) {
  if (cgpa >= 7.5) return "First Class with Distinction (≥ 7.5)";
  if (cgpa >= 6.5) return "First Class (6.5–<7.5)";
  if (cgpa >= 5.5) return "Second Class (5.5–<6.5)";
  if (cgpa >= 5.0) return "Pass Class (5.0–<5.5)";
  return "Below Pass Class threshold (<5.0)";
}

function calculateCGPA() {
  const creditInputs = [...document.querySelectorAll(".credits")];
  const sgpaInputs = [...document.querySelectorAll(".sgpa")];

  let totalCredits = 0;
  let weightedPoints = 0;
  let semesters = 0;

  for (let i = 0; i < creditInputs.length; i++) {
    const rawCredits = creditInputs[i].value.trim();
    const rawSgpa = sgpaInputs[i].value.trim();

    if (rawCredits === "" && rawSgpa === "") continue;

    const credits = Number(rawCredits);
    const sgpa = Number(rawSgpa);

    if (!Number.isFinite(credits) || credits <= 0 || !Number.isFinite(sgpa) || sgpa < 0 || sgpa > 10) {
      alert(`Enter valid total credits and SGPA for Semester ${i + 1}.`);
      return;
    }

    totalCredits += credits;
    weightedPoints += credits * sgpa;
    semesters++;
  }

  if (!semesters || totalCredits <= 0) {
    alert("Enter at least one semester with total credits and SGPA.");
    return;
  }

  // JNTUK R23 requires CGPA to be rounded to 2 decimal places.
  const cgpa = weightedPoints / totalCredits;

  // Official JNTUK R23 CGPA-to-percentage conversion.
  const percentage = Math.max(0, (cgpa - 0.5) * 10);

  document.getElementById("cgpaResult").textContent = cgpa.toFixed(2);
  document.getElementById("cgpaCredits").textContent = Number.isInteger(totalCredits) ? totalCredits : totalCredits.toFixed(1);
  document.getElementById("cgpaPercentage").textContent = percentage.toFixed(2) + "%";
  document.getElementById("cgpaStatus").textContent = getCgpaBand(cgpa);
  document.getElementById("cgpaResultCard").style.display = "block";
}

document.getElementById("calculateCGPA")?.addEventListener("click", calculateCGPA);

document.getElementById("resetCGPA")?.addEventListener("click", () => {
  createSemesterRows();
  document.getElementById("cgpaResultCard").style.display = "none";
});

createSemesterRows();
