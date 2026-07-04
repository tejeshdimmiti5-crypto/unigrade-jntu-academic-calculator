function calculateCGPA(){

let total = 0;
let count = 0;

for(let i=1;i<=8;i++){

let value = parseFloat(document.getElementById("sem"+i).value);

if(!isNaN(value)){

total += value;
count++;

}

}

if(count===0){

document.getElementById("result").innerHTML="Please enter at least one SGPA.";

return;

}

let cgpa=(total/count).toFixed(2);

let percentage=((cgpa-0.75)*10).toFixed(2);

let grade="";

if(cgpa>=9)
grade="Outstanding";

else if(cgpa>=8)
grade="First Class with Distinction";

else if(cgpa>=7)
grade="First Class";

else if(cgpa>=6)
grade="Second Class";

else
grade="Pass";

document.getElementById("result").style.display="block";

document.getElementById("result").innerHTML=`

<h2>Result</h2>

<p><b>Completed Semesters:</b> ${count}</p>

<p><b>CGPA:</b> ${cgpa}</p>

<p><b>Percentage:</b> ${percentage}%</p>

<p><b>Classification:</b> ${grade}</p>

`;

}
