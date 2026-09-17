// UniGrade CGPA Calculator — CGPA from semester SGPAs only

const tbody = document.querySelector("#cgpaTable tbody");

function createSemesterRows() {
    tbody.innerHTML = "";

    for (let i = 1; i <= 8; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="semester-label">Semester ${i}</td>
            <td>
                <input type="number" min="0" max="10" step="0.01"
                       class="sgpa" placeholder="Enter SGPA" aria-label="Semester ${i} SGPA">
            </td>
        `;
        tbody.appendChild(row);
    }
}

function calculateCGPA() {
    const sgpas = [...document.querySelectorAll(".sgpa")]
        .map(input => parseFloat(input.value))
        .filter(value => !Number.isNaN(value));

    if (sgpas.length === 0) {
        alert("Enter at least one semester SGPA.");
        return;
    }

    const invalid = sgpas.some(value => value < 0 || value > 10);
    if (invalid) {
        alert("SGPA must be between 0 and 10.");
        return;
    }

    // CGPA is calculated from the entered semester SGPAs.
    const cgpa = sgpas.reduce((sum, value) => sum + value, 0) / sgpas.length;
    const percentage = Math.max(0, (cgpa - 0.75) * 10);

    document.getElementById("cgpaResult").textContent = cgpa.toFixed(2);
    document.getElementById("cgpaSemesters").textContent = sgpas.length;
    document.getElementById("cgpaPercentage").textContent = percentage.toFixed(2) + "%";
    document.getElementById("cgpaStatus").textContent = cgpa >= 4 ? "PASS" : "FAIL";
    document.getElementById("cgpaResultCard").style.display = "block";
}

document.getElementById("calculateCGPA").addEventListener("click", calculateCGPA);

document.getElementById("resetCGPA").addEventListener("click", () => {
    createSemesterRows();
    document.getElementById("cgpaResultCard").style.display = "none";
});

createSemesterRows();
