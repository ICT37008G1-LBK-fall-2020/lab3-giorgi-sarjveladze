let studentCount = parseInt(prompt('შეიტანე სტუდენტთა რაოდენობა:', ''));
let count = 0;
let studentsList = [];
let studentName = '';
while (count < studentCount) {
    studentName = prompt('შეიტანე სტუდენტის სახელი');
    studentsList.push(studentName);
    count++;
}
let keyword = prompt('შეიტანე საძიებო სიტყვა', '');
let filteredStudents = [];
for (let i = 0; i < studentsList.length; i++) {
    if (studentsList[i].indexOf(keyword) > -1) {
        filteredStudents.push(studentsList[i]);
    }
}
alert(filteredStudents);