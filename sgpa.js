const gradePoints = {
    "S":10,
    "A":9,
    "B":8,
    "C":7,
    "D":6,
    "E":5,
    "F":0
};

function loadSubjects(){

    let table = `
    <tr>
        <th>Subject</th>
        <th>Credits</th>
        <th>Grade</th>
    </tr>
    `;

    subjects.forEach((subject,index)=>{

        table += `
        <tr>

            <td>${subject.name}</td>

            <td>${subject.credits}</td>

            <td>

                <select id="g${index}">

                    <option>S</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>

                </select>

            </td>

        </tr>
        `;

    });

    table += `
    <tr>

        <td colspan="3">

        <button onclick="calculateSGPA()">

        Calculate SGPA

        </button>

        </td>

    </tr>
    `;

    document.getElementById("subjectTable").innerHTML = table;

}

function calculateSGPA(){

    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((subject,index)=>{

        let grade = document.getElementById("g"+index).value;

        totalCredits += subject.credits;

        totalPoints += subject.credits * gradePoints[grade];

    });

    let sgpa = (totalPoints / totalCredits).toFixed(2);

    let percentage = ((sgpa - 0.75) * 10).toFixed(2);

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML = `

        <h2>Result</h2>

        <p><b>Total Credits :</b> ${totalCredits}</p>

        <p><b>Total Credit Points :</b> ${totalPoints.toFixed(2)}</p>

        <p><b>SGPA :</b> ${sgpa}</p>

        <p><b>Percentage :</b> ${percentage}%</p>

    `;

}
