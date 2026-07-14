// ===============================
// UniGrade SGPA Calculator (R23)
// ===============================

// Grade Mapping
const gradePoints = {
    "S": 10,
    "A+": 9,
    "A": 8,
    "B": 7,
    "C": 6,
    "D": 5,
    "E": 4,
    "F": 0
};

const tableBody = document.querySelector("#sgpaTable tbody");

// -------------------------------
// Generate 12 Subject Rows
// -------------------------------

function createRows() {

    tableBody.innerHTML = "";

    for (let i = 1; i <= 12; i++) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>Subject ${i}</td>

            <td>
                <input
                    type="number"
                    min="0"
                    max="10"
                    class="credit"
                    placeholder="Credits">
            </td>

            <td>

                <select class="grade">

                    <option value="">Select</option>

                    <option value="S">S</option>

                    <option value="A+">A+</option>

                    <option value="A">A</option>

                    <option value="B">B</option>

                    <option value="C">C</option>

                    <option value="D">D</option>

                    <option value="E">E</option>

                    <option value="F">F</option>

                </select>

            </td>
        `;

        tableBody.appendChild(row);

    }

}

createRows();


// -------------------------------
// Calculate SGPA
// -------------------------------

document
.getElementById("calculateBtn")
.addEventListener("click", calculateSGPA);


function calculateSGPA() {

    const credits =
        document.querySelectorAll(".credit");

    const grades =
        document.querySelectorAll(".grade");

    let totalCredits = 0;
    let totalGradePoints = 0;
    let subjects = 0;

    for (let i = 0; i < credits.length; i++) {

        const credit =
            parseFloat(credits[i].value);

        const grade =
            grades[i].value;

        if (!isNaN(credit) && grade !== "") {

            totalCredits += credit;

            totalGradePoints +=
                credit * gradePoints[grade];

            subjects++;

        }

    }

    if (subjects === 0) {

        alert("Enter at least one subject.");

        return;

    }

    const sgpa =
        totalGradePoints / totalCredits;

    const percentage =
        (sgpa - 0.75) * 10;

    let performance = "";

    if (sgpa >= 9.5)
        performance = "Outstanding";

    else if (sgpa >= 8.5)
        performance = "Excellent";

    else if (sgpa >= 7.5)
        performance = "Very Good";

    else if (sgpa >= 6.5)
        performance = "Good";

    else if (sgpa >= 5.5)
        performance = "Average";

    else
        performance = "Needs Improvement";

    document.getElementById("sgpaResult")
        .textContent = sgpa.toFixed(2);

    document.getElementById("creditResult")
        .textContent = totalCredits;

    document.getElementById("gpResult")
        .textContent = totalGradePoints.toFixed(2);

    document.getElementById("percentageResult")
        .textContent = percentage.toFixed(2) + "%";

    document.getElementById("performance")
        .textContent = performance;

    document.getElementById("resultCard")
        .style.display = "block";

}


// -------------------------------
// Reset
// -------------------------------

document
.getElementById("resetBtn")
.addEventListener("click", resetCalculator);


function resetCalculator() {

    createRows();

    document.getElementById("resultCard")
        .style.display = "none";

}
