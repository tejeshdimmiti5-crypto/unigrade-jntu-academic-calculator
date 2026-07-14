// ================================
// UniGrade CGPA Calculator
// ================================

const tbody =
document.querySelector("#cgpaTable tbody");

// Create 8 Semester Rows

function createSemesterRows(){

tbody.innerHTML="";

for(let i=1;i<=8;i++){

const row=document.createElement("tr");

row.innerHTML=`

<td>Semester ${i}</td>

<td>

<input
type="number"
class="credits"
placeholder="Credits">

</td>

<td>

<input
type="number"
step="0.01"
class="sgpa"
placeholder="SGPA">

</td>

`;

tbody.appendChild(row);

}

}

createSemesterRows();


// Calculate CGPA

document
.getElementById("calculateCGPA")
.addEventListener("click",calculateCGPA);


function calculateCGPA(){

const credits=
document.querySelectorAll(".credits");

const sgpas=
document.querySelectorAll(".sgpa");

let totalCredits=0;

let weightedPoints=0;

let semesters=0;

for(let i=0;i<credits.length;i++){

const c=parseFloat(credits[i].value);

const s=parseFloat(sgpas[i].value);

if(!isNaN(c)&&!isNaN(s)){

totalCredits+=c;

weightedPoints+=c*s;

semesters++;

}

}

if(semesters===0){

alert("Enter Semester Details");

return;

}

const cgpa=
weightedPoints/totalCredits;

const percentage=
(cgpa-0.75)*10;

document.getElementById("cgpaResult")
.textContent=cgpa.toFixed(2);

document.getElementById("cgpaCredits")
.textContent=totalCredits;

document.getElementById("cgpaPercentage")
.textContent=
percentage.toFixed(2)+"%";

document.getElementById("cgpaStatus")
.textContent=
cgpa>=4?"PASS":"FAIL";

document.getElementById("cgpaResultCard")
.style.display="block";

}

// Reset

document
.getElementById("resetCGPA")
.addEventListener("click",()=>{

createSemesterRows();

document.getElementById("cgpaResultCard")
.style.display="none";

});
