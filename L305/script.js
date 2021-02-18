let studentCount = parseInt(prompt('შეიტანე სტუდენტთა რაოდენობა:', ''));
let count = 0;
let studentsList = [];
let studentName = '';
while (count < studentCount) {
    studentName = prompt('შეიტანეთ სტუდენტის სახელი');
    studentsList.push(studentName);
    count++;
}
alert(studentsList.sort());