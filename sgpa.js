
function loadSubjects(){

let table=document.getElementById("subjectTable");

table.innerHTML=`

<tr>

<th>Subject</th>

<th>Credits</th>

<th>Grade</th>

</tr>

<tr>

<td>Programming for Problem Solving</td>

<td>3</td>

<td>

<select>

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

<tr>

<td>Mathematics-I</td>

<td>4</td>

<td>

<select>

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

<tr>

<td>Engineering Physics</td>

<td>3</td>

<td>

<select>

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

}
