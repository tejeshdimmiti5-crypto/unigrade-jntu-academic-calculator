const gradePoint={

S:10,
A:9,
B:8,
C:7,
D:6,
E:5,
F:0

};

function loadSubjects(){

let university=document.getElementById("university").value;

let regulation=document.getElementById("regulation").value;

let branch=document.getElementById("branch").value;

let semester=document.getElementById("semester").value;

let list=subjectData[university][regulation][branch][semester];

let table=document.getElementById("subjectTable");

table.innerHTML=`

<tr>

<th>Subject</th>

<th>Credits</th>

<th>Grade</th>

</tr>

`;

list.forEach((sub,index)=>{

table.innerHTML+=`

<tr>

<td>${sub.name}</td>

<td>${sub.credits}</td>

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

table.innerHTML+=`

<tr>

<td colspan="3">

<button onclick="calculateSGPA()">

Calculate SGPA

</button>

</td>

</tr>

`;

}

function calculateSGPA(){

let university=document.getElementById("university").value;

let regulation=document.getElementById("regulation").value;

let branch=document.getElementById("branch").value;

let semester=document.getElementById("semester").value;

let list=subjectData[university][regulation][branch][semester];

let totalCredits=0;

let totalPoints=0;

list.forEach((sub,index)=>{

let grade=document.getElementById("g"+index).value;

totalCredits+=sub.credits;

totalPoints+=sub.credits*gradePoint[grade];

});

let sgpa=(totalPoints/totalCredits).toFixed(2);

let percentage=((sgpa-0.75)*10).toFixed(2);

document.getElementById("result").style.display="block";

document.getElementById("result").innerHTML=`

<h2>Result</h2>

<p><b>Total Credits:</b> ${totalCredits}</p>

<p><b>SGPA:</b> ${sgpa}</p>

<p><b>Percentage:</b> ${percentage}%</p>

`;

}
